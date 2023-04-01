import 'components/Header/styles.css';

function Header(){
    return(
        <div className='flex flex-row w-full justify-center items-center mb-8 relative'>
        {/* <img alt='' src='http://www.portaleterzosettore.it/wp-content/uploads/2015/05/contabilità.png' className='lg:h-2/12 lg:w-2/12 h-4/12 w-1/2 absolute -right-8'></img> */}
        <p className="text-zinc-700 font-bold md:text-3xl text-xl text-start w-full pt-4">Tracker</p> 
    </div>
    );
}

export default Header;