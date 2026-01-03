import React from "react";

export default function ChatComponent() {
  return (
    <div className="relative w-full max-w-sm mx-[20%] me-50">
      {/* Background Pulsing Glow */}
      <div className="absolute inset-0 -z-10 translate-y-4 scale-95 bg-indigo-600/40 blur-2xl animate-pulse rounded-[2.5rem]"></div>

      {/* Floating Badge: Respuesta automática */}
      <div className="absolute -right-4 top-20 z-20 flex items-center gap-3 rounded-2xl bg-zinc-900/90 p-3 shadow-lg backdrop-blur-sm border border-white/5 pr-6 animate-bounce">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-white">
            Respuesta automática
          </span>
          <span className="text-xs text-zinc-400">En 0.5s</span>
        </div>
      </div>

      {/* Floating Badge: +150 ventas */}
      <div className="absolute -left-12 bottom-32 z-20 flex items-center gap-3 rounded-2xl bg-zinc-900/90 p-3 shadow-lg backdrop-blur-sm border border-white/5 pr-6 animate-bounce">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/20 text-green-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--neon)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-white">+150 ventas</span>
          <span className="text-xs text-zinc-400">Este mes</span>
        </div>
      </div>

      {/* Main Chat Card */}
      <div className="relative z-10 overflow-hidden rounded-[2.5rem] bg-zinc-950 border border-zinc-800 shadow-2xl">
        {/* Header */}
        <div className="bg-indigo-600 p-6 pb-8 rounded-t-[2.5rem]">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-white">My Vixen</span>
              <span className="text-sm text-indigo-100/80">En línea</span>
            </div>
          </div>
        </div>

        {/* Chat Body */}
        <div className="flex flex-col gap-6 p-6 pt-8 bg-zinc-950 min-h-[400px]">
          {/* Incoming Message */}
          <div className="flex flex-col items-start gap-1 max-w-[85%]">
            <div className="rounded-2xl rounded-tl-none bg-zinc-800 p-4 text-zinc-100 shadow-sm">
              <p>Hola! ¿Tienen disponibilidad del producto?</p>
            </div>
            <span className="text-xs text-zinc-500 ml-1">10:30 AM</span>
          </div>

          {/* Outgoing Message */}
          <div className="flex flex-col items-end gap-1 self-end max-w-[85%]">
            <div className="rounded-2xl rounded-tr-none bg-indigo-600 p-4 text-white shadow-md shadow-indigo-900/20">
              <p>
                ¡Hola! Sí, tenemos disponibilidad. 📦 ¿Te gustaría ver el
                catálogo?
              </p>
            </div>
            <span className="text-xs text-zinc-500 mr-1">10:30 AM</span>
          </div>

          {/* Typing Indicator */}
          <div className="flex items-center gap-1 rounded-2xl rounded-tl-none bg-zinc-800 px-4 py-3 w-fit shadow-sm mt-auto">
            <div className="h-2 w-2 animate-bounce rounded-full bg-zinc-500 [animation-delay:-0.3s]"></div>
            <div className="h-2 w-2 animate-bounce rounded-full bg-zinc-500 [animation-delay:-0.15s]"></div>
            <div className="h-2 w-2 animate-bounce rounded-full bg-zinc-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
