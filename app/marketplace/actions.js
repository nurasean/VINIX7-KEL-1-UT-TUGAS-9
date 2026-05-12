"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";
import { saveMvpInteraction } from "../lib/supabase-server";

function resolveFormData(prevStateOrFormData, maybeFormData) {
  if (maybeFormData && typeof maybeFormData.get === "function") {
    return maybeFormData;
  }

  if (prevStateOrFormData && typeof prevStateOrFormData.get === "function") {
    return prevStateOrFormData;
  }

  return null;
}

function getText(formData, fieldName, fallback = "") {
  if (!formData || typeof formData.get !== "function") {
    return fallback;
  }

  return String(formData.get(fieldName) || fallback).trim();
}

function getNumber(formData, fieldName, fallback = 0) {
  if (!formData || typeof formData.get !== "function") {
    return fallback;
  }

  const value = Number(formData.get(fieldName));
  return Number.isFinite(value) ? value : fallback;
}

function getSafeRedirectPath(path) {
  if (!path || typeof path !== "string") {
    return "/marketplace";
  }

  if (!path.startsWith("/")) {
    return "/marketplace";
  }

  return path;
}

async function saveInteractionSafely(message) {
  try {
    await saveMvpInteraction(message);
  } catch (error) {
    console.error("Gagal menyimpan interaksi MVP:", error);
  }
}

const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Email wajib diisi.")
    .email("Format email tidak valid."),
  password: z
    .string()
    .min(1, "Password wajib diisi.")
    .min(6, "Password minimal 6 karakter."),
  next: z.string().optional(),
});

/**
 * Zod Validation untuk checkout.
 */
const checkoutSchema = z.object({
  product: z.string().trim().min(1, "Produk checkout tidak valid."),
  payment: z.string().trim().min(1, "Metode pembayaran wajib dipilih."),
  address: z
    .string()
    .trim()
    .min(1, "Alamat wajib diisi.")
    .min(8, "Alamat minimal 8 karakter."),
  promoCode: z.string().trim().optional(),
  quantity: z.coerce.number().int().min(1, "Jumlah produk tidak valid."),
  total: z.coerce.number().min(1, "Total pembayaran tidak valid."),
});

/**
 * Zod Validation untuk hapus produk checkout.
 */
const removeCheckoutItemSchema = z.object({
  product: z.string().trim().min(1, "Produk yang dihapus tidak valid."),
});

/**
 * Zod Validation untuk chat.
 */
const chatSchema = z.object({
  message: z
    .string()
    .trim()
    .min(1, "Pesan tidak boleh kosong.")
    .max(500, "Pesan maksimal 500 karakter."),
});

export async function loginAction(prevStateOrFormData, maybeFormData) {
  const formData = resolveFormData(prevStateOrFormData, maybeFormData);

  const rawData = {
    email: getText(formData, "email"),
    password: getText(formData, "password"),
    next: getText(formData, "next", "/marketplace"),
  };

  const validated = loginSchema.safeParse(rawData);

  if (!validated.success) {
    return {
      success: false,
      message: "Login gagal. Periksa kembali email dan password.",
      errors: validated.error.flatten().fieldErrors,
    };
  }

  const { email, next } = validated.data;

  const cookieStore = await cookies();

  cookieStore.set("demo_session", "logged-in", {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24,
    secure: process.env.NODE_ENV === "production",
  });

  await saveInteractionSafely(
    `login | email: ${email} | status: user berhasil login ke marketplace demo`
  );

  const redirectPath = getSafeRedirectPath(next);
  const separator = redirectPath.includes("?") ? "&" : "?";

  redirect(`${redirectPath}${separator}login=success`);
}

export async function checkoutAction(prevStateOrFormData, maybeFormData) {
  const formData = resolveFormData(prevStateOrFormData, maybeFormData);

  const rawData = {
    product: getText(formData, "product"),
    payment: getText(formData, "payment"),
    address: getText(formData, "address"),
    promoCode: getText(formData, "promoCode"),
    quantity: getNumber(formData, "quantity", 1),
    total: getNumber(formData, "total", 0),
  };

  const validated = checkoutSchema.safeParse(rawData);

  if (!validated.success) {
    return {
      success: false,
      message: "Checkout gagal. Periksa kembali data order.",
      errors: validated.error.flatten().fieldErrors,
    };
  }

  const { product, payment, address, promoCode, quantity, total } =
    validated.data;

  await saveInteractionSafely(
    `checkout | produk: ${product} | jumlah: ${quantity} | alamat: ${address} | metode pembayaran: ${payment} | kode promo: ${
      promoCode || "-"
    } | total: Rp ${total.toLocaleString("id-ID")}`
  );

  redirect("/marketplace/checkout/success");
}

export async function removeCheckoutItemAction(product) {
  const validated = removeCheckoutItemSchema.safeParse({
    product,
  });

  if (!validated.success) {
    return {
      success: false,
      message: "Produk gagal dihapus.",
    };
  }

  await saveInteractionSafely(
    `checkout | produk: ${validated.data.product} | status: user menghapus produk dari checkout`
  );

  return {
    success: true,
    message: "Produk berhasil dihapus dari checkout.",
  };
}

export async function sendChatAction(prevStateOrFormData, maybeFormData) {
  const formData = resolveFormData(prevStateOrFormData, maybeFormData);

  const rawData = {
    message: getText(formData, "message"),
  };

  const validated = chatSchema.safeParse(rawData);

  if (!validated.success) {
    redirect("/marketplace/chat?sent=empty");
  }

  const { message } = validated.data;

  await saveInteractionSafely(
    `chat | buyer mengirim pesan ke seller: ${message}`
  );

  redirect("/marketplace/chat?sent=success");
}