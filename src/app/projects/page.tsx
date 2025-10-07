"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Projects() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to home page since project info is on the homepage
    router.push("/");
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 bg-gradient-to-r from-accent to-accent-dark rounded-full flex items-center justify-center mx-auto animate-pulse">
          <span className="text-white text-2xl">🚀</span>
        </div>
        <p className="text-muted-foreground text-lg">Redirecting to home page...</p>
      </div>
    </div>
  );
}