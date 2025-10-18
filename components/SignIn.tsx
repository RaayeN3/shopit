"use client";
import { SignInButton } from "@clerk/nextjs";
import React from "react";
import { useEffect, useState } from "react";

const SignIn = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <SignInButton mode="modal">
      <span className="text-sm font-semibold hover:text-darkColor text-lightColor hover:cursor-pointer hoverEffect">
        Login
      </span>
    </SignInButton>
  );
};

export default SignIn;
