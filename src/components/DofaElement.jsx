const DofaElement = ({ data }) => {
    return <article className="flex flex-col p-4 bg-gray-100 rounded-lg shadow-lg h-full">
        <h3 className="text-xl font-semibold mb-2">{data.type}</h3>
        <ol className="list-decimal pl-5 space-y-2 flex-grow">
            {data.items.map((item) => (
                <li key={item.id} className="mb-2">
                    <h4 className="text-lg font-medium">{item.name}</h4>
                    <p className="text-gray-700">{item.description}</p>
                </li>
            ))}
        </ol>
    </article>
}

export default DofaElement;
