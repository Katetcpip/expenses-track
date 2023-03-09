import uuid4 from "uuid4";

export type Expenses = {
    date : string,
    option : string,
    newTime : string
}

function Render({expenses}){

    let CurrencyFormat = require('react-currency-format');
    return(
        <>
        {expenses.length > 0 && expenses.map((ex : Expenses)  => {
        return(
            <div className="flex flex-col w-full" key={uuid4()}>
            <div className="flex flex-row justify-between border-b border-orange-500 w-full p-4 mb-2 items-end">
                <div className="flex flex-col items-start">
                    <div className="bg-green-200 rounded-2xl m-2 ml-0 px-2 lg:text-xl text-sm text-slate-800">{ex.date}</div>
                    <div className="text-slate-800 lg:text-2xl text-lg">{ex.option}</div>
                </div>
                <div className="text-slate-800 lg:text-2xl text-lg ">
                    - <CurrencyFormat value={ex.newTime} displayType={'text'} thousandSeparator={true} suffix={' ₽'} />
                </div>
            </div>
            </div>  
        )
    })}
       </>
    )
}

export default Render;