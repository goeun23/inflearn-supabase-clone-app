import LoginButton from "./LoginButton"

export const metadata = {
  title: "Inflearngram",
  description: "Instagram Clone Project",
}
export default function Home() {
  return (
    <main className="w-full h-screen flex flex-col gap-2 items-center justify-center">
      <h1 className="font-bold text-xl">Welcome{"gouen Choi"}</h1>
      <LoginButton />
    </main>
  )
}
