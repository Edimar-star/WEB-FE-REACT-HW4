const Table = ({ data }) => {
    const formatNumber = new Intl.NumberFormat('es-CL', { 
        style: 'currency', 
        currency: 'CLP' 
    });

    const convertValue = (value, key) => {
        if (typeof value !== 'number' || key === "id") return value
        if (key === "compliance") return `${value}%`
        return formatNumber.format(value)
    }

    return <table>
        {/* --------------------- CABEZERA ---------------------------- */}
        <thead>
            <tr>
                {data.columns.map((item, index) => <td key={index}><b>{item}</b></td>)}
            </tr>
        </thead>

        {/* --------------------- CUERPO ---------------------------- */}
        <tbody>
            {data.data.map((item) => <tr key={item.id}>
                {Object.keys(item).map((key, index) => <td key={index}>{convertValue(item[key], key)}</td>)}
                
                {/* --------------------- COLUMNA ESTADO ---------------------------- */}
                {0 <= item.compliance && item.compliance <= 35 ? 
                    <td>Crítico</td>
                : 36 <= item.compliance && item.compliance <= 75 ?
                    <td>Aceptable</td>
                : <td>Exitoso</td>}
            </tr>)}
        </tbody>
    </table>
}

export default Table