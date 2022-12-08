'use client'

import Image from 'next/image'
import { useSession, signIn, signOut } from 'next-auth/react'

import { Button } from '@/ui/components/Button'

export default function UserData() {
  const { data: session } = useSession()

  if (session) {
    return (
      <div>
        <br className="mb-10" />
        <p>Component level</p>
        <p>{session?.user?.name}</p>
        <p>{session?.user?.email}</p>
        <Image
          src={session?.user?.image as string}
          alt={session?.user?.name as string}
          width={200}
          height={200}
        />
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    )
  }
  return (
    <div className="flex flex-col items-center w-full pt-20">
      <h1 className="mb-10 text-5xl font-mona">
        <b className="font-mona-bold">INTR</b>VNT
      </h1>

      <div className="flex flex-col items-center gap-4">
        Sign in to create an account
        <Button
          label="Sign in with GitHub"
          size="default"
          primary
          onClick={() => signIn()}
        />
      </div>
    </div>
  )
}
