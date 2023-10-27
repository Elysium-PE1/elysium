"use client"
import { useUser } from "@clerk/nextjs";
import { Navbar } from "./admin-nav";
import { setTables } from "@/lib/hooks";

export default function Page () {
    const { user } = useUser()
	const { tablesLeft, handleTablesLeft, handleTablesAll } = setTables()
	
    
    return (
        <div className="flex min-h-screen flex-col items-center justify-center p-[90px] pt-[60px] bg-[#010101] text-[#cabd89] overflow-x-hidden">
            <Navbar />
            <h3 className="text-lg w-full text-left mb-[20px]">Hey {user?.firstName} !</h3>
            <h1 className="text-4xl w-full text-left mb-[50px] pb-[10px] border-b-2 border-[#d1aa07]">Admin Page</h1>
            <div className="flex items-start justify-center w-full gap-[80px]">
				<div className="w-full flex flex-col gap-4 items-center justify-center">
                    <h2 className="text-2xl tracking-wide mb-[20px] w-full text-left flex justify-between items-center">Details: <span className="text-red-500 text-sm font-semibold tracking-wider">Updating Realtime</span></h2>
                    <p className="text-lg w-full text-left">Total no of tables: <span className="text-[#d1aa07] font-semibold">{8}</span></p>
                    <p className="text-lg w-full text-left">No of tables empty: <span className="text-green-400 font-semibold">{tablesLeft}</span></p>
                    <p className="text-lg w-full text-left">No of tables occupied: <span className="text-red-400 font-semibold">{8-tablesLeft}</span></p>
                </div>

                <div className="w-full flex flex-col gap-4 items-center justify-center">
					<h1 className="text-2xl tracking-wide mb-[20px] w-full text-left">Update Seats</h1>
					<div className="w-full flex flex-col gap-5 items-center justify-center pr-[180px]">
						<button className="w-full py-3 px-9 text-[#010101] font-[600] tracking-wide bg-[#d1aa07] outline outline-2 outline-offset-2 outline-transparent hover:outline-[#cbb144]" onClick={() => handleTablesLeft(1)}>Occupy One</button>
						<button className="w-full py-3 px-9 text-[#010101] font-[600] tracking-wide bg-[#d1aa07] outline outline-2 outline-offset-2 outline-transparent hover:outline-[#cbb144]" onClick={() => handleTablesLeft(-1)}>Empty One</button>
						<button className="w-full py-3 px-9 text-[#010101] font-[600] tracking-wide bg-[#d1aa07] outline outline-2 outline-offset-2 outline-transparent hover:outline-[#cbb144]" onClick={() => handleTablesAll(true)}>Occupy All</button>
						<button className="w-full py-3 px-9 text-[#010101] font-[600] tracking-wide bg-[#d1aa07] outline outline-2 outline-offset-2 outline-transparent hover:outline-[#cbb144]" onClick={() => handleTablesAll(false)}>Empty All</button>
					</div>
                </div>
            </div>
        </div>
    )
}