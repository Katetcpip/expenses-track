import 'components/Header/styles.css';

function Header(){
    return(
        <div className='flex flex-row w-full justify-center items-center'>
        <img alt='' src='http://www.portaleterzosettore.it/wp-content/uploads/2015/05/contabilità.png' className='lg:h-4/12 lg:w-4/12 h-4/12 w-1/2 md:-mt-18 md:-ml-24 -mt-14 -ml-16'></img>
        <p className="text-zinc-700 font-bold md:text-5xl text-3xl text-start underline w-full pl-4">Expenses</p> 
    </div>
    );
}

export default Header;