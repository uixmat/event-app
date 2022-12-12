'use client'

import React from 'react'
interface HeaderProps {
  primary?: boolean
}

export const Header = async ({ primary = true, ...props }: HeaderProps) => {
  return (
    <div
      className="flex flex-row-reverse items-center w-full px-4 py-2 font-medium"
      {...props}>
      <>
        <div className="block object-cover w-10 h-10 overflow-hidden bg-indigo-600 rounded-full">
          {/* <img alt="Pic" src={session?.user?.image as string} /> */}
          <img src="/images/avatar.jpg" alt="" />
        </div>
      </>
    </div>
  )
}
