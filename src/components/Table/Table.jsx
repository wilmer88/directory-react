const employeeDirectory= [
  {
    firstName: "vegeta",
    lastName: "prince",
    email: "vegeta@gmail.com"
  },
  {
    firstName: "felix",
    lastName: "gracia",
    email: "felix@gmail.com"
  },
  {firstName: "ben",
  lastName: "Askren",
  email: "bem@gmail.com"
}
]

{employeeDirectory.map((empliado) => (
  console.log(empliado)
))}

const Table = () => {
    return (
      
      
     
        
   <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
    <th scope="col">First Name</th>
    <th scope="col">Last Name</th>
    <th scope="col">email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th id="uno" scope="row">1</th>
    <td>{}</td>
      <td>{}</td>
    <td>{}</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
        
        
    );
};

export default Table;