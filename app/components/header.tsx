"use client";

import { useSession, signIn, signOut } from "next-auth/react"

const Header = () => {

  const { data: session } = useSession()

  if (session) {
    return (
      <div className="flex w-full font-mono p-7 bg-slate-800 text-slate-500">
        Welcome back {session?.user?.name}
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    )
  }
  return (
    <div className="flex w-full font-mono p-7 bg-slate-800 text-slate-500">
      <button onClick={() => signIn()}>Sign in</button>
    </div>
  )
}

export default Header