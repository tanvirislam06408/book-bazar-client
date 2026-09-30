import React from "react";
import { BookOpen, GraduationCap, Award, Sparkles } from "lucide-react";

interface BookCoverPlaceholderProps {
  title: string;
  author: string;
  category: string;
  subjectCode?: string;
  gradientClass?: string;
}

export function BookCoverPlaceholder({
  title,
  author,
  category,
  subjectCode = "TEXTBOOK",
  gradientClass = "from-blue-600 to-indigo-800",
}: BookCoverPlaceholderProps) {
  const getCategoryIcon = () => {
    switch (category) {
      case "admission":
        return <GraduationCap className="w-5 h-5 text-amber-200" aria-hidden="true" />;
      case "bcs-job":
        return <Award className="w-5 h-5 text-emerald-200" aria-hidden="true" />;
      case "islamic":
        return <Sparkles className="w-5 h-5 text-teal-200" aria-hidden="true" />;
      default:
        return <BookOpen className="w-5 h-5 text-blue-200" aria-hidden="true" />;
    }
  };

  return (
    <div
      className={`relative w-full aspect-[3/4] rounded-lg bg-gradient-to-br ${gradientClass} p-3.5 flex flex-col justify-between overflow-hidden shadow-sm select-none`}
      role="img"
      aria-label={`Book cover for ${title}`}
    >
      {/* Spine 3D simulation strip on the left */}
      <div
        className="absolute left-0 top-0 bottom-0 w-3 bg-black/25 backdrop-blur-xs border-r border-white/20"
        aria-hidden="true"
      />

      {/* Top Bar with Subject & Category Icon */}
      <div className="relative pl-3 flex items-center justify-between text-white/90">
        <span className="text-[10px] font-bold tracking-widest uppercase bg-white/20 px-1.5 py-0.5 rounded backdrop-blur-xs">
          {subjectCode}
        </span>
        {getCategoryIcon()}
      </div>

      {/* Middle: Title & Subtle Pattern */}
      <div className="relative pl-3 my-auto">
        <div className="w-6 h-0.5 bg-amber-400 mb-2 rounded-full" aria-hidden="true" />
        <h4 className="text-white font-bold text-sm sm:text-base leading-snug line-clamp-3 drop-shadow-xs">
          {title}
        </h4>
      </div>

      {/* Bottom: Author & Stamp */}
      <div className="relative pl-3 pt-2 border-t border-white/20 flex items-center justify-between text-white/80">
        <p className="text-xs truncate max-w-[120px] font-medium text-white/90">
          {author}
        </p>
        <span className="text-[9px] uppercase tracking-wider text-white/70 font-mono">
          BD ED.
        </span>
      </div>

      {/* Subtle corner sheen */}
      <div
        className="absolute -right-8 -top-8 w-20 h-20 bg-white/10 rounded-full blur-sm pointer-events-none"
        aria-hidden="true"
      />
    </div>
  );
}
