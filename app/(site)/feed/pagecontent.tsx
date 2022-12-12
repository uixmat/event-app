'use client'

import { useSession, signIn, signOut } from 'next-auth/react'
import { Header } from 'app/stories/components/Header'
import { ImLocation, ImClock2 } from 'react-icons/im'
import styles from './Basic.module.scss'
import { redirect } from 'next/dist/server/api-utils'

export default function FeedContent() {
  const { data: session } = useSession()

  if (session) {
    return (
      <div className={styles.body}>
        <div className={styles.bgPrimary}>
          <Header />

          {/* Feed */}
          <div className="block mx-auto w-472">
            <h2 className="mb-4">Events</h2>

            {/* Event Card */}
            <div className="relative flex w-full shadow-lg aspect-square">
              <header className="absolute top-0 left-0 flex flex-row">
                <span>13/22</span>
                <span>Users</span>
              </header>
              <img
                src="/images/field.jpg"
                alt="Field"
                className="object-cover"
              />
              <footer className="absolute bottom-0 left-0 flex flex-row w-full gap-3 p-3 backdrop-blur-md bg-indigo-800/30">
                <span className="inline-flex items-center gap-2">
                  <ImClock2 />
                  Tonight
                </span>
                <span className="inline-flex items-center gap-2">
                  <ImLocation />
                  Location
                </span>
              </footer>
            </div>
          </div>
        </div>
      </div>
    )
  }
  // return redirect('/')
}
