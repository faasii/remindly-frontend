'use client'

import { signIn } from 'next-auth/react'
import React from 'react'

function LoginButton() {

    const signInwithGoogle = async () => {
        await signIn("google", {
            callbackUrl: '/dashboard',
            redirect: false,
        })
    }


    return (
        <div className="mt-10">
            <button onClick={signInwithGoogle} className="px-4 w-fit py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-white dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500  dark:hover:text-slate-300 hover:shadow transition duration-150 cursor-pointer">
                <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" />
                <span>Login with Google</span>
            </button>
        </div>
    )
}

export default LoginButton