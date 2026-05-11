"use server";

import { z } from "zod";
import { saveMvpInteraction } from "./lib/supabase-server";

const memberSchema = z.object({
  nama: z
    .string()
    .trim()
    .min(1, "Nama wajib diisi.")
    .min(3, "Nama minimal 3 karakter."),
  email: z
    .string()
    .trim()
    .min(1, "Email wajib diisi.")
    .email("Format email belum benar."),
});

export async function createMemberAction(_previousState, formData) {
  const rawData = {
    nama: String(formData.get("nama") || "").trim(),
    email: String(formData.get("email") || "").trim(),
  };

  const validated = memberSchema.safeParse(rawData);

  if (!validated.success) {
    return {
      success: false,
      message: "Data belum valid. Periksa isian form.",
      errors: validated.error.flatten().fieldErrors,
      submittedAt: Date.now(),
    };
  }

  const { nama, email } = validated.data;

  try {
    await saveMvpInteraction(
      `membership | nama: ${nama} | email: ${email} | status: daftar member`
    );

    return {
      success: true,
      message:
        "Berhasil daftar! Data tersimpan. Lengkapi pembayaran dengan email yang kami kirim.",
      errors: {},
      submittedAt: Date.now(),
    };
  } catch (error) {
    return {
      success: false,
      message: `Gagal menyimpan data: ${error.message}`,
      errors: {},
      submittedAt: Date.now(),
    };
  }
}