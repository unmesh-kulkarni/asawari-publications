"use client";
import React, { useEffect } from "react";
import { createPortal } from "react-dom";

export default function Dialog({
  open,
  onClose,
  title,
  children,
  footer,
  className = "",
  closeOnOverlay = true,
  widthClass = "max-w-md",
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    const prev = document.body.style.overflow;
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  const smWidthClass = widthClass ? `sm:${widthClass}` : "sm:max-w-md";

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-start md:items-center justify-center p-4 sm:p-6">
      <div
        className="absolute inset-0 bg-black/50"
        onClick={() => closeOnOverlay && onClose()}
        aria-hidden="true"
      />
      <div
        role="dialog"
        aria-modal="true"
        className={`relative w-full max-w-full ${smWidthClass} mx-auto bg-white rounded-lg shadow-xl ring-1 ring-slate-200 ${className}`}
      >
        {title && (
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b">
            <h3 className="text-lg font-medium">{title}</h3>
            <button
              type="button"
              aria-label="Close"
              onClick={onClose}
              className="text-slate-600 hover:text-slate-900 ml-2"
            >
              ✕
            </button>
          </div>
        )}

        {/* content area — constrained height and scrollable on small screens */}
        <div className="px-4 sm:px-6 py-4 overflow-auto max-h-[85vh] sm:max-h-[75vh]">
          {children}
        </div>

        {footer && <div className="px-4 sm:px-6 py-3 border-t">{footer}</div>}
      </div>
    </div>,
    document.body
  );
}
