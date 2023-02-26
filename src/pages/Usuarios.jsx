/* eslint-disable no-loop-func */
import Axios from 'axios'
import React, { useEffect, useState, useMemo } from 'react';
import DataTable from 'react-data-table-component';
import NavBarDashboard from '../components/Dashboard/NavBarDashboard';
import { Loading } from '../components/Loading';
import FooterDashboard from '../components/Dashboard/FooterDashboard'
import { linksEmocional } from '../helpers/helper_emocional';
import { linksRelax } from '../helpers/helperRelax';
import { linksPiensalo } from '../helpers/helperPiensalo';
import { linksAlternativo } from '../helpers/helperAlternativo';
import { CartaGrafica } from '../components/Dashboard/CartaGrafica';
import MaterialReactTable from 'material-react-table';
import { Box, Stack } from '@mui/material';


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


const Usuarios = () => {
    const [loading, setLoading] = useState(true);

    const [Usuarios, setUsuarios] = useState("")

    useEffect(() => {
        const url = `${process.env.REACT_APP_API_URL}/api/usuario_detalle`
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
                setUsuarios(response.data)
            } else {
                console.log('No se pudieron traer los datos...')
            }
        };
        // Se llama a la función
        fetchData();
        setLoading(false);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    console.log(Usuarios)

    const columns = useMemo(
        () => [
            {
                accessorKey: 'id', //access nested data with dot notation
                header: 'ID',
            },
            {
                accessorKey: 'nombre',
                header: 'Nombre',
                enableClickToCopy: true,
            },
            {
                accessorKey: 'tipo_documento',
                header: 'Tipo de documento',
            },
            {
                accessorKey: 'document',
                header: 'Documento',
                enableClickToCopy: true,
            },
            {
                accessorKey: 'email',
                header: 'Correo',
                enableClickToCopy: true,
            },
            {
                accessorKey: 'telefono',
                header: 'Telefono',
                enableClickToCopy: true,
            },
            {
                accessorKey: 'departamento_nacimiento',
                header: 'Departamento',
            },
            {
                accessorKey: 'ciudad_nacimiento',
                header: 'Ciudad',
            },
            {
                accessorKey: 'fecha_nacimiento',
                header: 'Fecha de nacimiento',
            },
            {
                accessorKey: 'edad',
                header: 'Edad',

            },
            {
                accessorKey: 'estado_civil__estado_civil',
                header: 'Estado civil',
            },
            {
                accessorKey: 'programa_academico__facultad',
                header: 'Facultad',
            },
            {
                accessorKey: 'programa_academico__programa',
                header: 'Programa',
            },
            {
                accessorKey: 'semestre',
                header: 'Semestre',
            },
            {
                accessorKey: 'covid_positivo',
                header: 'Covid positivo',
                Cell: ({ cell }) => cell.getValue() ? 'Sí' : 'No',
            },
            {
                accessorKey: 'covid_familiar',
                header: 'Familiar con covid',
                Cell: ({ cell }) => cell.getValue() ? 'Sí' : 'No',
            },
            {
                accessorKey: 'covid_vacuna',
                header: 'Vacunado contra covid',
                Cell: ({ cell }) => cell.getValue() ? 'Sí' : 'No',
            },
            {
                accessorKey: 'covid_tipo_vacuna',
                header: 'Tipo de vacuna',
            },
            {
                accessorKey: 'covid_dosis',
                header: 'Covid dosis',
                Cell: ({ cell }) => cell.getValue() ? 'Sí' : 'No',
            },
            {
                accessorKey: 'discapacidad',
                header: 'Tiene discapacidad',
                Cell: ({ cell }) => cell.getValue() ? 'Sí' : 'No',
            },
            {
                accessorKey: 'discapacidad_tipo',
                header: 'Tipo de discapacidad',
            },
            {
                accessorKey: 'ocupacion',
                header: 'Ocupación',
            },
            {
                accessorKey: 'is_controlgroup',
                header: 'Grupo de control',
                Cell: ({ cell }) => cell.getValue() ? 'Sí' : 'No',
            },
            {
                accessorKey: 'is_active',
                header: 'Usuario activo',
                Cell: ({ cell }) => cell.getValue() ? 'Sí' : 'No',
            },
            {
                accessorKey: 'is_staff',
                header: 'Usuario administrador',
                Cell: ({ cell }) => cell.getValue() ? 'Sí' : 'No',
            },
            {
                accessorKey: 'created_at',
                header: 'Fecha de creación',
            },
            {
                accessorKey: 'updated_at',
                header: 'Fecha de actualización',
            },
        ],
        [],
    );
    // for (let index = 0; index < Usuarios.data2.length; index++) {
    //     console.log(Usuarios.data2[index])

    // }

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
                        <MaterialReactTable columns={columns} data={Usuarios} />

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

export default Usuarios

