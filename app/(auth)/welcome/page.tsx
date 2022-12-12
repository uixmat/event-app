import { SignIn, SignOut } from '../actions'
import { unstable_getServerSession } from 'next-auth/next'

export default async function Page() {
  const session = await unstable_getServerSession()
  return (
    <>
      {session?.user ? (
        <div className="flex flex-col items-center w-full pt-20">
          <h1 className="mb-10 text-5xl font-mona">
            <b className="font-mona-bold">INTR</b>VNT
          </h1>

          <div className="flex flex-col items-center gap-4">
            Welcome
            <SignOut />
          </div>
        </div>
      ) : (
        <>
          <div className="flex flex-col items-center w-full pt-20">
            <h1 className="mb-10 text-5xl font-mona">
              <b className="font-mona-bold">INTR</b>VNT
            </h1>
            <div className="flex flex-col items-center gap-4">
              Sign in to create an account
              <SignIn />
              Welcome
              <SignOut />
            </div>
          </div>
        </>
      )}
    </>
  )
}
