"use client";

import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { toast } from "sonner";
import { signIn } from "next-auth/react";
import ROUTES from "@/constants/routes";
// import { toast } from "@/hooks/use-toast";

const SocialAuthForm = () => {
  const buttonClass =
    "background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 rounded-2 px-4 py-3.5 ";
  const handleSignIn = async (provider: "github" | "google") => {
    try {
      await signIn(provider, {
        redirectTo: ROUTES.HOME,
        redirect: true,
      });
    } catch (error) {
      console.error("Error signing in:", error);
      toast.error("Error signing in", {
        description:
          error instanceof Error
            ? error.message
            : "An error occurred while signing in. Please try again.",
      });
    }
  };
  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button className={buttonClass} onClick={() => handleSignIn("github")}>
        <Image
          src="/icons/github.svg"
          alt="github"
          width={20}
          height={20}
          className="invert-colors mr-2.5 object-contain    "
        />
        <span>Login with GitHub</span>
      </Button>

      <Button className={buttonClass} onClick={() => handleSignIn("google")}>
        <Image
          src="/icons/google.svg"
          alt="google"
          width={20}
          height={20}
          className="invert-colors mr-2.5 object-contain    "
        />
        <span>Login with Google</span>
      </Button>
    </div>
  );
};

export default SocialAuthForm;
