import { useSession, signIn, signOut } from "next-auth/react"
import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from '@/api/auth/[...nextauth]'

import Header from "@/components/header"

export default function Component() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        <Header />
        <hr />
        Signed in as {session.user.name} <br />
        {session.user.email} <br />
        <img src={session.user.image} /> <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      <Header />
      <hr />
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}

export async function getServerSideProps(context: any) {
  const session = await unstable_getServerSession(context.req, context.res, authOptions)

  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/signin',
        permanent: false,
      },
    }
  }
  
  return {
    props: {
      session
    }
  }
}