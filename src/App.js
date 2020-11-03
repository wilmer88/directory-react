import React, { Component } from 'react';

import './App.css';
import  Navbar from "./components/Navbar/Navbar";
import Table from "./components/Table/Table";
import Wrapper from "./components/wrapper/wrapper";
import Searchbar from "./components/SearchBar/Searchbar.jsx";
import SearchTable from "./components/Table/SearchTable.jsx";
import Employees from "./Employees.json";



class App extends Component {
  state ={
Employees: Employees
  };
  findPerson = (event) => {
    const {Employees} = event.target;
  }
  render() {
    return (
      <div>
          <div className="App">
     
      
      <Navbar />
      <Searchbar />
     
    <SearchTable />
     
      <Wrapper>

        {this.state.Employees.map((empliado) => (
           <Table 
           id={empliado.id}
           firstName={empliado.firstName}
           lastName={empliado.lastName}
           email={empliado.email}
           />
           

        ))}
        
      </Wrapper>
      

     
     
     </div>
      </div>
    );
  }
}

export default App;



// {this.state.Employees.filter((person) => (
        
//   <SearchTable
//     // id={person.id}
//        // firstName={empliado.firstName}
//        // lastName={empliado.lastName}
//        // email={empliado.email}
//        />
//         ) )}
      