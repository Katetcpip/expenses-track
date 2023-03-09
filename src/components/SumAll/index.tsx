import { items } from "components/Forms";
import Diagram from "components/Diagram";
import { Expenses } from "components/Render";


function SumAll({expenses}){

    let CurrencyFormat = require('react-currency-format');
    function sum(expenses : Array<Expenses>, znak : string){
        let newArr : Array<Expenses> = expenses.filter((item : Expenses) => item.option === znak);
        let sumFood : number = 0;
        newArr.map((filteredItem : Expenses) =>{
            return(sumFood = Number(filteredItem.newTime) + sumFood)
        });
        let itog : JSX.Element= <CurrencyFormat value={sumFood} displayType={'text'} thousandSeparator={true} suffix={',00 ₽'} />
        return(itog)
    }

    function totalSum(expenses : Array<Expenses>) : JSX.Element{
        let sumTotal : number = 0;
        expenses.map((filteredItem : Expenses)=> {
            return(sumTotal = Number(filteredItem.newTime) + sumTotal)
        })
        let itog : JSX.Element = <CurrencyFormat value = {sumTotal} displayType = {'text'} thousandSeparator = {true} suffix = {',00 ₽'} />
        return(itog)
    }

    return(
        <div className="flex lg:flex-row flex-col w-full justify-between">  
            <div id="diagram" className="flex justify-center items-center lg:mb-0 mb-4 lg:w-1/2 w-full -ml-4">
                    <Diagram expenses={expenses} sum={sum}/>
            </div>

            <div className="flex flex-col items-start lg:w-1/2 w-full">
                <div className="mb-2 rounded-2xl bg-blue-100 py-2 pr-2 pl-4 w-full text-lg">{items[0]} - {sum(expenses, "Food")} </div>
                <div className="mb-2 rounded-2xl bg-violet-100 py-2 pr-2 pl-4 w-full text-lg">{items[1]} - {sum(expenses, "Entertainment")}</div>
                <div className="mb-2 rounded-2xl bg-pink-100 py-2 pr-2 pl-4 w-full text-lg">{items[2]} - {sum(expenses, "Education")}</div>
                <div className="mb-2 rounded-2xl bg-yellow-100 py-2 pr-2 pl-4 w-full text-lg">{items[3]} - {sum(expenses, "Rent")}</div>
                <div className="mb-2 rounded-2xl bg-green-100 py-2 pr-2 pl-4 w-full text-lg">{items[4]} - {sum(expenses, "Clothes")}</div>
                <div className="mb-2 rounded-2xl bg-slate-100 py-2 pr-2 pl-4 w-full text-lg text-red-600">Total - {totalSum(expenses)}</div>
            </div>
        </div>
    )
}

export default SumAll;