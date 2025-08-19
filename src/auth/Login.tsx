import React from "react";
import AuthLayout from "../layouts/AuthLayout";

const Login: React.FC = () => {
  return (
    <AuthLayout
      title="Login"
      footerText="Don't have an account?"
      footerLink="/register"
      footerLinkText="Register"
    >
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            className="mt-1 w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            className="mt-1 w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </AuthLayout>
  );
};

export default Login;
