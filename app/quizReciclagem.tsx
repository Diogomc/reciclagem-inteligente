"use client"
import { useState } from "react"

export const QuizReciclagem = () => {
  const [inp, setInp] = useState<string[]>([]);
  const [inputName, setInputName] = useState("")
  const [result, setResult] = useState("");

  const materials: string[] = ["Papel", "Vidro", "Madeira", "Ferro", "Plástico"];

  const handleChange = (material: string) => {
    if (inp.includes(material)) {
      setInp(inp.filter((m) => m !== material))

    } else {
      setInp([...inp, material]);
    }
  }

  const resultProduct = () => {
    setResult(inputName)
    setInputName("");
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-linear-to-b from-green-100 to-green-400">
      <h1 className="text-3xl">
        Reciclagem Inteligente ♻️
      </h1>
      <h2 className="text-xl p-2">
        Descubra se o resíduo é reciclável
      </h2>

      <div className="m-4">
        <input
          className="p-2 text-black outline-0 border-b border-b-gray-600 w-76"
          placeholder="Digite o nome do que deseja descartar"
          type="text"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}

        />
      </div>
      <p className="text-xl m-4">O produto tem algum desses materiais?</p>
      <div className="flex p-6 max-md:flex-col">
        {materials.map((m) => (
          <div key={m} className="m-2 bg-white rounded-md p-2 flex items-center max-md:p-px">
            <input
              type="checkbox"
              value={m}
              checked={inp.includes(m)}
              onChange={() => handleChange(m)}
              className="accent-green-200 w-5 h-5 cursor-pointer"
            />
            <label className="text-xl max-md:text-lg">{m}</label>
          </div>
        ))}
      </div>
      <button onClick={resultProduct} className="bg-green-600 text-white p-2 rounded-md cursor-pointer hover:bg-green-800">Verificar</button>
      {result
        ? <h1 className="text-2xl">{result} é reciclável ♻️</h1>
        : <p className="text-2xl">{result} não é reciclável ❌</p>
      }
    </div>
  )
}