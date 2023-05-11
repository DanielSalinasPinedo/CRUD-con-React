import React from 'react'

const Listas = () => {
    const array=["Acción","Humor","Drama","Terror"]
    const objetos =[
        {id:1,nombre:"Juana",Apellido:"Perez"},
        {id:2,nombre:"Diana",Apellido:"Muñoz"},
        {id:3,nombre:"Luis",Apellido:"Fontalvo"},
        {id:4,nombre:"Juan",Apellido:"Perez"}
            ]
    const [lista,setLista]=React.useState(array)
    const [listaObj,setlistObj]=React.useState(objetos)

    const agregar=()=>{
        setlistObj([
            ...listaObj,
            {id:(listaObj.length+1),nombre:"Daniel",Apellido:"Salinas"}
        ])
    }

  return (
    <div>
        <h2>Listas</h2>
        <ul>
            {
            lista.map((elemento,index) => (<li key={index}>{elemento}</li>))
            }       
        </ul>
        <button onClick={agregar}>Agregar</button>
        <input></input>
        
        
        <ol>
            {
                listaObj.map((elemento) => (<li key={elemento.id}>{elemento.nombre} {elemento.Apellido}</li>))
                }
        </ol>
    </div>

  )
  }
export default Listas