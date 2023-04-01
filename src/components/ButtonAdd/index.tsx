function Button({type, handleClick, title}) {

    return(
        <button 
            onClick={(event) => handleClick(event)} 
            type={type}
            className="bg-red-600 
            rounded-md lg:py-2 py-2 shadow-sm focus:border-orange-500 duration-300
            sm:text-sm text-sm
            hover:bg-red-700
            md:w-1/6 w-full cursor-pointer
            text-white text-center"
            > {title}</button>
    );
}

export default Button;