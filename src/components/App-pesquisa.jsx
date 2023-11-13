import { useEffect, useState } from "react"
// import MyList from "./components/listas"



const minhaLista = [
  {id: '1', value: 'Frutas'},
  {id: '2', value: 'Legumes'},
  {id: '3', value: 'Carnes'},
  {id: '4', value: 'Morango'},
  {id: '5', value: 'Chocolate'},
  {id: '6', value: 'Arroz'},
  {id: '7', value: 'Cenoura'},

]



function App() {
  
  const [produtos, setProdutos] = useState(minhaLista)
  const [pesquisa, setPesquisa] = useState('')
  
  useEffect(
    () => {
      if(pesquisa){
        
        const newList = minhaLista.filter((item) => {
          return item.value.toLowerCase().includes(pesquisa.toLowerCase())
        })
        setProdutos(newList)
      } else{
        setProdutos(minhaLista)
      }
    }
  ,[pesquisa])

  return (
    <div>
      <h1>Efeitos Colaterais</h1>
      <input value={pesquisa} 
      onChange={(e) => setPesquisa(e.target.value)} 
      type="text" placeholder="Pesquise o item aqui"></input> 
      {produtos.map((item) => {
        return (
          <div key={item.id}>
            <h4>{item.value}</h4>
          </div>
        )
      })}
    </div>
  )
  
 
}

export default App


