import React from 'react'
import { ImGoogle, ImFacebook, ImGithub, ImTwitter } from 'react-icons/im'

interface ButtonProps {
  primary?: boolean
  size?: 'default' | 'large'
  icon?: 'none' | 'Google' | 'Facebook' | 'GitHub' | 'Twitter'
  label: string
  onClick?: () => void
}

export const Button = ({
  primary = false,
  size = 'default',
  icon = 'none',
  label,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? 'bg-violet-100 text-slate-900'
    : 'bg-indigo-600 text-white'

  // let sizing = size === 'default' ? 'base' : 'xl'
  let sizing
  if (size === 'default') {
    sizing = 'px-4 py-2 text-base'
  } else if (size === 'large') {
    sizing = 'px-5 py-3 text-xl'
  }

  return (
    <button
      type="button"
      className={[
        'rounded font-medium shadow-lg inline-flex items-center gap-2',
        mode,
        sizing
      ].join(' ')}
      {...props}>
      {icon === 'Google' ? <ImGoogle /> : ''}
      {icon === 'Facebook' ? <ImFacebook /> : ''}
      {icon === 'GitHub' ? <ImGithub /> : ''}
      {icon === 'Twitter' ? <ImTwitter /> : ''}
      {label}
    </button>
  )
}
