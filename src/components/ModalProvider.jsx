"use client";
import React, { createContext, useContext, useState } from "react";
import RequestDialog from "@/components/request-dialog";

const ModalContext = createContext(null);

export function ModalProvider({ children }) {
  const [isRequestOpen, setIsRequestOpen] = useState(false);

  const openRequest = () => setIsRequestOpen(true);
  const closeRequest = () => setIsRequestOpen(false);

  return (
    <ModalContext.Provider value={{ openRequest, closeRequest, isRequestOpen }}>
      {children}
      <RequestDialog open={isRequestOpen} onClose={closeRequest} />
    </ModalContext.Provider>
  );
}

export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModal must be used within ModalProvider");
  return ctx;
}
