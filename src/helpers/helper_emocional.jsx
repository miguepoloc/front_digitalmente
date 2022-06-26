/* eslint-disable react/react-in-jsx-scope */
import Capsula1 from '../assets/img/modulo_emocional/Capsula_1.png'
import Capsula2 from '../assets/img/modulo_emocional/Capsula_2.png'
import Capsula3 from '../assets/img/modulo_emocional/Capsula_3.png'
import Capsula4 from '../assets/img/modulo_emocional/Capsula_4.png'
import Capsula5 from '../assets/img/modulo_emocional/Capsula_5.png'
import Capsula6 from '../assets/img/modulo_emocional/Capsula_6.png'
import Capsula7 from '../assets/img/modulo_emocional/Capsula_7.png'
import Capsula8 from '../assets/img/modulo_emocional/Capsula_8.png'
import Part1 from '../components/Act_1.1/Part1'
import Part2 from '../components/Act_1.1/Part2'
import RuletaEmociones from '../components/Act_2.2/RuletaEmociones'
import { Vocabulario } from '../components/Act_2.2/Vocabulario'
import { Quimica } from '../components/Act_3.1/Quimica'
import ManejoSemaforo from '../components/Act_4.1/ManejoSemaforo'
import MisEstrategias from '../components/Act_4.1/MisEstrategias'

export const linksEmocional = [
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
    nombre: 'Actividad 1.1',
    link: 'emocional3',
    actividad: <Part1 />,
    tipoCapsula: false
  },
  {
    id: 4,
    nombre: 'Actividad 1.2',
    link: 'emocional4',
    actividad: <Part2 />,
    tipoCapsula: false
  },
  {
    id: 5,
    nombre: 'Cápsula 3',
    link: 'emocional5',
    imagen: Capsula3,
    tipoCapsula: true
  },
  {
    id: 6,
    nombre: 'Actividad 2.1',
    link: 'emocional6',
    actividad: <Vocabulario />,
    tipoCapsula: false
  },
  {
    id: 7,
    nombre: 'Actividad 2.2',
    link: 'emocional7',
    actividad: <RuletaEmociones />,
    tipoCapsula: false
  },
  {
    id: 8,
    nombre: 'Cápsula 4',
    link: 'emocional8',
    imagen: Capsula4,
    tipoCapsula: true
  },
  {
    id: 9,
    nombre: 'Actividad 3',
    link: 'emocional9',
    actividad: <Quimica />,
    tipoCapsula: false
  },
  {
    id: 10,
    nombre: 'Cápsula 5',
    link: 'emocional10',
    imagen: Capsula5,
    tipoCapsula: true
  },
  {
    id: 11,
    nombre: 'Cápsula 6',
    link: 'emocional11',
    imagen: Capsula6,
    tipoCapsula: true
  },
  {
    id: 12,
    nombre: 'Actividad 4.1',
    link: 'emocional12',
    actividad: <MisEstrategias />,
    tipoCapsula: false
  },
  {
    id: 13,
    nombre: 'Actividad 4.2',
    link: 'emocional13',
    actividad: <ManejoSemaforo />,
    tipoCapsula: false
  },
  {
    id: 14,
    nombre: 'Cápsula 7',
    link: 'emocional14',
    imagen: Capsula7,
    tipoCapsula: true
  },
  {
    id: 15,
    nombre: 'Cápsula 8',
    link: 'emocional15',
    imagen: Capsula8,
    tipoCapsula: true
  }
]
