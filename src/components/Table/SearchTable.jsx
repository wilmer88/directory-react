import React from 'react';

const SearchTable = (props) => {
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
  <th scope="firstName">"</th>
  <th scope="lastName">""</th>
  <th scope="email">""</th>
  </tr>
  
</tbody>
</table>
            
        </div>
    );
};

export default SearchTable;