const User = ({ user }: any) => {
  return (
    <>
      <h1>{user?.name}</h1>
      <p>{user?.email}</p>
    </>
  )
}

export default User
