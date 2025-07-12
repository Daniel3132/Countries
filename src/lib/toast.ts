"use client";

import { toast } from "sonner";

export function showToast(message: string, type: "error" | "info" = "error") {
  if (type === "error") toast.error(message);
  else toast(message);
}
