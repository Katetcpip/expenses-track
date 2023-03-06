import { items } from "components/Forms";
import Diagram from "components/Diagram";

function SumAll({expenses}){

    let CurrencyFormat = require('react-currency-format');

    function sum(expenses, znak){
        let newArr = expenses.filter(item => item.option === znak);
        let sumFood = 0;
        newArr.map(filteredItem =>{
            return(sumFood = Number(filteredItem.newTime) + sumFood)
        });
        let itog = <CurrencyFormat value={sumFood} displayType={'text'} thousandSeparator={true} suffix={',00 ₽'} />
        return(itog)
    }

    function totalSum(expenses){
        let sumTotal=0;
        expenses.map(filteredItem =>{
            return(sumTotal = Number(filteredItem.newTime) + sumTotal)
        })
        let itog = <CurrencyFormat value={sumTotal} displayType={'text'} thousandSeparator={true} suffix={',00 ₽'} />
        return(itog)
    }

    return(

        <div className="flex lg:flex-row flex-col w-full justify-between">  
            <div id="diagram" className="flex justify-center items-center lg:mb-0 mb-4 lg:w-1/2 w-full -ml-4">
                    <Diagram expenses={expenses} sum={sum}/>
            </div>

                <div className="flex flex-col items-start lg:w-1/2 w-full">
                    <div className="mb-2 rounded-2xl bg-blue-100 py-2 pr-2 pl-4 w-full lg:text-2xl text-lg">{items[0]} - {sum(expenses, "Food")} </div>
                    <div className="mb-2 rounded-2xl bg-violet-100 py-2 pr-2 pl-4 w-full lg:text-2xl text-lg">{items[1]} - {sum(expenses, "Entertainment")}</div>
                    <div className="mb-2 rounded-2xl bg-pink-100 py-2 pr-2 pl-4 w-full lg:text-2xl text-lg">{items[2]} - {sum(expenses, "Education")}</div>
                    <div className="mb-2 rounded-2xl bg-yellow-100 py-2 pr-2 pl-4 w-full lg:text-2xl text-lg">{items[3]} - {sum(expenses, "Rent")}</div>
                    <div className="mb-2 rounded-2xl bg-green-100 py-2 pr-2 pl-4 w-full lg:text-2xl text-lg">{items[4]} - {sum(expenses, "Clothes")}</div>
                    <div className="mb-2 rounded-2xl bg-slate-100 py-2 pr-2 pl-4 w-full lg:text-2xl text-lg text-red-600">Total - {totalSum(expenses)}</div>
                </div>
        </div>
    )
}

export default SumAll;