import uuid4 from "uuid4";
import { useState } from "react";
import Data from "components/Data";
import { Expenses } from "components/Render";

function FilterCathegory({setExpenses}){

    const cathegory : Array<string>= ['Cathegory','Food', 'Entertainment', 'Education', 'Rent', 'Clothes']
    const [options, setOptions] = useState('cathegory')
    
    const Filters = (ev : string) : void => {
        setOptions(ev);

        if (ev !== 'Cathegory'){
            const newItem : Array<object> = Data.filter((newVal : Expenses) => {
                return  newVal.option === ev;
            });
            setExpenses(newItem)} else{setExpenses(Data)}
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
                {cathegory.map(m => <option key={uuid4()}>{m}</option>)}
            </select>
        </div>
    )
}

export default FilterCathegory;