
import Tab from './Components/Tab';
import Header from './Components/Header';
import Filter from './Components/Filter';
import { Table } from 'react-bootstrap';
import TableData from './Components/TableData';

function App() {
  return (
    <div className="App">
       <Header/>
       <div className='main-content'>
       <Tab/>
       <Filter/>
       <TableData/>
       </div>  
    </div>
  );
}

export default App;
