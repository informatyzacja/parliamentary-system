import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession()
  if (session) {
    return <>
      <div className="grid mt-5 justify-center">
        Zalogowany/a jako {session.user.email} <br />
        <button onClick={() => signOut()}>Wyloguj się</button>
      </div>
    </>
  }
  return <>
  <div className="grid mt-5 justify-center">
    Nie jesteś zalogowany/a <br />
    <button onClick={() => signIn()}>Zaloguj się</button>
  </div>
  </>
}