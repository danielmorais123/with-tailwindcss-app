import { Poppins, Russo_One } from "next/font/google";
import {
  createServerActionClient,
  createServerComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Leftbar from "./components/Leftbar";
import RightSidebar from "./components/home/RightSidebar";

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
  return (
    <div className="bg-[#242427] flex h-screen">
      <Leftbar />
      <RightSidebar />
    </div>
  );
}
