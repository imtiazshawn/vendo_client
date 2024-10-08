"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaSpinner } from "react-icons/fa";

import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { login } from "@/src/actions/admin/auth";
import circle_vector from "@/public/circle_vector.png";
import logo from "@/public/logo_white.png";
import login_image from "@/public/login_image.png";

const AdminLoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await login(email, password);
      router.push("/admin/dashboard");
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
        console.error("Login Error:", error.message);
        setLoading(false);
      } else {
        setError("An unexpected error occurred.");
        console.error("Login Error:", error);
        setLoading(false);
      }
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left */}
      <div className="hidden lg:w-3/5 relative bg-gradient-to-br from-[#274132] to-[#102F1D] p-10 lg:flex items-center justify-start">
        <Image
          src={logo}
          alt="Logo"
          width={120}
          height={120}
          className="absolute top-8 left-8"
        />

        <div className="absolute top-20 right-20 animate-pulse-slow">
          <Image
            src={circle_vector}
            alt="Circle Vector"
            width={80}
            height={80}
          />
        </div>
        <div className="absolute bottom-20 right-10 animate-pulse-slow">
          <Image
            src={circle_vector}
            alt="Circle Vector"
            width={50}
            height={50}
          />
        </div>
        <div className="absolute bottom-10 left-10 animate-bounce-slow">
          <Image
            src={circle_vector}
            alt="Circle Vector"
            width={40}
            height={40}
          />
        </div>
        <div className="absolute inset-0 flex justify-center items-center">
          <Image
            src={login_image}
            alt="Login Image"
            className="max-w-full h-auto opacity-90"
          />
        </div>
      </div>

      {/* Right */}
      <div className="w-full lg:w-2/5 bg-gradient-to-br from-[#274132] to-[#297248] lg:bg-[color:var(--bg-light)] lg:bg-none px-4 lg:px-0">
        <div className="lg:hidden">
          <Image
            src={logo}
            alt="Logo"
            width={80}
            height={80}
            className="absolute top-6 left-4"
          />
        </div>
        <div className="h-full flex justify-center items-center">
          <Card className="w-full max-w-md shadow-lg">
            <CardContent className="space-y-6">
              <CardHeader>
                <h2 className="text-2xl font-semibold text-center text-[color:var(--paragraph-text)]">
                  Admin Login
                </h2>
              </CardHeader>
              <form className="space-y-6" onSubmit={handleLogin}>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 w-full"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 w-full"
                    required
                  />
                </div>
                {error && <p className="text-red-500 text-sm">{error}</p>}
              </form>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button
                onClick={handleLogin}
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-[#48BB78] to-[#34a853] text-white hover:from-[#34a853] hover:to-[#48BB78]"
              >
                {loading ? (
                  <FaSpinner className="animate-spin mx-auto" />
                ) : (
                  "Login"
                )}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;
