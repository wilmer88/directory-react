import "./wrapper.css";
// import Table from "./components/Table/Table.jsx"

function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

export default Wrapper;