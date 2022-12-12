import type { ReactNode } from 'react'
import './globals.css'
import styles from './auth.module.scss'

export interface AccountLayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body className={styles.body}>
        <div className={styles.bgPrimary}>{children}</div>
      </body>
    </html>
  )
}
