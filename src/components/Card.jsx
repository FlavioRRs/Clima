import React from "react";

export default function Card({dados}) {
    return (

        <div className="bg-white p-6 mt-10 rounded-lg shadow-md min-w-[220px]">
            <div className="text-center">
                <span className="block text-lg font-bold text-slate-700">{dados.location.name}</span>
                <span className="text-slate-400 text-sm font-medium">{dados.location.region}, {dados.location.country}</span>
            </div>

            <div className="font-bold text-slate-700 flex justify-center mt-4 mb-2">
                <span className="text-8xl">{dados.current.temp_c}</span>
                <span className="text-2xl mt-4">°C</span>
            </div>
            
            <div className="flex flex-col items-center">
                <img src={dados.current.condition.icon} alt="ícone da condição" className=""/>
                <span className="text-slate-700 font-medium">{dados.current.condition.text}</span>
            </div>
        </div>
    );
};
