



const Table = () => {
    return (
      <table class="table">
  <thead>
    <tr>
      <th scope="col">employeeDirectory</th>
    <th scope="col">First Name</th>
    <th scope="col">Last Name</th>
    <th scope="col">email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <th scope="id">{this.props.id}</th>
    <td>{this.props.firstName}</td>
      <td>{this.props.lastName}</td>
    <td>{this.props.email}</td>
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