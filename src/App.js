import logo from './logo.svg';
import './App.css';
import { tableData } from './data';
import TableComponent from './TableComponent';



function App() {
  const columns = [
    { dataKey: "name", title: "Name" },
    { dataKey: "desc", title: "Description" },
    { dataKey: "type", title: "Type" },
    { dataKey: "period", title: "Period" },
    { dataKey: "start", title: "Start" },
    { dataKey: "end", title: "End" },
    { dataKey: "scope", title: "Scope" },
    { dataKey: "budgetStatus", title: "Budget Status" },
    { dataKey: "comments", title: "Comments" },
    { dataKey: "action", title: "Action" },
    { dataKey: "buttons", title: ""}
  ];

  return (
    <div className="App">
      <div className='grid-container'>
        <div>
          <button type="button" className='btn btn-primary'>New Budget</button>
        </div>
        <div>
          <input type={'text'} placeholder="Search here" className='form-control'/>
        </div>
      </div>
      <TableComponent data={tableData} columns={columns} />
    </div>
  );
}

export default App;
