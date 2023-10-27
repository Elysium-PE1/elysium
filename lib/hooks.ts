import { useState } from "react"; 

export const setTables = () => {
    const [tablesLeft, setTablesLeft] = useState(3)

	const handleTablesLeft = (noOfSeat: number) => {
		setTablesLeft(tablesLeft - noOfSeat)
	}

	const handleTablesAll = (occupy: boolean) => {
		if(occupy) setTablesLeft(0)
		else setTablesLeft(8)
	}

    return { tablesLeft, handleTablesLeft, handleTablesAll }
}