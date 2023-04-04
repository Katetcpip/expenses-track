import { Expenses } from "components/Render";

function ButtonFilters({setExpenses, title}){

    const showCathegories = (title : string) : void => {
        (title === 'Income') 
            ? (filter('Income'))             
            : (title === 'Expenses') 
                ? (filter('Expenses'))
                : (setExpenses(JSON.parse(localStorage.getItem('notes')))) 
        }

    const newItem : Expenses[] = JSON.parse(localStorage.getItem('notes'))
    const filter = (value : string) => {
       let a : string;
       value === 'Expenses' ? a='-' : a='+'
       let new1 = newItem.filter(el => el.value === a)
       setExpenses(new1)
    }
    
    return(
        <button 
            className="buttonFilter hover:bg-slate-100"
            onClick={() => showCathegories(title)}
            >{title}</button>
    )
}

export default ButtonFilters;