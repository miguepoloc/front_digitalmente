/* eslint-disable react/react-in-jsx-scope */
import Capsula1 from '../assets/img/modulo_emocional/Capsula_1.png'
import Capsula2 from '../assets/img/modulo_emocional/Capsula_2.png'
import Capsula3 from '../assets/img/modulo_emocional/Capsula_3.png'
import Part1 from '../components/Act_1.1/Part1'
import Part2 from '../components/Act_1.1/Part2'
import { Vocabulario } from '../components/Act_2.2/Vocabulario'

export const linksEstres = [
    {
        id: 1,
        nombre: 'Cápsula 1',
        link: 'emocional1',
        imagen: Capsula1,
        tipoCapsula: true
    },
    {
        id: 2,
        nombre: 'Cápsula 2',
        link: 'emocional2',
        imagen: Capsula2,
        tipoCapsula: true
    },
    {
        id: 3,
        nombre: 'Cápsula 3',
        link: 'emocional3',
        actividad: <Part1 />,
        tipoCapsula: false
    },
    {
        id: 4,
        nombre: 'Cápsula 4',
        link: 'emocional4',
        actividad: <Part2 />,
        tipoCapsula: false
    },
    {
        id: 5,
        nombre: 'Cápsula 5',
        link: 'emocional5',
        imagen: Capsula3,
        tipoCapsula: true
    },
    {
        id: 6,
        nombre: 'Cápsula 6',
        link: 'emocional6',
        actividad: <Vocabulario />,
        tipoCapsula: false
    }
]
