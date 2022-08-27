import Capsula1 from '../assets/img/modulo_piensalo/piensalo1.jpg'
import Capsula2 from '../assets/img/modulo_piensalo/piensalo2.jpg'
import Capsula3 from '../assets/img/modulo_piensalo/piensalo3.jpg'
import { ActividadDeFomentoPiensalo } from '../components/Dashboard/mod_piensalo/actividadDeFomento/ActividadDeFomentoPiensalo'
import { UneLasCorrespondencias } from '../components/Dashboard/mod_piensalo/UneLasCorrespondencias'
import { YaLosIdentifico } from '../components/Dashboard/mod_piensalo/YaLosIdentifico'

export const linksPiensalo = [
    {
        id: 1,
        nombre: 'Cápsula 1',
        link: 'piensalo1',
        imagen: Capsula1,
        tipoCapsula: true
    },
    {
        id: 2,
        nombre: 'Cápsula 2',
        link: 'piensalo2',
        imagen: Capsula2,
        tipoCapsula: true
    },
    {
        id: 3,
        nombre: 'Cápsula 3',
        link: 'piensalo3',
        imagen: Capsula3,
        tipoCapsula: true
    },
    {
        id: 4,
        nombre: 'Actividad 1',
        link: 'piensalo4',
        actividad: <UneLasCorrespondencias />,
        tipoCapsula: false
    },
    {
        id: 5,
        nombre: 'Actividad 2',
        link: 'piensalo5',
        actividad: <YaLosIdentifico />,
        tipoCapsula: false
    },
    {
        id: 6,
        nombre: 'Actividad de fomento',
        link: 'piensalo6',
        actividad: <ActividadDeFomentoPiensalo />,
    },
    {
        id: 7,
        nombre: 'FIN no se muestra',
    }
]
