import React from 'react'

interface HeaderProps {
  primary?: boolean
}

export const Header = ({ primary = true, ...props }: HeaderProps) => {
  return (
    <div
      className="flex flex-row-reverse items-center px-4 py-2 font-medium bg-slate-800"
      {...props}>
      <div className="block object-cover w-10 h-10 overflow-hidden bg-indigo-600 rounded-full">
        <img alt="Pic" src="/images/avatar.jpg" />
      </div>
    </div>
  )
}
