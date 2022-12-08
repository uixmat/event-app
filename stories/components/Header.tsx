import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'

interface HeaderProps {
  primary?: boolean
}

export const Header = ({ primary = true, ...props }: HeaderProps) => {
  const { data: session } = useSession()
  if (session) {
    return (
      <div
        className="flex flex-row-reverse items-center w-full px-4 py-2 font-medium"
        {...props}>
        <div className="block object-cover w-10 h-10 overflow-hidden bg-indigo-600 rounded-full">
          <img alt="Pic" src={session?.user?.image as string} />
        </div>
      </div>
    )
  }
  return <>Fuck all session</>
}
