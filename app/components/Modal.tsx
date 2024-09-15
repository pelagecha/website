// app/components/Modal.tsx
"use client";

import React, { useEffect } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    useEffect(() => {
        // Disable background scrolling when modal is open
        if (isOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }

        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [isOpen]);

    // Check if running in browser (to prevent issues with SSR)
    if (typeof window === "undefined") return null;

    return isOpen
        ? ReactDOM.createPortal(
              <div
                  className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300"
                  onClick={onClose}
              >
                  <div
                      className="bg-white rounded-lg overflow-auto max-w-3xl w-full max-h-full m-4 transform transition-transform duration-300"
                      onClick={(e) => e.stopPropagation()}
                  >
                      {children}
                  </div>
              </div>,
              document.body
          )
        : null;
};

export default Modal;
