const Table = ({ data }) => {
    const formatNumber = new Intl.NumberFormat('es-CL', { 
        style: 'currency', 
        currency: 'CLP' 
    });

    const convertValue = (value, key) => {
        if (typeof value !== 'number' || key === "id") return value;
        if (key === "compliance") return `${value}%`;
        return formatNumber.format(value);
    };

    return <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 bg-white">
            {/* --------------------- CABEZERA ---------------------------- */}
            <thead className="bg-gray-50">
                <tr>
                    {data.columns.map((item, index) => (
                        <th key={index} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {item}
                        </th>
                    ))}
                </tr>
            </thead>

            {/* --------------------- CUERPO ---------------------------- */}
            <tbody className="bg-white divide-y divide-gray-200">
                {data.data.map((item) => (
                    <tr key={item.id}>
                        {Object.keys(item).map((key, index) => (
                            <td key={index} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {convertValue(item[key], key)}
                            </td>
                        ))}
                        {/* --------------------- COLUMNA ESTADO ---------------------------- */}
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {0 <= item.compliance && item.compliance <= 35 ? 
                                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">Crítico</span>
                            : 36 <= item.compliance && item.compliance <= 75 ?
                                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">Aceptable</span>
                            : 
                                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Exitoso</span>
                            }
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
};

export default Table;
