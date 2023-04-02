import uuid4 from "uuid4";
import Data from "components/Data";

export type Expenses = {
    date : string,
    option : string,
    newTime : string,
    value : string,
    id: string
}

function Render({expenses, deleteItem}){

    function checkLocalStorage () {
        let arrData = [];
        (localStorage.getItem('notes') !== null
        ? (arrData = JSON.parse(localStorage.getItem('notes'))) : (arrData = expenses))
        return arrData;
    }
    
    let arrr = checkLocalStorage();

    let CurrencyFormat = require('react-currency-format');
    return(
        <>
       { arrr.map((ex : Expenses) => {
        return(
            <div className="flex flex-col w-full" key={uuid4()}>
                <div className="flex flex-row justify-between border-b border-orange-500 w-full p-4 mb-2 items-end">
                    <div className="flex flex-col items-start">
                        <div className="bg-green-200 rounded-2xl m-2 ml-0 px-2 text-xs text-slate-800">{ex.date}</div>
                        <div className="text-slate-800 text-sm">{ex.option}</div>
                    </div>
                    <div className="flex flex-row gap-2">
                        <div className="text-slate-800 text-sm">
                            {ex.value} <CurrencyFormat value={ex.newTime} displayType={'text'} thousandSeparator={true} suffix={',00 ₽'} />
                        </div>
                        <button
                            className="-mt-1 w-fit h-fit rounded-2xl hover:scale-110 text-red-500 hover:text-red-700 duration-300 px-2 font-bold flex justify-start items-center"
                            onClick={() => deleteItem(ex)}
                        >
                            x
                        </button>     
                    </div>
                </div>
            </div>  
        )
    })}
       </>
    )
}

export default Render;