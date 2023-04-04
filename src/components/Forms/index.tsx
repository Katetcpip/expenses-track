import { useState } from "react";
import 'components/Forms/styles.css';
import Button from "components/ButtonAdd";
import SumAllExpenses from "components/SumAllExpenses";
import SumAllIncome from "components/SumAllIncome";
import { v4 } from "uuid";
import { format } from 'date-fns';
import FilterMonth from "components/FilterMonth";
import Render from "components/Render";
import Data from "components/Data";
import { Expenses } from "components/Render";
import FilterCathegory from "components/FilterCathegory";
import ButtonFilters from "components/ButtonFilters";

export const itemsExpenses: Array<string> =["Food", "Entertainment", "Education", "Rent", "Clothes"];
export const itemsIncome: Array<string> =["Cashback", "Salary", "Deposit", "Flat"];
 
function Forms (){

    const [newTime, setTime] = useState("");
    const [expenses, setExpenses] = useState<Expenses[]>(Data);
    const [optionExpenses, setOptionExpenses] = useState(itemsExpenses[0]);
    const [optionIncome, setOptionIncome] = useState(itemsIncome[0]);
    const [isActive, setIsActive] = useState(false);
    const [Balans, setBalans] = useState('');
    const [date, setDate] = useState(format(new Date(), 'dd MMMM yyyy'));

    const handleClickExpenses = (event:React.MouseEvent<HTMLButtonElement, MouseEvent>) : void => {
       event.preventDefault();
       const item : Expenses = {
            newTime: newTime === '' ? '0' : newTime,
            option: optionExpenses,
            date,
            value: "-",
            id: v4()
        } 
        addNewItem(item)
    }

    const handleClickIncome = (event:React.MouseEvent<HTMLButtonElement, MouseEvent>) : void => {
        event.preventDefault();
        const item : Expenses = {
             newTime: Balans === '' ? '0' : Balans,
             option: optionIncome,
             date,
             value: "+",
             id: v4()
         } 
         addNewItem(item)
     }

    const addNewItem = (item : Expenses): void =>{
        setTime('')
        setBalans('')
        currentAmount(expenses)
        setExpenses([item, ...expenses]) 
        let newData = Array.from(expenses)
        newData.push(item)
        localStorage.setItem("notes", JSON.stringify(newData));
    }

    const deleteItem = (id : string) : void => {
        currentAmount(expenses)
        let newData = Array.from(expenses)
        let newItems : Expenses[] = newData.filter(it => it.id !== id);
        setExpenses(newItems); 
        localStorage.setItem("notes", JSON.stringify(newItems));
    }

    const currentAmount = (expenses : Expenses[]) => {
        let sum = 0;
        expenses.map((ex : Expenses) => {
            return ex.value === "-" ? (sum = sum - Number(ex.newTime)) : (sum = sum + Number(ex.newTime))
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
       
        <form 
            className='flex lg:flex-row flex-wrap flex-col w-full justify-start items-center lg:gap-1 gap-5 lg:pt-0 pt-8 lg:pb-4'>
            <p className="text-sm font-semibold w-full text-slate-400">Income</p>
            <input 
                onChange={(event) => {
                    let price = event.target.value;
                    // price = price.replace(/[^0-9]/g, '');
                    setBalans(price) 
                }}
                value={Balans}
                placeholder="00.00"
                type="text" 
                className="rounded-md border border-gray-300 bg-white py-2 pl-3 px-1 pr-2 text-left shadow-sm focus:border-red-500 
                focus:outline-none focus:ring-1 
                focus:ring-red-500 sm:text-sm text-sm 
                md:w-1/4 w-full cursor-pointer"                
                >
            </input>

            <select 
                value={optionIncome}
                onChange={(event) => setOptionIncome(event.target.value)}
                className="rounded-md border border-gray-300 bg-white py-2 pl-3 px-1 pl-3 pr-10 text-left shadow-sm focus:border-red-500 
                focus:outline-none focus:ring-1 
                focus:ring-red-500 sm:text-sm text-sm
                md:w-1/4 w-full cursor-pointer">
                    {itemsIncome.map(item => <option key={v4()}>{item}</option>)}
            </select>  

            <input 
                type = "date"
                value={date} 
                onChange={(e) => { 
                    let a =  format(new Date(e.target.value), 'dd MMMM yyyy');
                    setDate(a)}
                }      
                className="rounded-md border border-gray-300 bg-white py-2 pl-3 px-1 pr-2 text-left shadow-sm focus:border-red-500 
                focus:outline-none focus:ring-1 
                focus:ring-red-500 sm:text-sm text-sm 
                md:w-1/4 w-full cursor-pointer"> 
            </input>

            <Button title="ADD" type="submit" onClick={handleClickIncome}/>
        </form>
        <form 
            className='flex lg:flex-row flex-wrap flex-col w-full justify-start items-center lg:gap-1 gap-5 lg:pt-0 pt-8'>
         <p className="text-sm font-semibold w-full text-slate-400">Expenses</p>
            <input 
                onChange={(event) => {
                    let price = event.target.value;
                    price = price.replace(/[^0-9]/g, '');
                    console.log(price)
                    setTime(price)}
                }
                value={newTime}
                placeholder="00.00"
                type="text" 
                className="rounded-md border border-gray-300 bg-white py-2 pl-3 px-1 pr-10 text-left shadow-sm focus:border-red-500 
                focus:outline-none focus:ring-1 
                focus:ring-red-500 sm:text-sm text-sm 
                md:w-1/4 w-full cursor-pointer "
                >
            </input>

            <select 
                value={optionExpenses}
                onChange={(event) => setOptionExpenses(event.target.value)}
                className="rounded-md border border-gray-300 bg-white py-2 pl-3 px-1 pl-3 pr-10 text-left shadow-sm focus:border-red-500 
                focus:outline-none focus:ring-1 
                focus:ring-red-500 sm:text-sm text-sm
                md:w-1/4 w-full cursor-pointer">
                    {itemsExpenses.map(item => <option key={v4()}>{item}</option>)}
            </select> 

            <input 
                value={date} 
                type = "date"
                onChange={(e) => { 
                    let a =  format(new Date(e.target.value), 'dd MMMM yyyy');
                    setDate(a)}
                }      
                className="rounded-md border border-gray-300 bg-white py-2 pl-3 px-1 pr-2 text-left shadow-sm focus:border-red-500 
                focus:outline-none focus:ring-1 
                focus:ring-red-500 sm:text-sm text-sm 
                md:w-1/4 w-full cursor-pointer"> 
            </input>

                <Button title="ADD" type="submit" onClick={handleClickExpenses}/>
         </form>

        <div onClick={() => setIsActive(!isActive)}
            className={isActive === true ? "rounded-t-md borderStyle" : "rounded-md borderStyle"}>
            <p className="lg:text-base text-sm font-semibold">Diagrams</p>
            <p className="lg:text-base text-sm font-semibold">{isActive ? '-' : '+'}</p>
        </div>

        {isActive &&  
            <div className="flex flex-col items-center w-full lg:text-2xl text-2xl diagrams bg-white">
            <SumAllExpenses expenses={expenses}/>
            <SumAllIncome expenses={expenses}/>
        </div>}

        <div className="w-full flex flex-row flex-wrap gap-4 lg:justify-end justify-center items-end pt-10">
            <ButtonFilters title='Income' setExpenses={setExpenses}/>
            <ButtonFilters title='Expenses' setExpenses={setExpenses}/>
            <ButtonFilters title='All' setExpenses={setExpenses}/>
            <FilterCathegory setExpenses={setExpenses} expenses={expenses}/>
            <FilterMonth setExpenses={setExpenses} expenses={expenses}/>
        </div>
        
        <Render expenses={expenses} deleteItem={deleteItem} setExpenses={setExpenses}/>
        
       </div>
    );
}

export default Forms;
