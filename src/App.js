import './App.css';
import  Navbar from "./components/Navbar";
import Table from "./components/Table";
import Wrapper from "./components/wrapper/wrapper";

function App() {
  return (
    <div className="App">
      <Wrapper>
     <Navbar />
     <Table />
     </Wrapper>
    </div>
  );
}

export default App;
