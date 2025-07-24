import LoginButton from "./LoginButton"
import { createServerSupabaseClient } from "utils/supabase/server"

export const metadata = {
  title: "Inflearngram",
  description: "Instagram Clone Project",
}
export default async function Home() {
  const supabase = createServerSupabaseClient()
  const {
    data: { session },
  } = await (await supabase).auth.getSession()
  return (
    <main className="w-full h-screen flex flex-col gap-2 items-center justify-center">
      <h1 className="font-bold text-xl">
        Welcome {session?.user?.email?.split("@")?.[0]}
      </h1>
      <LoginButton />
    </main>
  )
}
