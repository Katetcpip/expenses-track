import uuid4 from "uuid4";
import { useState } from "react";
import Data from "components/Data";
import { Expenses } from "components/Render";

function Filter({setExpenses}){

    const months : Array<string>= ['All','January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December']
    const [options, setOptions] = useState('month')
    
    const Filters = (ev : string) : void => {
        setOptions(ev);

        if (ev !== 'all'){
            const newItem : Array<object> = Data.filter((newVal : Expenses) => {
                let month : string =  newVal.date.slice(3).slice(0, -5) 
                return month === ev; 
            });
            {setExpenses(newItem)}
            //     else {
            //         const item ={
            //             newTime:"nothing",
            //              option:" ",
            //              date:" "
            //         } 
            //         setExpenses(item)
            //     }
        } else{setExpenses(Data)}
    }
    
    return(
        <div className="flex flex-row justify-end w-full pt-10">
            <select
            value={options}
            onChange={(event) => Filters(event.target.value)}
            className="focus:border-orange-500 
            focus:outline-none focus:ring-1 
            focus:ring-orange-500 text-sm 
            w-fill cursor-pointer rounded-xl px-2">
                {months.map(m => <option key={uuid4()}>{m}</option>)}
            </select>
        </div>
    )
}

export default Filter;