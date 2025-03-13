import React, { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col h-screen bg-gray-50">
          <header className="bg-white shadow-sm">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <h1 className="text-2xl font-bold text-gray-900">
                URL Shortener
              </h1>
            </div>
          </header>
          <main className="flex-grow overflow-auto">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              {children}
            </div>
          </main>
          <footer className="bg-white border-t border-gray-200">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <p className="text-center text-gray-500 text-sm">
                Built with Next.js & AWS - By Antoni Lueddeke
              </p>
            </div>
          </footer>
          <ToastContainer position="bottom-right" />
        </div>
      </body>
    </html>
  );
}
