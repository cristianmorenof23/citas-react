import {useState, useEffect}  from'react'
import Alerta from './Alerta'


const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {

    const [nombre, setNombre] = useState('')
    const [dueño, setDueño] = useState('')
    const [email, setEmail] = useState('')
    const [fecha, setFecha] = useState('')
    const [sintomas, setSintomas] = useState('')

    useEffect( () => {
        if (Object.keys(paciente).length > 0) {
            setNombre(paciente.nombre)
            setDueño(paciente.dueño)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }
    }, [paciente])




    const generarId = () => {
        const random =  Math.random().toString(36).slice(2)
        const fecha = Date.now().toString(36)

        return random + fecha
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // Validacion del formulario
        if ([nombre, dueño, email, fecha, sintomas].includes('')) {
            Alerta('Todos los campos son obligatorios')
            return
        }

        // Objeto de paciente
        const objetoPaciente = {
            nombre, dueño, email, fecha, sintomas
        }

        if (paciente.id ) {
            // Editando el registro
            objetoPaciente.id = paciente.id

            const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)

            setPacientes(pacientesActualizados)
            setPaciente({})

        } else {
            // Nuevo registro
            objetoPaciente.id = generarId()
            setPacientes([...pacientes, objetoPaciente])
        }



        // Reiniciar el formulario
        setNombre('')
        setDueño('')
        setEmail('')
        setFecha('')
        setSintomas('')
    }

    return (
        <div className='md:w-1/2 lg:w-2/5 mx-5'>
            <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>

            <p className=' text-xl mt-5 text-center mb-10'>Añade Pacientes y {""} <span className='text-indigo-600 font-bold'>Administralos</span></p>

            <form onSubmit={handleSubmit} className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
                <div className='mb-5'>
                    <label htmlFor="mascota" className='block text-gray-700 uppercase font-bold'>Nombre Mascota</label>

                    <input id="mascota" value={nombre} onChange={ (e) => setNombre(e.target.value)} type="text" placeholder="Nombre de la Mascota" className='border-2 w-full p-2 mt-3  placeholder-gray-400 rounded-md'></input>
                </div>

                <div className='mb-5'>
                    <label htmlFor="dueño" className='block text-gray-700 uppercase font-bold'>Nombre Dueño</label>

                    <input id="dueño" value={dueño} onChange={ (e) => setDueño(e.target.value)}  type="text" placeholder="Nombre del Dueño" className='border-2 w-full p-2 mt-3  placeholder-gray-400 rounded-md'></input>
                </div>

                <div className='mb-5'>
                    <label htmlFor="email" className='block text-gray-700 uppercase font-bold'>Email</label>

                    <input id="email" value={email} onChange={ (e) => setEmail(e.target.value)}  type="email" placeholder="Email contacto dueño" className='border-2 w-full p-2 mt-3  placeholder-gray-400 rounded-md'></input>
                </div>

                <div className='mb-5'>
                    <label htmlFor="alta" className='block text-gray-700 uppercase font-bold'>Alta</label>

                    <input id="alta" value={fecha} onChange={ (e) => setFecha(e.target.value)}  type="date" className='border-2 w-full p-2 mt-3  placeholder-gray-400 rounded-md'></input>
                </div>

                <div className='mb-5'>
                    <label htmlFor="sintomas" className='block text-gray-700 uppercase font-bold'>Sintomas</label>
                    <textarea id="sintomas" value={sintomas} onChange={ (e) => setSintomas(e.target.value)}  className='border-2 w-full p-5 mt-3  placeholder-gray-400 rounded-md resize-none' placeholder="Describe los Sintomas"></textarea>
                </div>

                <input className='bg-indigo-600 w-full p-3 cursor-pointer text-white uppercase font-bold hover:bg-indigo-800 transition-all' value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'} type="submit"></input>

                
            </form>
        </div>

    )
}

export default Formulario