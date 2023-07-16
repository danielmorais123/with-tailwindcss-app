import { Poppins, Russo_One } from "next/font/google";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const russo = Poppins({ subsets: ["latin"], weight: "400" });

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/auth/login");
  }
  //bg-[#4153ef]
  return <p>Home Page</p>;
}
