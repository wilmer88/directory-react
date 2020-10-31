import './App.css';
import  Navbar from "./components/Navbar/Navbar";
import Table from "./components/Table/Table";
import Wrapper from "./components/wrapper/wrapper";
import Searchbar from "./components/SearchBar/Searchbar.jsx"



function App() {
  return (
    <div className="App">
      
     <Navbar />
     <Wrapper>
       <Searchbar />
          <Table  />
       
     
     </Wrapper>
     
     
    </div>
  );
}

export default App;
