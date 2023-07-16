import { NextResponse } from 'next/server'
import prisma from '../../../../../prisma/client'
import { createServerActionClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from "next/headers"
import { revalidatePath } from 'next/cache';

export async function POST(request: Request) {
    let payload = await request.json()
    const { email, name, password, passwordConfirm } = payload


    const user = await prisma.user.findFirst({
        where: {
            email: email,
        }
    })
    if (!user) {
        await prisma.user.create({
            data: {
                /* @ts-ignore */
                email: payload.email,
                /* @ts-ignore */
                name: payload.name,

            }
        })
    }

    revalidatePath("/");





    return NextResponse.json({ message: "User added sucessfully!", error: null })
}