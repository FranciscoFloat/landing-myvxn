import React from "react";
import Image from "next/image";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  imageSrc?: string;
}

export const TestimonialCard = ({
  quote,
  author,
  role,
  imageSrc,
}: TestimonialCardProps) => {
  return (
    <div className="bg-[#141417] p-8 rounded-3xl border border-white/5 flex flex-col gap-6 h-full hover:border-button-primary/30 transition-all duration-300">
      {/* Quote Icon & Stars */}
      <div className="flex flex-col gap-4">
        <div className="w-12 h-12 rounded-2xl bg-button-primary/20 flex items-center justify-center text-button-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 7.55228 14.017 7V3H19.017C20.6739 3 22.017 4.34315 22.017 6V15C22.017 16.6569 20.6739 18 19.017 18H16.017V21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 7.55228 5.0166 7V3H10.0166C11.6735 3 13.0166 4.34315 13.0166 6V15C13.0166 16.6569 11.6735 18 10.0166 18H7.0166V21H5.0166Z" />
          </svg>
        </div>
        <div className="flex gap-1 text-[var(--neon)]">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="none"
              className="w-4 h-4"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          ))}
        </div>
      </div>

      <p className="text-gray-300 leading-relaxed font-medium">&quot;{quote}&quot;</p>

      <div className="mt-auto flex items-center gap-4 pt-4 border-t border-white/5">
        <div className="w-12 h-12 rounded-full bg-zinc-800 overflow-hidden relative shrink-0">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={author}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full bg-zinc-700 flex items-center justify-center text-xs text-zinc-500">
              Img
            </div>
          )}
        </div>
        <div>
          <h4 className="font-bold text-white text-sm">{author}</h4>
          <p className="text-xs text-zinc-500">{role}</p>
        </div>
      </div>
    </div>
  );
};
