import { v4 } from "uuid";
import { Expenses } from "components/Render";

const Data : Expenses[] = [
    {
        newTime: "1200",
        option: "Clothes",
        date:"12 February 2022",
        value: "-",
        id: v4()
    },
    {
        newTime:"10050",
        option:"Cashback",
        date:"30 May 2022",
        value: "+",
        id: v4()
    },
    {  
        newTime:"6000",
        option:"Education",
        date:"14 May 2022",
        value: "-",
        id: v4()
    }
];  //моковые данные

export default Data;