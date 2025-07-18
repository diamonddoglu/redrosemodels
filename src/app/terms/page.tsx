import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "服务条款 - xiaohongmodels.com",
  description: "xiaohongmodels.com 服务条款和使用协议",
  robots: "noindex, nofollow",
};

export default function TermsPage() {
  return <LegalPage type="terms" />;
} 