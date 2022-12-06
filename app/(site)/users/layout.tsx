import Users from './users'

interface Props {
  children: React.ReactNode
}

const UsersLayout: React.FunctionComponent<Props> = ({ children }: Props) => {
  return (
    <>
      <Users />
      <main>{children}</main>
    </>
  )
}

export default UsersLayout
