/* eslint-disable no-loop-func */
import Axios from 'axios'
import React, { useEffect, useState, useMemo } from 'react';
import NavBarDashboard from '../components/Dashboard/NavBarDashboard';
import { Loading } from '../components/Loading';
import FooterDashboard from '../components/Dashboard/FooterDashboard'
import MaterialReactTable from 'material-react-table';
import { Box, Button } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { ExportToCsv } from 'export-to-csv';

const Usuarios = () => {
    const [loading, setLoading] = useState(true);

    const [Usuarios, setUsuarios] = useState("")

    useEffect(() => {
        const url = `${process.env.REACT_APP_API_URL}/api/usuario_detalle`
        const fetchData = async () => {
            const response = await Axios({
                method: 'get',
                url: url
            })
            if (response) {
                // Coloca la data en la variable de estado
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
                accessorKey: 'id',
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

    const csvOptions = {
        fieldSeparator: ',',
        quoteStrings: '"',
        decimalSeparator: '.',
        showLabels: true,
        useBom: true,
        useKeysAsHeaders: false,
        headers: columns.map((c) => c.header),
    };

    const handleExportRows = (rows) => {
        csvExporter.generateCsv(rows.map((row) => row.original));
    };

    const handleExportData = () => {
        csvExporter.generateCsv(Usuarios);
    };


    const csvExporter = new ExportToCsv(csvOptions);

    return (
        <>
            {loading ? <Loading /> : (
                <div
                    className="g-sidenav-show  bg-gray-100 "
                >
                    <main className="main-content position-relative h-100 border-radius-lg ">
                        <NavBarDashboard />
                        <div className="container-fluid">
                            <MaterialReactTable
                                columns={columns}
                                data={Usuarios}
                                enableRowSelection
                                positionToolbarAlertBanner="bottom"
                                renderTopToolbarCustomActions={({ table }) => (
                                    <Box
                                        sx={{ display: 'flex', gap: '1rem', p: '0.5rem', flexWrap: 'wrap' }}
                                    >
                                        <Button
                                            color="primary"
                                            //export all data that is currently in the table (ignore pagination, sorting, filtering, etc.)
                                            onClick={handleExportData}
                                            startIcon={<FileDownloadIcon />}
                                            variant="contained"
                                        >
                                            Todos los datos
                                        </Button>
                                        <Button
                                            disabled={table.getPrePaginationRowModel().rows.length === 0}
                                            //export all rows, including from the next page, (still respects filtering and sorting)
                                            onClick={() =>
                                                handleExportRows(table.getPrePaginationRowModel().rows)
                                            }
                                            startIcon={<FileDownloadIcon />}
                                            variant="contained"
                                        >
                                            Datos filtrados
                                        </Button>
                                        <Button
                                            disabled={table.getRowModel().rows.length === 0}
                                            //export all rows as seen on the screen (respects pagination, sorting, filtering, etc.)
                                            onClick={() => handleExportRows(table.getRowModel().rows)}
                                            startIcon={<FileDownloadIcon />}
                                            variant="contained"
                                        >
                                            Datos de la página
                                        </Button>
                                        <Button
                                            disabled={
                                                !table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected()
                                            }
                                            //only export selected rows
                                            onClick={() => handleExportRows(table.getSelectedRowModel().rows)}
                                            startIcon={<FileDownloadIcon />}
                                            variant="contained"
                                        >
                                            Selección
                                        </Button>
                                    </Box>
                                )}
                            />
                            <FooterDashboard />
                        </div>
                    </main>
                </div>
            )}
        </>
    );
}

export default Usuarios

