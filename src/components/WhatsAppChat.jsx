import profileImage from "../assets/Christian-Rey-Piape.avif";
import { useState } from "react";

const WHATSAPP_NUMBER = "639311161150";
const WHATSAPP_MESSAGE =
  "Hey Christian! I came across your portfolio and would like to discuss a project.";

function WhatsAppIcon({ size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.4-4.7A8.5 8.5 0 1 1 20.5 11.7Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M8.2 7.8c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.5l.8 1.8c.1.3.1.4-.1.7l-.6.7c-.2.2-.2.4 0 .6.5.9 1.2 1.6 2.1 2.1.2.1.4.1.6-.1l.8-.9c.2-.2.4-.3.7-.2l1.8.9c.3.1.4.3.4.5 0 .3-.2 1.2-.7 1.6-.5.5-1.2.7-2 .5-1.1-.3-2.5-.9-3.8-2.1-1.5-1.4-2.4-3-2.7-4-.3-.9 0-1.7.4-2.2.2-.2.4-.4.6-.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-[10000]">
      {/* Chat popup */}
      {isOpen && (
        <div
          id="whatsapp-chat"
          role="dialog"
          aria-label="Chat with Christian on WhatsApp"
          className="mb-4 w-[min(350px,calc(100vw-3rem))] overflow-hidden rounded-2xl border border-white/10 bg-[#101010] text-white shadow-2xl shadow-black/50"
        >
          {/* Header */}
          <div className="flex items-center gap-3 border-b border-white/10 bg-[#171717] px-5 py-4">
            <div className="h-11 w-11 shrink-0 overflow-hidden rounded-full border border-[#25D366]/40">
            <img
                src={profileImage.src}
                alt="Christian Piape"
                className="h-full w-full object-cover"
            />
            </div>


            <div className="min-w-0 flex-1">
              <p className="font-archivo text-sm font-semibold tracking-wide">
                Christian Piape
              </p>

              <p className="mt-1 flex items-center gap-1.5 text-xs text-neutral-400">
                <span className="h-1.5 w-1.5 rounded-full bg-[#25D366]" />
                Available for select projects
              </p>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat window"
              className="rounded-full p-2 text-neutral-400 transition hover:bg-white/5 hover:text-white"
            >
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="m6 6 12 12M18 6 6 18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {/* Message */}
          <div className="bg-[#0b0b0b] p-5">
            <p className="mb-4 font-archivo text-[10px] font-medium tracking-[0.18em] text-neutral-500">
              LET'S TALK
            </p>

            <div className="relative max-w-[95%] rounded-xl rounded-tl-sm border border-white/[0.06] bg-[#191919] px-4 py-4">
              <p className="text-sm leading-relaxed text-neutral-200">
                Hey there! Thanks for stopping by. Have a project in
                mind? I'd love to hear what you're working on. Let's
                talk.
              </p>

              <p className="mt-3 text-[10px] text-neutral-500">
                Typically replies as soon as possible.
              </p>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="border-t border-white/10 bg-[#101010] p-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-black transition duration-200 hover:bg-[#20bd5a]"
            >
              <WhatsAppIcon size={19} />
              Chat on WhatsApp
            </a>

            <p className="mt-3 text-center text-[10px] tracking-wide text-neutral-500">
              OPENS WHATSAPP
            </p>
          </div>
        </div>
      )}

      {/* Floating button */}
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-label={isOpen ? "Close WhatsApp chat" : "Open WhatsApp chat"}
        aria-expanded={isOpen}
        aria-controls="whatsapp-chat"
        className="cursor-pointer ml-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#25D366]/30 bg-[#101010] text-[#25D366] shadow-lg shadow-black/30 transition duration-300 hover:scale-105 hover:bg-[#191919] hover:shadow-[#25D366]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366]"
      >
        {isOpen ? (
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="m6 6 12 12M18 6 6 18"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <WhatsAppIcon size={27} />
        )}
      </button>
    </div>
  );
}
