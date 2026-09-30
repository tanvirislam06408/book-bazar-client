import type { Metadata } from "next";
import { LoginForm } from "@/components/auth/LoginForm";
import { AuthPerksPanel } from "@/components/auth/AuthPerksPanel";

export const metadata: Metadata = {
  title: "লগইন | BoiBazar - Student Used Book Marketplace in Bangladesh",
  description:
    "Log in to BoiBazar to buy and sell textbooks, admission guides, and novels directly with fellow students across Bangladesh. 100% Free.",
};

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#FAFBFD] flex items-center justify-center p-4 sm:p-6 lg:p-8 relative overflow-hidden">
      {/* Subtle Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-indigo-100/40 via-indigo-50/20 to-transparent pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-5xl mx-auto relative z-10 py-6 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Perks & Value Proposition (Visible on lg screens) */}
          <div className="hidden lg:block lg:col-span-6">
            <AuthPerksPanel />
          </div>

          {/* Right Column: Interactive Login Form */}
          <div className="lg:col-span-6 flex justify-center">
            <LoginForm />
          </div>
        </div>
      </div>
    </main>
  );
}
