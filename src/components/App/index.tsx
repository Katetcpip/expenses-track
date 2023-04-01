import 'components/App/styles.css';
import Header from 'components/Header';
import Forms from 'components/Forms';


function App() {
    return ( 
    <div className = "flex flex-col lg:w-1/2 w-10/12 m-auto shadow-md rounded-xl lg:pb-10 bg-white pb-6 mt-20 mb-20 lg:pr-10 pr-4 lg:pl-10 pl-4 h-fit" >
     <Header />
    <Forms />
 
    </div>
    );
}

export default App;