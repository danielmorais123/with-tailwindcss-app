"use client";

import { useEffect, useState } from "react";
import { Checkbox, Input, Typography } from "@material-tailwind/react";
import SocialLoginButton from "../SocialLoginButton";
import {
  faGoogle,
  faApple,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { handleSignUp } from "../../actions/auth";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useSession } from "@supabase/auth-helpers-react";

export default function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState("");
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await supabase.auth.signInWithPassword({
      email,
      password,
    });
    router.push("/");
    router.refresh();
  };

  const logInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };

  const logInWithFacebook = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "facebook",
    });
  };

  const logInWithApple = () => {};

  return (
    <>
      <form className="mt-8 mb-2" onSubmit={handleSignIn}>
        <div className="mb-4 flex flex-col gap-4">
          <Input
            label="Email"
            name="email"
            type="email"
            autoComplete="off"
            className="bg-white w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            type="password"
            name="password"
            label="Password"
            autoComplete="off"
            className="bg-white w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Checkbox
          label={
            <p className="font-bold text-xs tracking-wide">Remember me </p>
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <div className="w-full relative">
          <button
            type="submit"
            className="w-full bg-[#4b70ff] hover:bg-[#4b70ff]/80 transition-all mt-2 text-white py-2.5 rounded-lg group"
          >
            Log In
          </button>
          <div className="hidden group-hover:block">
            <ArrowRightIcon className="absolute !text-white right-4 top-6 text-xs " />
          </div>
        </div>
        <p className="mt-4 text-center font-normal text-sm">
          Don't have an account yet?{" "}
          <a
            href="/auth/register"
            className="font-medium text-blue-500 transition-colors hover:text-blue-700"
          >
            Sign Up
          </a>
        </p>
      </form>
      <div className="w-full flex items-center my-3">
        <hr className="w-1/2" />
        <p className="text-xs mx-2 text-gray-500 w-full text-center">
          Or Sign In with a provider
        </p>
        <hr className="w-1/2" />
      </div>
      <div className="flex justify-center space-x-2">
        <SocialLoginButton icon={faGoogle} onClick={() => {}} name="google" />
        <SocialLoginButton icon={faApple} onClick={() => {}} name="apple" />
        <SocialLoginButton
          icon={faFacebook}
          onClick={() => {}}
          name="facebook"
        />
      </div>
    </>
  );
}
