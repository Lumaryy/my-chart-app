import React from 'react'

const Graficas = () => {
    return (
        <div>
            <h1 className="bg-info text-center font-monospace fw-bold lh-base">Gráficas ChartJS</h1>
            <div>
                <p className="m-2"><b>Ejemplo #1: </b>Gráfico de líneas básico</p>
                <div className="bg-light mx-auto px-2 border border-2 border-primary" style={{ width: "450px", height: "230px" }}>

                </div>
            </div>
            <hr className="mt-3 mb-2" />
            <div>
                <p className="m-2"><b>Ejemplo #2: </b>Gráfico de barras</p>
                <div className="bg-light mx-auto px-2 border border-2 border-primary" style={{ width: "450px", height: "225px" }}>

                </div>
            </div>
            <hr className="mt-3 mb-2" />
            <div>
                <p className="m-2"><b>Ejemplo #3: </b>Gráfico circular</p>
                <div className="bg-light mx-auto border border-1 border-primary" style={{ width: "450px", height: "250px" }}>
                    <div style={{ width: "100%", height: "100%", padding: "10px 0" }}></div>
                </div>
            </div>
        </div>
        

    )
}

export default Graficas
