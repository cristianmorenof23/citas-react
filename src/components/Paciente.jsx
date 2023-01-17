import Swal from 'sweetalert2'


const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {

    const { nombre, dueño, email, fecha, sintomas, id } = paciente
    
    const handleEliminar = () => {
        
        Swal.fire({
            title: 'Estas Seguro?',
            text: "No se va a poder revertir",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Si, borrar'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success',
                    eliminarPaciente(id)
                )
            }
        })
    }

    return (

        <div className='mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl '>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: {""}
                <span className='font-normal normal-case'>{nombre}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Dueño: {""}
                <span className='font-normal normal-case'>{dueño}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Email: {""}
                <span className='font-normal normal-case'>{email}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha Alta: {""}
                <span className='font-normal normal-case'>{fecha}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Sintomas: {""}
                <span className='font-normal normal-case'>{sintomas}</span>
            </p>

            <div className='flex gap-10 mt-5'>
                <button onClick={() => setPaciente(paciente)} type="button" className='py-2 px-10 bg-indigo-600 hover:bg-indigo-900 font-bold uppercase text-white rounded-md'>Editar</button>

                <button type="button" className='py-2 px-10 bg-red-600 hover:bg-red-900 font-bold uppercase text-white rounded-md' onClick={handleEliminar}

                >Eliminar</button>
            </div>
        </div>
    )
}

export default Paciente