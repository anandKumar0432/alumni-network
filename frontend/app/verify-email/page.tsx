"use client"

import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { useState } from "react";
import axios from "axios"

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export default function VerifyEmailPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const resendVerification = async () => {
    try {
      setLoading(true);
      setMessage("");

      const res = await axios.get(`${BACKEND_URL}/auth/verify-email`);

      if(res.status !== 200){
        setMessage("please verify your email by the link we have sent")
      }
      setMessage("Verification email has been sent again.");
    } catch (error) {
      setMessage("Failed to resend verification email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-white text-black">
      <div className="w-full max-w-md border border-gray rounded-2xl p-8 text-center">
        <div className="mb-6 flex justify-center"><Mail className="h-12 w-12" /></div>

        <h1 className="text-xl font-semibold mb-4 tracking-wide">
          Verify Your Email
        </h1>

        <p className="text-md font-semibold text-gray-800 mb-6">
          We have sent you an email verification link.
          Please verify your email to continue.
        </p>

        <Button
          onClick={resendVerification}
          disabled={loading}
        >
          {loading ? "Sending..." : "Resend verification link"}
        </Button>

        {message && (
          <p className="mt-4 text-sm text-gray-800">{message}</p>
        )}
      </div>
    </main>
  );
}
