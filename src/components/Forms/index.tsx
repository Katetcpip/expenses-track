import { useState } from "react";
import 'components/Forms/styles.css';
import Button from "components/ButtonAdd";
import SumAll from "components/SumAll";
import uuid4 from "uuid4";
import { format } from 'date-fns';
import FilterMonth from "components/FilterMonth";
import Render from "components/Render";
import Data from "components/Data";
import { Expenses } from "components/Render";
import FilterCathegory from "components/FilterCathegory";

export const items: Array<string> =["Food", "Entertainment", "Education", "Rent", "Clothes"];
  
function Forms (){

    const [newTime, setTime] = useState("");
    const [expenses, setExpenses] = useState(Data);
    const [option, setOption] = useState(items[0]);
    const [isActive, setIsActive] = useState(false);
    const [Balans, setBalans] = useState('');
    const [cathegory, setCathegory] = useState('');

    const handleClickExpenses = (event:React.MouseEvent<HTMLButtonElement, MouseEvent>) : void => {
       event.preventDefault();
       let time : string = format(new Date(), 'dd MMMM yyyy');
       const item : Expenses = {
            newTime,
            option,
            date: time,
            value: "-",
            id: uuid4()
        } 
        addNewItem(item)
        setTime("")
    }

    const handleClickIncome = (event:React.MouseEvent<HTMLButtonElement, MouseEvent>) : void => {
        event.preventDefault();
        let time : string = format(new Date(), 'dd MMMM yyyy');
        const item : Expenses = {
             newTime: Balans,
             option: cathegory,
             date: time,
             value: "+",
             id: uuid4()
         } 
         addNewItem(item)
         setCathegory("")
         setBalans("")
     }

    const addNewItem = (item : Expenses): void =>{
        Data.unshift(item)
        currentAmount(expenses)
        localStorage.setItem('notes', JSON.stringify(Data))
    }

    const deleteItem = (ex : Expenses) : void => {
        let newData : Array<Expenses> = JSON.parse(JSON.stringify(expenses))
        const newItems: Expenses[] = newData.filter(it => it.id !== ex.id);
        setExpenses(newItems);
        localStorage.setItem("notes", JSON.stringify(newItems));
    }

    const currentAmount = (expenses) => {
        let sum = 0;
        expenses.map(ex => {
            ex.value === "-" ? (sum = sum - Number(ex.newTime)) : (sum = sum + Number(ex.newTime))
        })
        return sum;
    }

    return(
        <div className='flex flex-col w-full justify-center items-center'>

        <div className="flex flex-row justify-start w-full mb-8">
        <img alt="" className="h-20 w-36 mr-4 hover:scale-110 hover:-rotate-2 duration-300 hover:shadow-md" src="https://alfabank.servicecdn.ru/media/everyday/debit-cards/alfacard-benefits_03-12-2020.png"/>
        <div className="flex flex-col">
            <p className="text-xl font-thin">{currentAmount(expenses)},00 ₽</p>
            <p className="text-xs font-semibold">Current account</p>
        </div>
        </div>
       
        <form className='flex lg:flex-row flex-wrap flex-col w-full justify-start items-center lg:gap-1 gap-5 lg:pt-0 pt-8 lg:pb-4'>
            <p className="text-sm font-semibold w-full text-slate-400">Income</p>
            <input 
                onChange={(event) => {setBalans(event.target.value)}}
                value={Balans}
                placeholder="00.00"
                type="text" 
                className="rounded-md border border-gray-300 bg-white py-2 pl-3 px-1 pr-10 text-left shadow-sm focus:border-red-500 
                focus:outline-none focus:ring-1 
                focus:ring-red-500 sm:text-sm text-sm 
                md:w-2/6 w-full cursor-pointer ">
            </input> 

            <input 
                onChange={(event) => {setCathegory(event.target.value)}}
                value={cathegory}
                placeholder="Cathegory"
                type="text" 
                className="rounded-md border border-gray-300 bg-white py-2 pl-3 px-1 pr-10 text-left shadow-sm focus:border-red-500 
                focus:outline-none focus:ring-1 
                focus:ring-red-500 sm:text-sm text-sm 
                md:w-2/6 w-full cursor-pointer ">
            </input> 
            <Button title="ADD" type="submit" handleClick={handleClickIncome} />
        </form>
        <form className='flex lg:flex-row flex-wrap flex-col w-full justify-start items-center lg:gap-1 gap-5 lg:pt-0 pt-8'>
         <p className="text-sm font-semibold w-full text-slate-400">Expenses</p>
            <input 
                onChange={(event) => {
                    let price = event.target.value;
                    price = price.replace(/[^0-9]/g, '');
                    setTime(price)}
                }
                value={newTime}
                placeholder="00.00"
                type="text" 
                className="rounded-md border border-gray-300 bg-white py-2 pl-3 px-1 pr-10 text-left shadow-sm focus:border-red-500 
                focus:outline-none focus:ring-1 
                focus:ring-red-500 sm:text-sm text-sm 
                md:w-2/6 w-full cursor-pointer ">
            </input> 

            <select 
                value={option}
                onChange={(event) => setOption(event.target.value)}
                className="rounded-md border border-gray-300 bg-white py-2 pl-3 px-1 pl-3 pr-10 text-left shadow-sm focus:border-red-500 
                focus:outline-none focus:ring-1 
                focus:ring-red-500 sm:text-sm text-sm
                md:w-2/6 w-full cursor-pointer">
                    {items.map(item => <option key={uuid4()}>{item}</option>)}
            </select> 
                <Button title="ADD" type="submit" handleClick={handleClickExpenses} />
         </form>

        <div onClick={() => setIsActive(!isActive)}
            className={isActive === true ? "rounded-t-md borderStyle" : "rounded-md borderStyle"}>
            <p className="lg:text-base text-sm font-semibold">Diagrams</p>
            <p className="lg:text-base text-sm font-semibold">{isActive ? '-' : '+'}</p>
        </div>

        {isActive &&  
            <div className="flex flex-col items-center w-full lg:text-2xl text-2xl diagrams bg-white">
            <SumAll expenses={expenses}/>
        </div>}

        <div className="w-full flex flex-row flex-wrap gap-4 lg:justify-end justify-center items-end pt-10">
            <button className="buttonFilter hover:bg-slate-100">Income</button>
            <button className="buttonFilter hover:bg-slate-100 ">Expenses</button>
            <FilterCathegory setExpenses={setExpenses}/>
            <FilterMonth setExpenses={setExpenses}/>
        </div>
        
        <Render expenses={expenses} deleteItem={deleteItem}/>
        
       </div>
    );
}

export default Forms;
