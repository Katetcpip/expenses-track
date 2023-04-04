function Button({type, onClick, title}) {

    return(
        <button 
            onClick={(event) => onClick(event)} 
            type={type}
            className="rounded-md lg:py-2 py-2 hover:shadow-md duration-300
            sm:text-sm text-sm
            font-semibold
            hover:bg-slate-100
            md:w-fit md:px-2 w-full cursor-pointer
            text-red-600 text-center"
            > {title}</button>
    );
}

export default Button;