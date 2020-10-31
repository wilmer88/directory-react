import './App.css';
import  Navbar from "./components/Navbar/Navbar";
import Table from "./components/Table/Table";
import Wrapper from "./components/wrapper/wrapper";



function App() {
  return (
    <div className="App">
      
     <Navbar />
     <Wrapper>
       {employeeDirectory.map(empliado => (
          <Table 
          firstName= {firstName}
          />
       ))}
     
     </Wrapper>
     
     
    </div>
  );
}

export default App;
