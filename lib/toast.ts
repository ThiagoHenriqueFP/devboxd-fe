import { toast } from "react-toastify";

interface ToastProps {
  message: string;
  type: "success" | "error" | "info" | "warning";
}

export function toastMessage({ message, type }: ToastProps) {
  toast(message, {
    type,
  });
}
