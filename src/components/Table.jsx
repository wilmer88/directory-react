const firstName = ["lisa", "coddy", "felix", "vegeta"];
const lastName = ["stiller", "luz", "lucas", "prince"];
const email = ["vegeta@gmail.com", "bill@gmail.com"]

const Table = () => {
    return (
        <div>
            <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
    <th scope="col">{firstName[3]}</th>
    <th scope="col">{lastName[3]}</th>
    <th scope="col">{email[1]}</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
    <td>{firstName[2]}</td>
      <td>Otto</td>
      <td>@mdo</td>
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
        </div>
    );
};

export default Table;