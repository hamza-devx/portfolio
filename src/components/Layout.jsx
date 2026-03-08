import Sidebar from "./Sidebar"

export default function Layout({children}) {

  return (
    <div className="flex">

      <Sidebar />

      <main className="flex-1 p-10">
        {children}
      </main>

    </div>
  )

}