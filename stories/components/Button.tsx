import React from 'react'

interface ButtonProps {
  primary?: boolean
  size?: 'default' | 'large'
  label: string
  onClick?: () => void
}

export const Button = ({
  primary = false,
  size = 'default',
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
      className={['rounded font-medium shadow-lg', mode, sizing].join(' ')}
      {...props}>
      {label}
    </button>
  )
}
