"use client";
import { ClerkLoaded, SignedIn, UserButton } from "@clerk/nextjs";
import { useEffect, useState } from "react";

export default function UserMenu() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <ClerkLoaded>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </ClerkLoaded>
  );
}
