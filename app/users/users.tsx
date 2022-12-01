import { getUsers } from "@/lib/prisma/users"
import Link from "next/link"

const Users = async () => {
  const { users } = await getUsers()

  return (
    <ul>
      {users?.map(user => (
        <li key={user.id}>
          <Link href={`/users/${user.id}`}>
            {user.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Users