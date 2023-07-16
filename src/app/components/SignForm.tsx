"use client";

import { useState } from "react";
import { Checkbox, Input, Typography } from "@material-tailwind/react";
import SocialLoginButton from "./SocialLoginButton";
import {
  faGoogle,
  faApple,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { handleSignUp } from "../actions/auth";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

export default function SignForm() {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");
  const [error, setError] = useState("");
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });
    fetch(`/api/auth/register`, {
      method: "POST",
      /* @ts-ignore */
      body: JSON.stringify({
        email,
        name: username,
        password,
        passwordConfirm,
      }),
    });
  };

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await supabase.auth.signInWithPassword({
      email,
      password,
    });
    router.push("/");
    router.refresh();
  };

  // const register = async () => {
  //   console.log("Register");
  //   // if (password.length < 8) {
  //   //   setError("Password must be at least 8 characters");
  //   // }
  //   // if (password !== passwordConfirm) {
  //   //   setError("The password must match");
  //   //   return;
  //   // }

  //   const aws = await fetch(`/api/auth/register`, {
  //     method: "POST",
  //     /* @ts-ignore */
  //     body: JSON.stringify({
  //       email,
  //       name: username,
  //       password,
  //       passwordConfirm,
  //     }),
  //   });

  //   const resposne = await aws.json();
  //   console.log({ resposne });
  // };
  const logInWithGoogle = () => {};

  const logInWithFacebook = () => {};

  const logInWithApple = () => {};

  return (
    <>
      <form className="mt-8 mb-2" onSubmit={handleSignIn}>
        <div className="mb-4 flex flex-col gap-4">
          <Input
            label="Username"
            name="username"
            className="bg-white w-full"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            label="Email"
            name="email"
            type="email"
            className="bg-white w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            name="password"
            label="Password"
            className="bg-white w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div>
            <Input
              type="password"
              name="confirmPassword"
              label="Confirm Password"
              className="bg-white w-full"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
            <p className="text-xs mt-2 text-gray-500">
              Must be 8 characteres at least.
            </p>
          </div>
        </div>
        <Checkbox
          label={
            <p className="font-normal text-xs">
              By creating an account means you agree to the
              <a
                href="#"
                className="font-medium transition-colors hover:text-blue-500"
              >
                &nbsp;Terms and Conditions
              </a>
              .
            </p>
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <div className="w-full relative">
          <button
            type="submit"
            className="w-full bg-[#4b70ff] hover:bg-[#4b70ff]/80 transition-all mt-2 text-white py-2.5 rounded-lg group"
          >
            Register
          </button>
          <div className="hidden group-hover:block">
            <ArrowRightIcon className="absolute !text-white right-4 top-6 text-xs " />
          </div>
        </div>
        <p className="mt-4 text-center font-normal text-sm">
          Already have an account?{" "}
          <a
            href="#"
            className="font-medium text-blue-500 transition-colors hover:text-blue-700"
          >
            Sign In
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
        <SocialLoginButton
          icon={faGoogle}
          onClick={logInWithGoogle}
          name="google"
        />
        <SocialLoginButton
          icon={faApple}
          onClick={logInWithApple}
          name="apple"
        />
        <SocialLoginButton
          icon={faFacebook}
          onClick={logInWithFacebook}
          name="facebook"
        />
      </div>
    </>
  );
}
