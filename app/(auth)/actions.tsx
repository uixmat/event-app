'use client'
import { signIn, signOut } from 'next-auth/react'
import { Button } from 'app/stories/components/Button'

export function SignOut() {
  return (
    <Button label="Sign Out" size="default" primary onClick={() => signOut()} />
  )
}

export function SignIn() {
  return (
    <Button
      label="Sign in with GitHub"
      size="default"
      icon="GitHub"
      primary
      onClick={() => signIn()}
    />
  )
}
