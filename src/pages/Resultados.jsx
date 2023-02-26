/* eslint-disable no-loop-func */
import Axios from 'axios'
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import NavBarDashboard from '../components/Dashboard/NavBarDashboard';
import { Loading } from '../components/Loading';
import FooterDashboard from '../components/Dashboard/FooterDashboard'
import { linksEmocional } from '../helpers/helper_emocional';
import { linksRelax } from '../helpers/helperRelax';
import { linksPiensalo } from '../helpers/helperPiensalo';
import { linksAlternativo } from '../helpers/helperAlternativo';
import { CartaGrafica } from '../components/Dashboard/CartaGrafica';

const paginationComponentOptions = {
    rowsPerPageText: 'Filas por página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos',
};

const customStyles = {
    rows: {
        style: {
            minWidth: '72px', // override the row height
        },
    },
    headCells: {
        style: {
            paddingLeft: '8px', // override the cell padding for head cells
            paddingRight: '8px',
        },
    },
    cells: {
        style: {
            paddingLeft: '8px', // override the cell padding for data cells
            paddingRight: '8px',
        },
    },
};

const Resultados = () => {
    const [loading, setLoading] = useState(true);

    const [Resultados, setResultados] = useState("")

    useEffect(() => {
        const url = `${process.env.REACT_APP_API_URL}/api/encuesta_detalle`
        const fetchData = async () => {
            const response = await Axios({
                method: 'get',
                url: url
                // headers: {
                //     'authorization': 'Bearer YOUR_JWT_TOKEN_HERE'
                // }
            })
            if (response) {
                // Coloca el avance en la variable de estado
                setResultados(response.data)
            } else {
                console.log('No se pudieron traer los datos...')
            }
        };
        // Se llama a la función
        fetchData();
        setLoading(false);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    console.log(Resultados.data2.length)

    for (let index = 0; index < Resultados.data2.length; index++) {
        console.log(Resultados.data2[index])

    }

    // const columnas = [
    //     {
    //         name: 'id',
    //         selector: row => row.id,
    //         sortable: true,
    //     },
    //     {
    //         name: 'Usuario',
    //         selector: row => row.usuario,
    //         sortable: true,
    //     },
    //     {
    //         name: 'Autoevaluativo',
    //         selector: row =>
    //             row.autoevaluativo === 1
    //                 ? '0'
    //                 : parseInt(row.autoevaluativo / 3 * 100),
    //         sortable: true,
    //         conditionalCellStyles: [
    //             {
    //                 when: row => row.autoevaluativo > 2,
    //                 style: {
    //                     backgroundColor: 'rgba(63, 195, 128, 0.9)',
    //                     color: 'white',
    //                     '&:hover': {
    //                         cursor: 'pointer',
    //                     },
    //                 },
    //             },
    //             {
    //                 when: row => row.autoevaluativo > 1 && row.autoevaluativo < 3,
    //                 style: {
    //                     backgroundColor: 'rgba(248, 148, 6, 0.9)',
    //                     color: 'white',
    //                     '&:hover': {
    //                         cursor: 'pointer',
    //                     },
    //                 },
    //             },
    //             {
    //                 when: row => row.autoevaluativo < 2,
    //                 style: {
    //                     backgroundColor: 'rgba(242, 38, 19, 0.9)',
    //                     color: 'white',
    //                     '&:hover': {
    //                         cursor: 'not-allowed',
    //                     },
    //                 },
    //             },
    //         ],
    //     },
    //     {
    //         name: 'Emocional',
    //         selector: row =>
    //             row.emocional === 1
    //                 ? '0'
    //                 : parseInt(row.emocional / linksEmocional.length * 100),
    //         sortable: true,
    //         conditionalCellStyles: [
    //             {
    //                 when: row => row.emocional > 16,
    //                 style: {
    //                     backgroundColor: 'rgba(63, 195, 128, 0.9)',
    //                     color: 'white',
    //                     '&:hover': {
    //                         cursor: 'pointer',
    //                     },
    //                 },
    //             },
    //             {
    //                 when: row => row.emocional > 1 && row.emocional < 17,
    //                 style: {
    //                     backgroundColor: 'rgba(248, 148, 6, 0.9)',
    //                     color: 'white',
    //                     '&:hover': {
    //                         cursor: 'pointer',
    //                     },
    //                 },
    //             },
    //             {
    //                 when: row => row.emocional < 2,
    //                 style: {
    //                     backgroundColor: 'rgba(242, 38, 19, 0.9)',
    //                     color: 'white',
    //                     '&:hover': {
    //                         cursor: 'not-allowed',
    //                     },
    //                 },
    //             },
    //         ],
    //     },
    //     {
    //         name: 'Relax',
    //         selector: row =>
    //             row.estres === 1
    //                 ? '0'
    //                 : parseInt(row.estres / linksRelax.length * 100),
    //         sortable: true,
    //         conditionalCellStyles: [
    //             {
    //                 when: row => row.estres > 8,
    //                 style: {
    //                     backgroundColor: 'rgba(63, 195, 128, 0.9)',
    //                     color: 'white',
    //                     '&:hover': {
    //                         cursor: 'pointer',
    //                     },
    //                 },
    //             },
    //             {
    //                 when: row => row.estres > 1 && row.estres < 9,
    //                 style: {
    //                     backgroundColor: 'rgba(248, 148, 6, 0.9)',
    //                     color: 'white',
    //                     '&:hover': {
    //                         cursor: 'pointer',
    //                     },
    //                 },
    //             },
    //             {
    //                 when: row => row.estres < 2,
    //                 style: {
    //                     backgroundColor: 'rgba(242, 38, 19, 0.9)',
    //                     color: 'white',
    //                     '&:hover': {
    //                         cursor: 'not-allowed',
    //                     },
    //                 },
    //             },
    //         ],
    //     },
    //     {
    //         name: 'Piensalo',
    //         selector: row =>
    //             row.piensalo === 1
    //                 ? '0'
    //                 : parseInt(row.piensalo / linksPiensalo.length * 100),
    //         sortable: true,
    //         conditionalCellStyles: [
    //             {
    //                 when: row => row.piensalo > 6,
    //                 style: {
    //                     backgroundColor: 'rgba(63, 195, 128, 0.9)',
    //                     color: 'white',
    //                     '&:hover': {
    //                         cursor: 'pointer',
    //                     },
    //                 },
    //             },
    //             {
    //                 when: row => row.piensalo > 1 && row.piensalo < 7,
    //                 style: {
    //                     backgroundColor: 'rgba(248, 148, 6, 0.9)',
    //                     color: 'white',
    //                     '&:hover': {
    //                         cursor: 'pointer',
    //                     },
    //                 },
    //             },
    //             {
    //                 when: row => row.piensalo < 2,
    //                 style: {
    //                     backgroundColor: 'rgba(242, 38, 19, 0.9)',
    //                     color: 'white',
    //                     '&:hover': {
    //                         cursor: 'not-allowed',
    //                     },
    //                 },
    //             },
    //         ],
    //     },
    //     {
    //         name: 'Habilidades',
    //         selector: row =>
    //             row.habilidades === 1
    //                 ? '0'
    //                 : parseInt(row.habilidades / linksAlternativo.length * 100),
    //         sortable: true,
    //         conditionalCellStyles: [
    //             {
    //                 when: row => row.habilidades > 6,
    //                 style: {
    //                     backgroundColor: 'rgba(63, 195, 128, 0.9)',
    //                     color: 'white',
    //                     '&:hover': {
    //                         cursor: 'pointer',
    //                     },
    //                 },
    //             },
    //             {
    //                 when: row => row.habilidades > 1 && row.habilidades < 7,
    //                 style: {
    //                     backgroundColor: 'rgba(248, 148, 6, 0.9)',
    //                     color: 'white',
    //                     '&:hover': {
    //                         cursor: 'pointer',
    //                     },
    //                 },
    //             },
    //             {
    //                 when: row => row.habilidades < 2,
    //                 style: {
    //                     backgroundColor: 'rgba(242, 38, 19, 0.9)',
    //                     color: 'white',
    //                     '&:hover': {
    //                         cursor: 'not-allowed',
    //                     },
    //                 },
    //             },
    //         ],
    //     },
    //     {
    //         name: 'Fecha',
    //         selector: row => row.fecha,
    //         sortable: true,
    //     },
    // ]


    return (
        <>
            {loading ? <Loading /> : (
                <div
                    className="g-sidenav-show  bg-gray-100 "
                >
                    <main className="main-content position-relative h-100 border-radius-lg ">
                        <NavBarDashboard />


                        <div className="container-fluid">
                            {/* <DataTable
                                title="Resultados autoevaluativos"
                                columns={columnas}
                                data={Resultados}
                                pagination
                                paginationComponentOptions={paginationComponentOptions}
                                progressPending={loading}
                                progressComponent={<Loading />}
                                customStyles={customStyles}
                            /> */}

                            <FooterDashboard />
                        </div>

                    </main>
                </div>
            )}
        </>


    );
}

export default Resultados

