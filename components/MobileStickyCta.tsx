"use client";

import { company, telHref, whatsappHref } from "@/lib/content";

export default function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex border-t border-line bg-paper/95 backdrop-blur md:hidden">
      <a
        href={telHref(company.phonePrimary)}
        className="flex flex-1 items-center justify-center gap-2 py-3.5 text-sm font-semibold tracking-tight text-ink transition-transform active:scale-[0.98]"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"
            fill="currentColor"
          />
        </svg>
        Bellen
      </a>
      <div className="w-px bg-line-strong" />
      <a
        href={whatsappHref("Hallo Corstiaan, ik zou graag een offerte aanvragen voor mijn tuin.")}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 bg-brand py-3.5 text-sm font-semibold tracking-tight text-paper transition-transform active:scale-[0.98]"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm0 18.2a8.1 8.1 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.7-.3-1.4-.7-2-1.3-.5-.5-1-1.1-1.4-1.7-.1-.2 0-.4.1-.5l.4-.5c.1-.2.1-.3.2-.5s0-.4 0-.5c-.1-.1-.6-1.5-.9-2-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.3s1 2.7 1.2 2.9c.1.2 2 3.1 4.8 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1-.1-.1-.2-.2-.4-.3Z"
            fill="currentColor"
          />
        </svg>
        WhatsApp
      </a>
    </div>
  );
}
