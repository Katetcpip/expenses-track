import uuid4 from "uuid4";
import { useState } from "react";
import { Expenses } from "components/Render";

function FilterMonth({setExpenses, expenses}){

    const months : Array<string>= ['Months','January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December']
    const [options, setOptions] = useState('month')

    const Filters = (ev : string) : void => {
        setOptions(ev);
        if (ev !== 'Months'){
            const newItem : Array<object> = JSON.parse(localStorage.getItem('notes')).filter((newVal : Expenses) => {
                let month : string =  newVal.date.slice(3).slice(0, -5) 
                return month === ev; 
            });
            setExpenses(newItem)} else{setExpenses(JSON.parse(localStorage.getItem('notes')))}
    }
    
    return(
        <div className="flex flex-row justify-end w-fit">
            <select
            value={options}
            onChange={(event) => Filters(event.target.value)}
            className="focus:border-red-500 
            focus:outline-none focus:ring-1 
            focus:ring-red-500 text-base border border-solid border-slate-200
            w-fit cursor-pointer rounded-md pl-2 hover:bg-slate-100 duration-300">
                {months.map(m => <option key={uuid4()}>{m}</option>)}
            </select>
        </div>
    )
}

export default FilterMonth;