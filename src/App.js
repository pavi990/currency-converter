import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import ConverterCard from './components/ConverterCard';
import TableCard from './components/TableCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [tableData, setTableData] = useState([]);

  const addEntry = (newEntry) => {
    let table = tableData;
    if(table.length === 5){
      table.shift()
    }
    table.push(newEntry)
    setTableData([...table])
  }

  return (
    <>
      <Header />
      <Container>
          <ConverterCard addData={addEntry} />
          <TableCard data={tableData} />
      </Container>
    </>
  );
}

export default App;
