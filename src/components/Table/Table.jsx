import React from 'react';

const Table = (props) => {
  return (
    <div>
         <table class="table">
<thead>
  <tr>
    <th scope="col">Employee Department</th>
  <th scope="col">First Name</th>
  <th scope="col">Last Name</th>
  <th scope="col">email</th>
  </tr>
</thead>
<tbody>
  <tr>
  <th scope="row">{props.id}</th>
  <th scope="firstName">{props.firstName}</th>
  <th scope="lastName">{props.lastName}</th>
  <th scope="email">{props.email}</th>
  </tr>
  {/* <tr>
  <th scope="row">{props.id}</th>
  <th scope="firstName">{props.firstName}</th>
  <th scope="lastName">{props.lastName}</th>
  <th scope="email">{props.email}</th>
  </tr>
  <tr>
    <th scope="row">3</th>
    <td>Larry</td>
    <td>the Bird</td>
    <td>@twitter</td>
  </tr> */}
</tbody>
</table>
    </div>
  );
};

export default Table;