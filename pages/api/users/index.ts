import { createUser, getUsers } from '@/lib/prisma/users'

const handler = async (req:any, res:any) => {
  if(req.method === 'GET') {
    try {
      const { users, error } = await getUsers()
      if (error) throw new Error(error as any)
      return res.status(200).json({ users })
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ error: error.message })
      }
    }
  }

  if (req.method === 'POST') {
    try {
      const data = req.body
      const { user, error } = await createUser(data)
      if (error) throw new Error(error as any)
      return res.status(200).json({ user })
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ error: error.message })
      }
    }
  }

  res.setHeader('Allow', ['GET', 'POST'])
  res.status(425).end(`Method ${req.method} is not allowed.`)
}

export default handler