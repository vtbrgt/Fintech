import {useData} from "../context/DataContext.tsx";
import VendaItem from "../components/VendaItem.tsx";

const Vendas = () => {
    const { data } = useData()

    if (data === null) return null
    return (
        <ul>
            {data.map((venda) => (
                <li key={venda.id}><VendaItem venda={venda} /></li>
            ))}
        </ul>
    )
}

export default Vendas