const DofaElement = ({ data }) => {
    return <article>
        <h3>{data.type}</h3>
        <ol>
            {data.items.map((item) => <li key={item.id}>
                <h4>{item.name}</h4>
                <p>{item.description}</p>
            </li>)}
        </ol>
    </article>
}

export default DofaElement