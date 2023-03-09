import { useState } from "react";
import 'components/Forms/styles.css';
import Button from "components/Button";
import SumAll from "components/SumAll";
import uuid4 from "uuid4";
import { format } from 'date-fns';
import Filter from "components/Filter";
import Render from "components/Render";
import Data from "components/Data";
import { Expenses } from "components/Render";

export const items: Array<string> =["Food", "Entertainment", "Education", "Rent", "Clothes"];
  
function Forms (){

    const [newTime, setTime] = useState("");
    const [expenses, setExpenses] = useState(Data);
    const [option, setOption] = useState(items[0])

    const handleClick = (event:React.MouseEvent<HTMLButtonElement, MouseEvent>) : void => {
       event.preventDefault();
       let time : string = format(new Date(), 'dd MMMM yyyy');
       const item : Expenses = {
            newTime,
            option,
            date: time
        } 
        addNewItem(item)
        setTime("")
    }

    const addNewItem = (item : Expenses): void =>{
        Data.unshift(item)
    }

    return(
        <div className='flex flex-col w-full justify-center items-center'>
        <form className='flex lg:flex-row flex-col w-full justify-center items-center gap-5 lg:pt-0 pt-8'>
            <input 
                onChange={(event) => {
                    let price = event.target.value;
                    let b = price.replace(/[^0-9.]/g, '');
                    if (b.indexOf(".") !== -1) {
                        b = b.substring(0, b.indexOf(".") + 3);
                    } 
                    b = b.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
                    if (b === ""){b = ""}
                    setTime(b)}
                }
                value={newTime}
                placeholder="00.00"
                type="text" 
                className="rounded-md border border-gray-300 bg-white py-3 pl-3 pr-10 text-left shadow-sm focus:border-orange-500 
                focus:outline-none focus:ring-1 
                focus:ring-orange-500 sm:text-sm 
                md:w-2/6 w-full cursor-pointer Font">
            </input> 

            <select 
                value={option}
                onChange={(event) => setOption(event.target.value)}
                className="rounded-md border border-gray-300 bg-white py-3 pl-3 pr-10 text-left shadow-sm focus:border-orange-500 
                focus:outline-none focus:ring-1 
                focus:ring-orange-500 sm:text-sm 
                md:w-2/6 w-full cursor-pointer Font">
                    {items.map(item => <option key={uuid4()}>{item}</option>)}
            </select> 
                <Button type="submit" handleClick={handleClick} />
         </form>

         <div className="flex flex-col items-center w-full lg:text-2xl text-2xl lg:mt-10 mt-4">
            <SumAll expenses={expenses}/>
            <Filter setExpenses={setExpenses}/>
            <Render expenses={expenses} />
        </div>
       </div>
    );
}

export default Forms;
