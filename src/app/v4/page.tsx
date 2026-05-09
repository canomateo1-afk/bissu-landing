import { redirect } from "next/navigation";

// /v4 es ahora alias del home — redirect 308 para preservar SEO
export default function V4Page() {
  redirect("/");
}
