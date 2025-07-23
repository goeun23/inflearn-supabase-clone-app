"use client"

import SignUp from "./SignUp"
import SignIn from "./SignIn"
import { useState } from "react"
export default function Auth() {
  const [view, setView] = useState("SIGNUP")
  return (
    <main className="h-screen w-screen flex justify-center items-center bg-gradient-to-br from-purple-50 to-light-blue-50">
      {view === "SIGNUP" ? (
        <SignUp setView={setView} />
      ) : (
        <SignIn setView={setView} />
      )}
    </main>
  )
}
