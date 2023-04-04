import { itemsExpenses, itemsIncome } from "components/Forms";
import DiagramExpenses from "components/DiagramExpenses";
import { Expenses } from "components/Render";
// import { checkLocalStorage } from "components/Render";

function SumAllExpenses({expenses}){

    let CurrencyFormat = require('react-currency-format');
    function sum(cathegory : string){
        // let expensesNew = checkLocalStorage();
        let expensesNew : Expenses[]= Array.from(expenses)
        let newArr : Array<Expenses> = expensesNew.filter((item : Expenses) => item.option === cathegory);
        let sumFood : number = 0;
        newArr.map((filteredItem : Expenses) =>{
            return(sumFood = Number(filteredItem.newTime) + sumFood)
        });
        let itog : JSX.Element= <CurrencyFormat value={sumFood} displayType={'text'} thousandSeparator={true} suffix={',00 ₽'} />
        return(itog)
    }

    function totalSumExpenses() : JSX.Element{
        // let expensesNew = checkLocalStorage();
        let expensesNew : Expenses[] = Array.from(expenses)
        let arrExpenses = expensesNew.filter(el => el.value === "-")
        let sumTotal : number = 0;
        arrExpenses.map((filteredItem : Expenses)=> {
            return(sumTotal = Number(filteredItem.newTime) + sumTotal)
        })
        let itog : JSX.Element = <CurrencyFormat value = {sumTotal} displayType = {'text'} thousandSeparator = {true} suffix = {',00 ₽'} />
        return(itog)
    }

    return(
        <div className="flex lg:flex-row flex-col w-full justify-between border border-solid border-slate-200 pr-2 lg:pt-4 pt-2">  
            <div id="diagram" className="flex justify-center items-center lg:mb-0 mb-4 lg:w-1/2 w-full -ml-4">
                    <DiagramExpenses sum={sum}/>
            </div>

            <div className="flex flex-col items-start lg:w-1/2 w-full">
            <div className="mb-2 rounded-2xl bg-blue-100 py-1 pr-2 pl-2 w-full text-base">{itemsExpenses[0]} - {sum("Food")} </div>
                <div className="mb-2 rounded-2xl bg-violet-100 py-1 pr-2 pl-2 w-full text-base">{itemsExpenses[1]} - {sum("Entertainment")}</div>
                <div className="mb-2 rounded-2xl bg-pink-100 py-1 pr-2 pl-2 w-full text-base">{itemsExpenses[2]} - {sum("Education")}</div>
                <div className="mb-2 rounded-2xl bg-yellow-100 py-1 pr-2 pl-2 w-full text-base">{itemsExpenses[3]} - {sum("Rent")}</div>
                <div className="mb-2 rounded-2xl bg-green-100 py-1 pr-2 pl-2 w-full text-base">{itemsExpenses[4]} - {sum("Clothes")}</div>
                <div className="mb-2 rounded-2xl bg-slate-100 py-1 pr-2 pl-2 w-full text-base text-red-600">Total - {totalSumExpenses()}</div>
            </div>
        </div>
    )
}

export default SumAllExpenses;