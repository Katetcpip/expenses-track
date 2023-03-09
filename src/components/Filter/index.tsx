import uuid4 from "uuid4";
import { useState } from "react";
import Data from "components/Data";
import Header from "components/Header";

function Filter({expenses, setExpenses}:any){

    const months = ['All','January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December']
    const [options, setOptions] = useState('month')
    
    const Filters = (ev) => {
        setOptions(ev);

        if (ev !== 'all'){
            const newItem = Data.filter((newVal) => {
                let month =  newVal.date.slice(3).slice(0, -5) 
                return month === ev; 
            });

          {setExpenses(newItem)}
        //     else {
        //         const item ={
        //             newTime:"6000",
        // option:"Education",
        // date:"14 May 2022"
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
            w-fill cursor-pointer rounded-xl px-2"
            >
                {months.map(m => <option key={uuid4()}>{m}</option>)}
            </select>
        </div>
    )
}

export default Filter;