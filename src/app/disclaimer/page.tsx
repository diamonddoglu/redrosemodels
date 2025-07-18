import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "免责声明 - xiaohongmodels.vercel.app",
  description: "xiaohongmodels.vercel.app 免责声明和法律声明",
  robots: "noindex, nofollow",
};

export default function DisclaimerPage() {
  return <LegalPage type="disclaimer" />;
} 