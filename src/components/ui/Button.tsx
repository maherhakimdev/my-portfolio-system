import type { MouseEventHandler, ReactNode } from 'react'
import { motion } from 'framer-motion'

type ButtonVariant = 'primary' | 'outline'

interface ButtonSharedProps {
  variant?: ButtonVariant
  children: ReactNode
  className?: string
}

interface ButtonAsButtonProps extends ButtonSharedProps {
  type?: 'button' | 'submit'
  onClick?: MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
}

interface ButtonAsAnchorProps extends ButtonSharedProps {
  href: string
  target?: string
  rel?: string
  download?: boolean | string
}

type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps

const base =
  'inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium transition-all duration-200'

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-text text-bg hover:bg-accent hover:-translate-y-0.5',
  outline:
    'border border-border text-text hover:border-accent hover:bg-accent-soft hover:-translate-y-0.5',
}

export function Button(props: ButtonProps) {
  const variant = props.variant ?? 'primary'
  const classes = `${base} ${variants[variant]} ${props.className ?? ''}`

  if ('href' in props) {
    const { href, target, rel, download, children } = props
    return (
      <motion.a
        whileTap={{ scale: 0.97 }}
        href={href}
        target={target}
        rel={rel}
        download={download}
        className={classes}
      >
        {children}
      </motion.a>
    )
  }

  const { type = 'button', onClick, disabled, children } = props
  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </motion.button>
  )
}
