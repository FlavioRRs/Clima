import React, { useState} from "react";
import fetchData from "./services/api";
import Card from "./components/Card";
import Header from "./components/Header";
import initialData from "./services/initialData";

function App() {

  const [ cidade, setCidade ] = useState("");
  const [ data, setData ] = useState(initialData);

  async function handleSubmit(e) {
    e.preventDefault()
    let res = await fetchData(cidade)
    if (!res.error) {
      setData(res)
      return;
    }
    alert("Local não encontrado!")
  }

  return (
    <div className="bg-gradient-to-b from-cyan-200 to-blue-300 flex flex-col w-full h-screen items-center sm:justify-center P-4">

      <Header />

      <form onSubmit={handleSubmit} className="fixed sm:relative bottom-0 w-full flex justify-center p-4 ">
        <input type="text" placeholder="Cidade..." className="shadow-md p-3 rounded-lg outline-none w-full sm:max-w-[300px] flex-1" value={cidade} onChange={(e) => {setCidade(e.target.value)}}/>
        <button type="submit" className="shadow-md p-3 rounded-lg ml-3 text-white font-bold bg-blue-600">Pesquisar</button>
      </form>

      <Card dados={data}/>
      
    </div>
  )
}

export default App
