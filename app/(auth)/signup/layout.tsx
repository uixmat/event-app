import AuthContext from './authcontext'
import '../globals.css'
import styles from './Auth.module.scss'
export interface AccountLayoutProps {
  children: React.ReactNode
}

export default function AccountLayout({ children }: AccountLayoutProps) {
  return (
    <AuthContext>
      <html>
        <body className={styles.body}>
          <div className={styles.bgPrimary}>{children}</div>
        </body>
      </html>
    </AuthContext>
  )
}
