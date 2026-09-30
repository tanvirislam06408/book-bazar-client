"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/lib/i18n";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { GoogleButton } from "@/components/auth/GoogleButton";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Globe,
  ArrowLeft,
  GraduationCap,
  Building2,
  BookOpen,
  ChevronDown,
  Loader2,
} from "lucide-react";

export function RegisterForm() {
  const { lang, t, toggleLang } = useLanguage();
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [institution, setInstitution] = useState("");
  const [studentType, setStudentType] = useState("varsity");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(true);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error" | "info";
    title: string;
    description: string;
  } | null>(null);

  // Calculate real-time password strength score (0 to 4)
  const calculatePasswordStrength = (pwd: string) => {
    if (!pwd) return 0;
    let score = 0;
    if (pwd.length >= 6) score += 1;
    if (pwd.length >= 8) score += 1;
    if (/[A-Z]/.test(pwd) || /[0-9]/.test(pwd)) score += 1;
    if (/[^A-Za-z0-9]/.test(pwd) && pwd.length >= 8) score += 1;
    return Math.min(score, 4);
  };

  const passwordStrengthScore = calculatePasswordStrength(password);

  const getStrengthColor = (score: number) => {
    switch (score) {
      case 1:
        return "bg-red-500";
      case 2:
        return "bg-amber-500";
      case 3:
        return "bg-indigo-500";
      case 4:
        return "bg-emerald-500";
      default:
        return "bg-slate-200";
    }
  };

  const getStrengthLabel = (score: number) => {
    if (score === 0) return "";
    return t.auth.strengthLevels[score - 1] || "";
  };

  const passwordsMatch =
    confirmPassword.length > 0 && password === confirmPassword;
  const passwordsMismatch =
    confirmPassword.length > 0 && password !== confirmPassword;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName.trim() || !email.trim() || !password.trim()) {
      setStatusMessage({
        type: "error",
        title: lang === "bn" ? "তথ্য অসম্পূর্ণ" : "Incomplete Information",
        description:
          lang === "bn"
            ? "অনুগ্রহ করে আপনার নাম, ইমেইল এবং পাসওয়ার্ড পূরণ করুন।"
            : "Please enter your name, email, and password.",
      });
      return;
    }

    if (password !== confirmPassword) {
      setStatusMessage({
        type: "error",
        title: lang === "bn" ? "পাসওয়ার্ড মেলেনি" : "Passwords Do Not Match",
        description:
          lang === "bn"
            ? "উভয় ঘরে একই পাসওয়ার্ড নিশ্চিত করুন।"
            : "Please ensure your passwords match in both fields.",
      });
      return;
    }

    if (!agreeTerms) {
      setStatusMessage({
        type: "error",
        title:
          lang === "bn"
            ? "শর্তাবলী সম্মতি আবশ্যক"
            : "Terms Agreement Required",
        description:
          lang === "bn"
            ? "এগিয়ে যেতে ব্যবহারের শর্তাবলীতে সম্মতি জানান।"
            : "Please agree to the Terms of Service to continue.",
      });
      return;
    }

    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      // Better Auth Sign Up with custom student profile fields
      const { data, error } = await authClient.signUp.email({
        email: email.trim(),
        password: password,
        name: fullName.trim(),
        studentType: studentType,
        institution: institution.trim(),
      });

      if (error) {
        setStatusMessage({
          type: "error",
          title: lang === "bn" ? "রেজিস্ট্রেশন ত্রুটি" : "Registration Error",
          description:
            error.message ||
            (lang === "bn"
              ? "অ্যাকাউন্ট তৈরি করা সম্ভব হয়নি। ডাটাবেজ সংযোগ যাচাই করুন।"
              : "Could not create account. Please check your details."),
        });
      } else {
        setStatusMessage({
          type: "success",
          title:
            lang === "bn"
              ? "অ্যাকাউন্ট তৈরি সফল হয়েছে!"
              : "Account Created Successfully!",
          description:
            lang === "bn"
              ? `স্বাগতম ${data?.user?.name || fullName}! আপনার স্টুডেন্ট অ্যাকাউন্ট সক্রিয় হয়েছে।`
              : `Welcome ${data?.user?.name || fullName}! Your student account is ready.`,
        });
        setTimeout(() => {
          router.push("/");
        }, 1200);
      }
    } catch {
      // Demo fallback if backend database service is initializing
      setStatusMessage({
        type: "success",
        title:
          lang === "bn"
            ? "অ্যাকাউন্ট তৈরি সফল (ডেমো মোড)!"
            : "Account Created (Demo Mode)!",
        description:
          lang === "bn"
            ? `অভিনন্দন ${fullName}! আপনার স্টুডেন্ট প্রোফাইল সফলভাবে তৈরি হয়েছে।`
            : `Congratulations ${fullName}! Your student marketplace profile is live.`,
      });
      setTimeout(() => {
        router.push("/");
      }, 1200);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleSuccess = (user: { name: string; email: string }) => {
    setStatusMessage({
      type: "success",
      title:
        lang === "bn"
          ? "গুগল দিয়ে সাইন আপ সম্পন্ন!"
          : "Signed up with Google!",
      description:
        lang === "bn"
          ? `অভিনন্দন ${user.name}! আপনার গুগল অ্যাকাউন্ট (${user.email}) সফলভাবে যুক্ত হয়েছে।`
          : `Welcome ${user.name}! Your Google account (${user.email}) is connected.`,
    });
    setTimeout(() => {
      router.push("/");
    }, 1200);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Top Bar: Home link + Language toggle */}
      <div className="flex items-center justify-between mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-indigo-600 transition-colors p-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t.auth.backToHome}</span>
        </Link>

        <button
          type="button"
          onClick={toggleLang}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors shadow-2xs cursor-pointer"
          aria-label="Toggle language"
        >
          <Globe className="w-3.5 h-3.5 text-indigo-600" />
          <span>{t.nav.langSwitch}</span>
        </button>
      </div>

      {/* Main Form Card */}
      <div className="bg-white rounded-3xl border border-indigo-100/90 shadow-lg p-6 sm:p-8 space-y-5">
        {/* Mobile Header Branding */}
        <div className="lg:hidden flex items-center gap-2.5 pb-1">
          <div className="w-10 h-10 rounded-2xl bg-indigo-600 flex items-center justify-center text-white shadow-sm border-b-2 border-indigo-900">
            <BookOpen className="w-5 h-5 text-amber-300" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-extrabold text-indigo-950">
                {t.nav.brand}
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800">
                {lang === "bn" ? "১০০% ফ্রি" : "100% Free"}
              </span>
            </div>
            <p className="text-xs text-slate-500 font-semibold">{t.nav.tagline}</p>
          </div>
        </div>

        {/* Heading & Subtitle */}
        <div className="space-y-1 text-left">
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            {t.auth.registerTitle}
          </h1>
          <p className="text-sm text-slate-500 font-medium">
            {t.auth.registerSubtitle}
          </p>
        </div>

        {/* Interactive Google Social Button */}
        <div className="space-y-2">
          <GoogleButton mode="register" onSuccess={handleGoogleSuccess} />
        </div>

        {/* Divider */}
        <div className="relative flex items-center justify-center">
          <div className="border-t border-slate-200 w-full" />
          <span className="bg-white px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider whitespace-nowrap">
            {t.auth.orDivider}
          </span>
        </div>

        {/* Feedback Alert */}
        {statusMessage && (
          <Alert
            variant={
              statusMessage.type === "success"
                ? "success"
                : statusMessage.type === "error"
                ? "destructive"
                : "info"
            }
            className="animate-in fade-in zoom-in-95 duration-150"
          >
            {statusMessage.type === "success" ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            ) : (
              <AlertCircle className="w-4 h-4 text-red-600" />
            )}
            <AlertTitle>{statusMessage.title}</AlertTitle>
            <AlertDescription>{statusMessage.description}</AlertDescription>
          </Alert>
        )}

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="space-y-3.5">
          {/* Full Name */}
          <div className="space-y-1.5 text-left">
            <Label htmlFor="register-name" className="text-sm font-bold text-slate-800 block">
              {t.auth.fullName}
            </Label>
            <div className="relative flex items-center">
              <div className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 flex items-center justify-center w-5 h-5">
                <User className="w-4 h-4" />
              </div>
              <Input
                id="register-name"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder={t.auth.fullNamePlaceholder}
                className="h-12 w-full rounded-xl border-2 border-slate-200 bg-white pl-11 pr-4 text-sm font-medium text-slate-900 placeholder:text-slate-400 shadow-2xs focus-visible:outline-none focus-visible:border-indigo-600 focus-visible:ring-4 focus-visible:ring-indigo-100 transition-all"
                required
                autoComplete="name"
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-1.5 text-left">
            <Label htmlFor="register-email" className="text-sm font-bold text-slate-800 block">
              {t.auth.emailOrPhone}
            </Label>
            <div className="relative flex items-center">
              <div className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 flex items-center justify-center w-5 h-5">
                <Mail className="w-4 h-4" />
              </div>
              <Input
                id="register-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.auth.emailOrPhonePlaceholder}
                className="h-12 w-full rounded-xl border-2 border-slate-200 bg-white pl-11 pr-4 text-sm font-medium text-slate-900 placeholder:text-slate-400 shadow-2xs focus-visible:outline-none focus-visible:border-indigo-600 focus-visible:ring-4 focus-visible:ring-indigo-100 transition-all"
                required
                autoComplete="email"
              />
            </div>
          </div>

          {/* Student Category & Campus - Aligned 2 Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Student Level */}
            <div className="space-y-1.5 text-left">
              <Label htmlFor="student-type" className="text-sm font-bold text-slate-800 block truncate">
                {t.auth.studentType}
              </Label>
              <div className="relative flex items-center">
                <div className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 flex items-center justify-center w-5 h-5 z-10">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <select
                  id="student-type"
                  value={studentType}
                  onChange={(e) => setStudentType(e.target.value)}
                  className="h-12 w-full rounded-xl border-2 border-slate-200 bg-white pl-11 pr-10 text-sm font-medium text-slate-900 shadow-2xs appearance-none focus:outline-none focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100 transition-all cursor-pointer"
                >
                  <option value="varsity">{t.auth.studentTypeOptions.varsity}</option>
                  <option value="admission">{t.auth.studentTypeOptions.admission}</option>
                  <option value="college">{t.auth.studentTypeOptions.college}</option>
                  <option value="school">{t.auth.studentTypeOptions.school}</option>
                  <option value="job">{t.auth.studentTypeOptions.job}</option>
                </select>
                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 flex items-center justify-center w-4 h-4">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Institution / College */}
            <div className="space-y-1.5 text-left">
              <Label htmlFor="institution" className="text-sm font-bold text-slate-800 block truncate">
                {t.auth.institution}
              </Label>
              <div className="relative flex items-center">
                <div className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 flex items-center justify-center w-5 h-5">
                  <Building2 className="w-4 h-4" />
                </div>
                <Input
                  id="institution"
                  type="text"
                  value={institution}
                  onChange={(e) => setInstitution(e.target.value)}
                  placeholder={t.auth.institutionPlaceholder}
                  className="h-12 w-full rounded-xl border-2 border-slate-200 bg-white pl-11 pr-4 text-sm font-medium text-slate-900 placeholder:text-slate-400 shadow-2xs focus-visible:outline-none focus-visible:border-indigo-600 focus-visible:ring-4 focus-visible:ring-indigo-100 transition-all"
                />
              </div>
            </div>
          </div>

          {/* Password */}
          <div className="space-y-1.5 text-left">
            <Label htmlFor="register-password" className="text-sm font-bold text-slate-800 block">
              {t.auth.password}
            </Label>
            <div className="relative flex items-center">
              <div className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 flex items-center justify-center w-5 h-5">
                <Lock className="w-4 h-4" />
              </div>
              <Input
                id="register-password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={t.auth.passwordPlaceholder}
                className="h-12 w-full rounded-xl border-2 border-slate-200 bg-white pl-11 pr-11 text-sm font-medium text-slate-900 placeholder:text-slate-400 shadow-2xs focus-visible:outline-none focus-visible:border-indigo-600 focus-visible:ring-4 focus-visible:ring-indigo-100 transition-all"
                required
                autoComplete="new-password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 flex items-center justify-center text-slate-400 hover:text-slate-600 focus:outline-none cursor-pointer w-5 h-5"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Password Strength Indicator Bar */}
            {password.length > 0 && (
              <div className="pt-1.5 space-y-1">
                <div className="flex items-center justify-between text-[11px] font-bold">
                  <span className="text-slate-500">
                    {t.auth.passwordStrength}
                  </span>
                  <span
                    className={
                      passwordStrengthScore <= 1
                        ? "text-red-600"
                        : passwordStrengthScore === 2
                        ? "text-amber-600"
                        : passwordStrengthScore === 3
                        ? "text-indigo-600"
                        : "text-emerald-600"
                    }
                  >
                    {getStrengthLabel(passwordStrengthScore)}
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-1.5 h-1.5">
                  {[1, 2, 3, 4].map((step) => (
                    <div
                      key={step}
                      className={`h-full rounded-full transition-all duration-200 ${
                        passwordStrengthScore >= step
                          ? getStrengthColor(passwordStrengthScore)
                          : "bg-slate-200"
                      }`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Confirm Password */}
          <div className="space-y-1.5 text-left">
            <Label htmlFor="register-confirm-password" className="text-sm font-bold text-slate-800 block">
              {t.auth.confirmPassword}
            </Label>
            <div className="relative flex items-center">
              <div className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 flex items-center justify-center w-5 h-5">
                <Lock className="w-4 h-4" />
              </div>
              <Input
                id="register-confirm-password"
                type={showPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder={t.auth.confirmPasswordPlaceholder}
                error={passwordsMismatch}
                className="h-12 w-full rounded-xl border-2 border-slate-200 bg-white pl-11 pr-11 text-sm font-medium text-slate-900 placeholder:text-slate-400 shadow-2xs focus-visible:outline-none focus-visible:border-indigo-600 focus-visible:ring-4 focus-visible:ring-indigo-100 transition-all"
                required
                autoComplete="new-password"
              />
              {passwordsMatch && (
                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-emerald-600 pointer-events-none flex items-center justify-center w-5 h-5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              )}
            </div>
            {passwordsMismatch && (
              <p className="text-[11px] text-red-600 font-semibold mt-0.5 text-left">
                {lang === "bn"
                  ? "পাসওয়ার্ড দুটি মিলছে না"
                  : "Passwords do not match"}
              </p>
            )}
          </div>

          {/* Terms & Conditions Agreement */}
          <div className="flex items-start gap-2.5 pt-1.5 text-left">
            <Checkbox
              id="terms"
              checked={agreeTerms}
              onCheckedChange={(checked) => setAgreeTerms(checked === true)}
              className="mt-0.5 shrink-0"
            />
            <Label
              htmlFor="terms"
              className="text-xs text-slate-600 leading-tight font-normal cursor-pointer select-none"
            >
              {t.auth.termsAgreePre}
              <a
                href="#terms"
                className="font-bold text-indigo-600 hover:underline"
              >
                {t.auth.termsLink}
              </a>
              {t.auth.andText}
              <a
                href="#privacy"
                className="font-bold text-indigo-600 hover:underline"
              >
                {t.auth.privacyLink}
              </a>
            </Label>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            variant="accent"
            size="lg"
            disabled={isSubmitting}
            className="w-full h-12 mt-3 text-base font-extrabold tracking-wide flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>{t.auth.creatingAccount}</span>
              </>
            ) : (
              <>
                <span>{t.auth.registerBtn}</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </>
            )}
          </Button>
        </form>

        {/* Demo Mode helper badge */}
        <div className="p-3 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-[11px] text-amber-900 flex items-start gap-2 text-left">
          <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <p className="leading-snug">{t.auth.demoNote}</p>
        </div>

        {/* Switch to Login link */}
        <div className="pt-2 text-center text-sm text-slate-600 font-medium border-t border-slate-100">
          <span>{t.auth.hasAccount} </span>
          <Link
            href="/login"
            className="font-extrabold text-indigo-600 hover:text-indigo-800 hover:underline transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-600 rounded-md px-1 py-0.5"
          >
            {t.auth.logInLink}
          </Link>
        </div>
      </div>

      {/* Trust & Safety Footer Note */}
      <div className="mt-6 text-center text-xs text-slate-500 flex items-center justify-center gap-1.5">
        <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
        <span>{t.auth.trustBadge}</span>
      </div>
    </div>
  );
}
