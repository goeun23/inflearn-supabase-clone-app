import Sidebar from "app/Sidebar"
export default function MainLayout({ children }) {
  return (
    <main className="w-full h-screen flex items-center justify-center">
      <Sidebar />
      {children}
    </main>
  )
}
