import { getUsers } from '@/lib/prisma/users'
import Link from 'next/link'

function asyncComponent<T, R>(fn: (arg: T) => Promise<R>): (arg: T) => R {
  return fn as (arg: T) => R
}

const Users = asyncComponent(async () => {
  const { users } = await getUsers()

  return (
    <ul>
      {users?.map(user => (
        <li key={user.id}>
          <Link href={`/users/${user.id}`}>{user.name}</Link>
        </li>
      ))}
    </ul>
  )
})

export default Users
