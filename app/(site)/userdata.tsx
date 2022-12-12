'use client'

import { redirect } from 'next/navigation'
import { useSession } from 'next-auth/react'

export default function UserData() {
  const { data: session } = useSession()
  if (session) {
    redirect('/feed')
  }
  return [redirect('/signup')]
}
