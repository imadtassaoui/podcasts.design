"use client";
import { FC, useState } from "react";
import Button from "./ui/Button";
import { signIn } from "next-auth/react";

interface SignInButtonProps {}

const SignInButton: FC<SignInButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const signInWithGoogle = async () => {
    setIsLoading(true);
    try {
      await signIn("google");
    } catch (error) {
      //   toast({
      //     title: "Error Signing In",
      //     message: "Try again later",
      //     type: "error",
      //   });
    }
  };
  return (
    <Button variant="primary" onClick={signInWithGoogle} isLoading={isLoading}>
      Sign In
    </Button>
  );
};

export default SignInButton;
