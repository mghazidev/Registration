"use client";
import React from "react";

import { useRouter } from "next/navigation";
export default function RegistrationPage() {
  const router = useRouter();

  React.useEffect(() => {
    router.replace(`/registration/get-started`);
  }, [router]);

  return null;
}
