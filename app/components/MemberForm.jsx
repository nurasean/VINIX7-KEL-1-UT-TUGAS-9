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

export default function MemberForm() {
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
      className="relative z-30 flex h-[348px] w-[733px] flex-col items-center gap-[32px]"
    >
      <div className="relative flex h-[94px] w-[733px] flex-col items-start gap-[8px]">
        <label
          htmlFor="nama"
          className="h-[30px] w-[733px] text-[20px] font-semibold leading-[30px] text-[#F0F2F8]"
        >
          Nama
        </label>

        <input
          id="nama"
          name="nama"
          type="text"
          placeholder="Masukkan Nama . . ."
          aria-describedby="nama-error"
          className="h-[56px] w-[733px] rounded-[20px] border border-[#F0F2F8] bg-transparent px-[16px] text-[16px] font-normal leading-[24px] text-[#F0F2F8] placeholder:text-[#F0F2F8] focus:outline-none"
        />

        {state.errors?.nama?.[0] && (
          <p
            id="nama-error"
            className="absolute -bottom-[24px] left-[16px] m-0 text-[13px] font-normal leading-[20px] text-[#FE7F2D]"
          >
            {state.errors.nama[0]}
          </p>
        )}
      </div>

      <div className="relative flex h-[94px] w-[733px] flex-col items-start gap-[8px]">
        <label
          htmlFor="email"
          className="h-[30px] w-[733px] text-[20px] font-semibold leading-[30px] text-[#F0F2F8]"
        >
          Email yang Telah Terdaftar di 2ndTime
        </label>

        <input
          id="email"
          name="email"
          type="text"
          placeholder="Masukkan Email . . ."
          aria-describedby="email-error"
          className="h-[56px] w-[733px] rounded-[20px] border border-[#F0F2F8] bg-transparent px-[16px] text-[16px] font-normal leading-[24px] text-[#F0F2F8] placeholder:text-[#F0F2F8] focus:outline-none"
        />

        {state.errors?.email?.[0] && (
          <p
            id="email-error"
            className="absolute -bottom-[24px] left-[16px] m-0 text-[13px] font-normal leading-[20px] text-[#FE7F2D]"
          >
            {state.errors.email[0]}
          </p>
        )}
      </div>

      <div className="flex h-[96px] w-[430px] flex-col items-center gap-[16px]">
        <MemberSubmitButton />

        <p
          aria-live="polite"
          className={`min-h-[24px] w-[430px] text-center text-[16px] font-normal leading-[24px] ${
            state.success ? "text-[#0DBA0D]" : "text-[#FE7F2D]"
          }`}
        >
          {state.message}
        </p>
      </div>
    </form>
  );
}

function MemberSubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="flex h-[56px] w-[198px] cursor-pointer items-center justify-center gap-[16px] rounded-[50px] bg-[#FE7F2D] px-[32px] py-[16px] text-[16px] font-semibold leading-[24px] text-[#F0F2F8] disabled:cursor-not-allowed disabled:opacity-70"
    >
      {pending ? "Mendaftar..." : "Daftar Sekarang"}
    </button>
  );
}