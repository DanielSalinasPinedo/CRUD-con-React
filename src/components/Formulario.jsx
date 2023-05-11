import React from 'react'

const Formulario = () => {
    //hooks
    const[nombre,setNombre]=React.useState("")
    const[apellido,setApellido]=React.useState("")
    const[lista,setlista]=React.useState([])

    const [editando, setEditando] = React.useState(false);
    const [indiceEditar, setIndiceEditar] = React.useState(null);

    const registrarDatos=(e)=>{
        e.preventDefault()
        if (!nombre.trim()){
            alert("Nombre no puede estar vacio")
            return
        }
        if (!apellido.trim()){
            alert("Apellido no puede estar vacio")
            return
            }
        //agregar usuario
        if (editando) {
            const nuevaLista = [...lista];
            nuevaLista[indiceEditar] = {nombre, apellido };
            setlista(nuevaLista);
            setEditando(false);
            setIndiceEditar(null);
        }
        else{
            setlista([
                ...lista,
                {nombre,apellido}
            ])
        }
        //resetar inputs
        setNombre("")
        setApellido("")
    }

    const eliminarUsuario = (indice) => {
        const nuevaLista = lista.filter((elemento, index) => index !== indice);
        setlista(nuevaLista);
    }

    const editarUsuario = (indice) => {
        // obtener el elemento correspondiente al índice
        const elemento = lista[indice];
        // establecer el nombre y el apellido en los inputs
        setNombre(elemento.nombre);
        setApellido(elemento.apellido);
        setEditando(true);
        // eliminar el elemento de la lista
        setIndiceEditar(indice);
    };

  return (
    <div className='container'>
        <h2>Formulario</h2>
        <form onSubmit={registrarDatos}>
            <input type="text"
            placeholder='Ingrese su nombre'
            className='form-control mb-3'
            onChange={(e)=>setNombre(e.target.value.trim())} 
            value={nombre}/>
              
            <input type="text"
            placeholder='Ingrese su apellido'
            className='form-control mb-3'
            onChange={(e)=>setApellido(e.target.value.trim())} 
            value={apellido}
            />    

            <button className='btn btn-outline-primary'
            type='submit'>Registrar</button>
        </form>

        <hr />
        <h2>Listado de usuarios registrados</h2>
        <ol>
                {lista.map((elemento, index) => (
                    <li key={index} className="mt-3">
                        {elemento.nombre} {elemento.apellido}
                        <button className="btn btn-outline-danger ml-3 btnAction"
                        onClick={() => eliminarUsuario(index)}>Eliminar</button>
                        <button className="btn btn-outline-info ml-3 btnAction"
                        onClick={() => editarUsuario(index)}>Editar</button>
                    </li>
                ))}
        </ol>
    </div>
  )
}

export default Formulario
