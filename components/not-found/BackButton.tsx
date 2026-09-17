"use client";

import { useRouter } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";

export function BackButton() {
  const router = useRouter();

  function handleBack() {
    if (window.history.length > 1) {
      router.back();
      return;
    }

    router.push("/");
  }

  return (
    <button className="nf-action nf-action-secondary" type="button" onClick={handleBack}>
      <FiArrowLeft aria-hidden="true" />
      بازگشت به صفحه قبل
    </button>
  );
}
