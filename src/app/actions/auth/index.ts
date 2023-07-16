'use server'
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

import prisma from "../../../../prisma/client";

export async function register(formData: FormData) {
    formData.get("username");
    formData.get("email");
    formData.get("password");
    formData.get("confirmPassword");
    await prisma.user.create({
        data: {
            /* @ts-ignore */
            email: formData.get("email"),
            /* @ts-ignore */
            name: formData.get("username"),

        }


    })
}



export const handleSignUp = async (formData: FormData) => {
    const email = String(formData.get("email"));
    const password = String(formData.get("password"));
    const confirmPassword = String(formData.get("confirmPassword"));

    if (password !== confirmPassword) {

    }
    const supabase = createServerActionClient({ cookies });
    await supabase.auth.signUp({
        email,
        password,
        options: {
            emailRedirectTo: "http://localhost:3000/auth/callback",
        },
    });

    revalidatePath("/");
};