import Swal from 'sweetalert2'

const Alerta = (mensaje) => {
    return (
        Swal.fire({
            icon: 'error',
            title: 'Hubo un error',
            text: mensaje,
        })
    )
}

export default Alerta