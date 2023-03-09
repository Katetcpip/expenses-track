import 'components/App/styles.css';
import Header from 'components/Header';
import Forms from 'components/Forms';


function App() {
    return ( 
    <div className = "flex flex-col lg:w-1/2 w-10/12 m-auto shadow-2xl shadow-red-500/40 rounded-xl lg:pb-10 pb-6 gradient mt-20 mb-20 lg:pr-10 pr-4 lg:pl-10 pl-4 h-fit" >
     <Header />
    <Forms />
 
    </div>
    );
}

export default App;