import {Actividad1Part1}  from '../components/Dashboard/mod_alternativo/Actividad1Part1'
import { Actividad1Part2 } from '../components/Dashboard/mod_alternativo/Actividad1Part2'
import { Actividad1Part3 } from '../components/Dashboard/mod_alternativo/Actividad1Part3'
import { ActividadDeFomentoAlternativo } from '../components/Dashboard/mod_alternativo/actividadDeFomento/ActividadDeFomentoAlternativo'
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
        id: 2,
        nombre: 'Actividad 2',
        link: 'alternativo2',
        actividad: <Actividad1Part2/>,
        tipoCapsula: false
    },
    {
        id: 3,
        nombre: 'Actividad 3',
        link: 'alternativo3',
        actividad: <Actividad1Part3/>,
        tipoCapsula: false
    },
    {
        id: 4,
        nombre: 'Actividad 4',
        link: 'alternativo4',
        actividad: <AutoRegistro/>,
        tipoCapsula: false
    },
    {
        id: 5,
        nombre: 'Actividad 5',
        link: 'alternativo5',
        actividad: <CaminoAlExito/>,
        tipoCapsula: false
    },
    {
        id: 6,
        nombre: 'Actividad de fomento',
        link: 'alternativo6',
        actividad: <ActividadDeFomentoAlternativo/>,
        tipoCapsula: false
    },

    {
        id: 7,
        nombre: 'FIN no se muestra',
    }
]
