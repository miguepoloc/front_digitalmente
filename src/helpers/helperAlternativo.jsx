import Capsula1 from '../assets/img/modulo_piensalo/piensalo1.jpeg'
import {Actividad1Part1}  from '../components/Dashboard/mod_alternativo/Actividad1Part1'
import { AutoRegistro } from '../components/Dashboard/mod_alternativo/AutoRegistro'
import { CaminoAlExito } from '../components/Dashboard/mod_alternativo/CaminoAlExito'

export const linksAlternativo = [
    {
        id: 1,
        nombre: 'Actividad 1',
        link: 'alternativo1',
        actividad: <Actividad1Part1/>,
        tipoCapsula: false
    },
    {
        id: 4,
        nombre: 'Actividad 3',
        link: 'alternativo4',
        actividad: <CaminoAlExito/>,
        tipoCapsula: false
    },
    {
        id: 3,
        nombre: 'Actividad 2',
        link: 'alternativo3',
        actividad: <AutoRegistro/>,
        tipoCapsula: false
    },
    {
        id: 3,
        nombre: 'FIN no se muestra',
    }
]
