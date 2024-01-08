import DateInput from "./DateInput.tsx";
import {useData} from "../context/DataContext.tsx";

const DateRange = () => {
    const {inicio, setInicio, final, setFinal} = useData()

    return (
        <form className="box" onSubmit={(e) => e.preventDefault()}>
            <DateInput label="Início" value={inicio} onChange={({target}) => setInicio(target.value)} />
            <DateInput label="Final" value={final} onChange={({target}) => setFinal(target.value)} />
        </form>
    )
}

export default DateRange