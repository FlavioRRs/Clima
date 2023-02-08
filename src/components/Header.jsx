import React, { useEffect, useState } from "react";
import fetchData from "../services/api";

export default function Header() {

    const [ rj,setRj ] = useState()

    useEffect(() => {
        async function getRio() {
        let res = await fetchData("rio de janeiro")
        setRj(res)}
        getRio()
    }, [])

    if(rj) {
        return(
            <div className="sm:fixed sm:top-0 p-4 w-full bg-blue-600">
                <p className="text-white font-bold animate-pulse text-center">{`${rj.location.name} | ${rj.current.temp_c}°C | ${rj.current.condition.text}`}</p>
            </div>
        );  
    }
    
}