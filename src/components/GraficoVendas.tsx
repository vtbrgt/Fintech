import {IVenda} from "../context/DataContext.tsx";
import {Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

type VendaDia = {
    data: string
    pago: number
    processando: number
    falha: number
}

function transformData(data: IVenda[]): VendaDia[] {
    const dias = data.reduce((acc: {[key: string]: VendaDia}, cur) => {
        const dia = cur.data.split(" ")[0]
        if (!acc[dia]) {
            acc[dia] = {
                data: dia,
                pago: 0,
                processando: 0,
                falha: 0,
            }
        }
        acc[dia][cur.status] += cur.preco
        return acc

    }, {})

    return Object.values(dias).map(dia => ({ ...dia, data: dia.data.substring(5)}))
}

const GraficoVendas = ({ data }: { data: IVenda[] }) => {
    const transformedData = transformData(data)

    return (
        <ResponsiveContainer height={400} width="99%">
            <LineChart data={transformedData}>
                <XAxis dataKey="data" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pago" stroke="#A36AF9" strokeWidth={3} />
                <Line type="monotone" dataKey="processando" stroke="#FBCB21" strokeWidth={3} />
                <Line type="monotone" dataKey="falho" stroke="#000000" strokeWidth={3} />
            </LineChart>
        </ResponsiveContainer>
    )
}

export default GraficoVendas