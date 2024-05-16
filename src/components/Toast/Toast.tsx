import React, { createContext, useState, ReactNode, useRef } from "react";
import { IoCloseSharp } from "react-icons/io5";
import "./style/toast.css";

interface ToastContextType {
  addToast: (msg: string) => void;
  removeToast: () => void;
}

export const ToastContext = createContext<ToastContextType>({
  addToast: () => {},
  removeToast: () => {},
});

interface ToastContextProviderProps {
  children: ReactNode;
}

export default function ToastContextProvider({
  children,
}: ToastContextProviderProps) {
  const [toast, setToast] = useState<string>("");
  const timeoutId = useRef<NodeJS.Timeout | null>(null);

  const addToast = (msg: string) => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
      timeoutId.current = null;
    }
    setToast(msg);
    timeoutId.current = setTimeout(() => setToast(""), 5000);
  };

  const removeToast = () => {
    setToast("");
  };

  const contextValue: ToastContextType = {
    addToast,
    removeToast,
  };

  return (
    <ToastContext.Provider value={contextValue}>
      {toast !== "" && (
        <div className="banner-container">
          <div className="banner">
            {toast}
            <button className="close-button" onClick={removeToast}>
              <IoCloseSharp />
            </button>
          </div>
        </div>
      )}
      {children}
    </ToastContext.Provider>
  );
}
