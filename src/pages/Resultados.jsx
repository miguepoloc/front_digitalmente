/* eslint-disable no-loop-func */
import Axios from 'axios'
import React, { useEffect, useState, useMemo } from 'react';
import NavBarDashboard from '../components/Dashboard/NavBarDashboard';
import { Loading } from '../components/Loading';
import FooterDashboard from '../components/Dashboard/FooterDashboard'
import MaterialReactTable from 'material-react-table';


const Resultados = () => {
    const [loading, setLoading] = useState(true);

    const [Resultados, setResultados] = useState("")
    const [ResultadosDetallados, setResultadosDetallados] = useState("")

    useEffect(() => {
        const url = `${process.env.REACT_APP_API_URL}/api/encuesta_detalle`
        const fetchData = async () => {
            const response = await Axios({
                method: 'get',
                url: url
            })
            if (response) {
                // Coloca la data en la variable de estado
                setResultados(response.data.data2)
                setResultadosDetallados(response.data.data1)

            } else {
                console.log('No se pudieron traer los datos...')
            }
        };
        // Se llama a la función
        fetchData();
        setLoading(false);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    console.log(Resultados)
    

    const columns = useMemo(
        () => [
            {
                accessorKey: 'id_usuario_encuesta__id_usuario',
                header: 'ID usuario',
            },
            {
                accessorKey: 'id_usuario_encuesta__id_usuario_encuesta',
                header: 'ID encuesta',
            },
            {
                accessorKey: 'id_usuario_encuesta__id_usuario__nombre',
                header: 'Nombre',
                enableClickToCopy: true,
            },
            {
                accessorKey: 'id_usuario_encuesta__id_encuesta__nombre',
                header: 'Encuesta',
            },
            {
                accessorKey: 'resultado',
                header: 'Resultado',
            },

        ],
        [],
    );

    return (
        <>
            {loading ? <Loading /> : (
                <div
                    className="g-sidenav-show  bg-gray-100 "
                >
                    <main className="main-content position-relative h-100 border-radius-lg ">
                        <NavBarDashboard />
                        <div className="container-fluid">
                            <MaterialReactTable columns={columns} data={Resultados} />
                            <FooterDashboard />
                        </div>
                    </main>
                </div>
            )}
        </>
    );
}

export default Resultados

