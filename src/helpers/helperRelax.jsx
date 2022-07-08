/* eslint-disable react/react-in-jsx-scope */
import { SeccionInicial } from '../components/Dashboard/mod_estres/SeccionInicial'
import { ManejoRespiracion } from '../components/Dashboard/mod_estres/ManejoRespiracion'
import { RelajacionProgresiva } from '../components/Dashboard/mod_estres/RelajacionProgresiva'
import { ManejoEstres } from '../components/Dashboard/mod_estres/ManejoEstres'

export const linksRelax = [
    {
        id: 1,
        nombre: 'Sección inicial',
        link: 'relax1',
        actividad: <SeccionInicial />,
    },
    {
        id: 2,
        nombre: 'Actividad 1',
        link: 'relax2',
        actividad: <></>,
    },
    {
        id: 3,
        nombre: 'Actividad 2',
        link: 'relax3',
        actividad: <></>,
    },
    {
        id: 4,
        nombre: 'Actividad 3',
        link: 'relax4',
        actividad: <ManejoRespiracion />,
    },
    {
        id: 5,
        nombre: 'Actividad 4',
        link: 'relax5',
        actividad: <RelajacionProgresiva />,
    },
    {
        id: 6,
        nombre: 'Actividad 5',
        link: 'relax6',
        actividad: <ManejoEstres />,
    },
    {
        id: 7,
        nombre: 'Actividad 6',
        link: 'relax7',
        actividad: <></>,
    }
]
