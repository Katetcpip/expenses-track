import { useState } from "react";
import 'components/Forms/styles.css';
import Button from "components/Button";
import SumAll from "components/SumAll";
import uuid4 from "uuid4";
import { format } from 'date-fns';

export const items: Array<string> =["Food", "Entertainment", "Education", "Rent", "Clothes"];

function Forms (){

    let CurrencyFormat = require('react-currency-format');
    const [newTime, setTime] = useState("");
    const [expenses, setExpenses] = useState<Array<any>>([
        {
            newTime: "1200",
            option: "Clothes",
            date:"12/02/2022"
        },
        {
            newTime:"5850",
            option:"Rent",
            date:"30/05/2022"
        },
        {  
            newTime:"60000",
            option:"Education",
            date:"14/05/2022"
        }
    ]);
    const [option, setOption] = useState(items[0])

    const handleClick = (event:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        let time = format(new Date(), 'dd/mm/yyyy');
       const item ={
            newTime,
            option,
            date: time
        } 
        addNewItem(item)
        setTime("")
    }

    const addNewItem = (item): void =>{
        setExpenses([item, ...expenses])
      }

    return(

        <div className='flex flex-col w-full justify-center items-center'>
         <form className='flex lg:flex-row flex-col w-full justify-center items-center gap-5 lg:pt-0 pt-8'>

            <input 
                    onChange={(event) => setTime(event.target.value)}
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
            {expenses.length > 0 && expenses.map(ex => {
                return(
                    <div className="flex flex-col w-full" key={uuid4()}>
                    <div className="flex flex-row justify-between border-b border-orange-500 w-full p-4 mb-2 items-end">
                        <div className="flex flex-col items-start">
                            <div className="bg-green-200 rounded-2xl m-2 ml-0 px-2 lg:text-xl text-sm text-slate-800">{ex.date}</div>
                            <div className="text-slate-800 lg:text-2xl text-lg">{ex.option}</div>
                        </div>
                        <div className="text-slate-800 lg:text-2xl text-lg ">
                           - <CurrencyFormat value={ex.newTime} displayType={'text'} thousandSeparator={true} suffix={',00 ₽'} />
                        </div>
                    </div>
                    </div>  
                )
            })}
        </div>
       </div>
    );
}

export default Forms;