"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { createMemberAction } from "../member-actions";

const initialState = {
  success: false,
  message: "Lengkapi pembayaran dengan email yang kami kirim",
  errors: {},
  submittedAt: null,
};

export default function HomeMemberForm() {
  const formRef = useRef(null);
  const [state, formAction] = useActionState(createMemberAction, initialState);

  useEffect(() => {
    if (state.success && state.submittedAt) {
      formRef.current?.reset();
    }
  }, [state.success, state.submittedAt]);

  return (
    <form
      ref={formRef}
      action={formAction}
      noValidate
      className="space-y-[28px]"
    >
      <label className="block">
        <span className="mb-3 block text-[18px] font-semibold">
          Nama
        </span>

        <input
          name="nama"
          type="text"
          placeholder="Masukkan Nama . . ."
          className="h-[56px] w-full rounded-[12px] border border-[#F0F2F8] bg-transparent px-5 text-[#F0F2F8] outline-none placeholder:text-[#F0F2F8]/60"
        />

        {state.errors?.nama?.[0] && (
          <p className="mt-2 text-[13px] text-[#FE7F2D]">
            {state.errors.nama[0]}
          </p>
        )}
      </label>

      <label className="block">
        <span className="mb-3 block text-[18px] font-semibold">
          Email yang Telah Terdaftar di 2ndTime
        </span>

        <input
          name="email"
          type="text"
          placeholder="Masukkan Email . . ."
          className="h-[56px] w-full rounded-[12px] border border-[#F0F2F8] bg-transparent px-5 text-[#F0F2F8] outline-none placeholder:text-[#F0F2F8]/60"
        />

        {state.errors?.email?.[0] && (
          <p className="mt-2 text-[13px] text-[#FE7F2D]">
            {state.errors.email[0]}
          </p>
        )}
      </label>

      <div className="flex justify-center">
        <MemberSubmitButton />
      </div>

      <p
        aria-live="polite"
        className={`pt-2 text-center text-[14px] leading-[20px] ${
          state.success ? "text-[#0DBA0D]" : "text-[#FE7F2D]"
        }`}
      >
        {state.message}
      </p>
    </form>
  );
}

function MemberSubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="mt-6 h-[56px] w-[190px] rounded-[50px] bg-[#FE7F2D] text-[16px] font-semibold text-[#F0F2F8] transition-all duration-300 hover:bg-white hover:text-[#FE7F2D] disabled:cursor-not-allowed disabled:opacity-70"
    >
      {pending ? "Mendaftar..." : "Daftar Sekarang"}
    </button>
  );
}