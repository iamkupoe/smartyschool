import { Outlet, } from "react-router-dom"


const Reports = () => {
  return (
    <main>
      <section className="border-b border-b-[#c8c8c8] h-[12vh] py-[0.5rem] px-[0.5rem] flex flex-row gap-[0.25rem] justify-start items-center">
      </section>
      <section>
        <Outlet />
      </section>
    </main>
  )
}

export default Reports