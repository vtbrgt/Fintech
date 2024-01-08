import {useData} from "../context/DataContext.tsx";

const Resumo = () => {
    const { data } = useData()

    if (data === null) return null
    return (
        <section>
            <div className="resumo flex mb">
                <div className="box">
                    <h2>Vendas</h2>
                    <span>
                        {data.filter((i) => i.status !== "falha")
                            .reduce((acc, cur) => acc + cur.preco, 0)
                            .toLocaleString("pt-br", {style: "currency", currency: "BRL"})}
                    </span>
                </div>
                <div className="box">
                    <h2>Recebido</h2>
                    <span>
                        {data.filter((i) => i.status === "pago")
                            .reduce((acc, cur) => acc + cur.preco, 0)
                            .toLocaleString("pt-br", {style: "currency", currency: "BRL"})}
                    </span>
                </div>
                <div className="box">
                    <h2>Processando</h2>
                    <span>
                        {data.filter((i) => i.status === "processando")
                            .reduce((acc, cur) => acc + cur.preco, 0)
                            .toLocaleString("pt-br", {style: "currency", currency: "BRL"})}
                    </span>
                </div>
            </div>
            <div className="box mb">Gráficos</div>
        </section>
    )
}

export default Resumo