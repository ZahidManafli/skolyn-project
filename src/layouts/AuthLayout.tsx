import React from "react";
import { Link } from "react-router-dom";

interface AuthLayoutProps {
  title: string;
  children: React.ReactNode;
  footerText?: string;
  footerLink?: string;
  footerLinkText?: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({
  title,
  children,
  footerText,
  footerLink,
  footerLinkText,
}) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        {/* Title */}
        <h1 className="text-2xl font-bold text-center mb-6">{title}</h1>

        {/* Auth form content */}
        <div>{children}</div>

        {/* Footer (switch login/register) */}
        {footerText && footerLink && (
          <p className="text-center text-sm text-gray-500 mt-6">
            {footerText}{" "}
            <Link
              to={footerLink}
              className="text-blue-600 hover:underline font-medium"
            >
              {footerLinkText}
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthLayout;
