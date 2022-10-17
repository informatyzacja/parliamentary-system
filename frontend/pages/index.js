import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession()
  if (session) {
    return <>
      Zalogowany/a jako {session.user.email} <br />
      <button onClick={() => signOut()}>Wyloguj się</button>
    </>
  }
  return <>
    Nie jesteś zalogowany/a <br />
    <button onClick={() => signIn()}>Zaloguj się</button>
  </>
}