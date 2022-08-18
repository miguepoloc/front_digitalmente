import Capsula1 from '../assets/img/modulo_piensalo/piensalo1.jpeg'
import { AutoRegistro } from '../components/Dashboard/mod_alternativo/AutoRegistro'
import { CaminoAlExito } from '../components/Dashboard/mod_alternativo/CaminoAlExito'

export const linksAlternativo = [
    {
        id: 1,
        nombre: 'Actividad 3',
        link: 'alternativo2',
        actividad: <CaminoAlExito/>,
        tipoCapsula: false
    },
    {
        id: 2,
        nombre: 'Actividad 2',
        link: 'alternativo2',
        actividad: <AutoRegistro/>,
        tipoCapsula: false
    },
    {
        id: 3,
        nombre: 'FIN no se muestra',
    }
]
