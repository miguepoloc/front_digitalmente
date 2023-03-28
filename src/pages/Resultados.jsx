/* eslint-disable no-loop-func */
import Axios from 'axios'
import React, { useEffect, useState, useMemo } from 'react';
import NavBarDashboard from '../components/Dashboard/NavBarDashboard';
import { Loading } from '../components/Loading';
import FooterDashboard from '../components/Dashboard/FooterDashboard'
import MaterialReactTable from 'material-react-table';


const Resultados = () => {
    const [loading, setLoading] = useState(true);

    const [ResultadosDetallados, setResultadosDetallados] = useState("")
    var llaves = []
    useEffect(() => {
        const url = `${process.env.REACT_APP_API_URL}/api/encuesta_detalle`
        const fetchData = async () => {
            const response = await Axios({
                method: 'get',
                url: url
            })
            if (response) {
                // Coloca la data en la variable de estado
                setResultadosDetallados(response.data)

            } else {
                console.log('No se pudieron traer los datos...')
            }
        };
        // Se llama a la función
        fetchData();
        setLoading(false);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    console.log(ResultadosDetallados)
    llaves = Object.keys(ResultadosDetallados[0] || {})

    // console.log(llaves)
    const col = []
    // var nombre = { accessorKey: 'nombre', header: 'Nombre' }
    var nombre = {}
    for (let llave of llaves) {
        nombre = {
            accessorKey: llave,
            header: llave,
        }
        col.push(nombre)
    }

    console.log(col)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const columns = useMemo(
        () => col,);

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
                                data={ResultadosDetallados ?? []}
                                title="Resultados detallados"
                                enableDensityToggle={false}
                                initialState={{ density: 'compact' }}
                            />
                            <FooterDashboard />
                        </div>
                    </main>
                </div>
            )}
        </>
    );
}

export default Resultados

