import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import SearchBar from './SearchBar';
import AddSchedule from './AddSchedule';



const Filter = () => {
    const style={
        width: "100%",
height: "38px",
padding: "24px 56px 31px 24px",
flexWrap:"wrap",
justifyContent:"space-between"
    }
  return ( 
    <Navbar style={style}>
        <SearchBar/>
        <AddSchedule/>
  </Navbar>
  )
}

export default Filter