function Button({type, handleClick}) {


    return(
        <button 
            onClick={(event) => handleClick(event)} 
            type={type}
            className="Font bg-orange-600 
            rounded-md lg:py-4 py-3 shadow-sm focus:border-orange-500 
            focus:outline-none focus:ring-1 
            focus:ring-orange-500 sm:text-sm 
            hover:bg-pink-600
            md:w-1/6 w-full cursor-pointer
            text-white text-center"
            > Add</button>
    );
}

export default Button;