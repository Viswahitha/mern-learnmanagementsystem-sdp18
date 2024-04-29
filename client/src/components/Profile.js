import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Profile() {
  const [result, setResult] = useState(null);

  useEffect(() => {
    // Use useEffect to make the API call when the component mounts
    axios.get('http://localhost:8081/show')
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setResult(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
        setResult([]); // Set an empty array in case of an error
      });
  }, []); // The empty dependency array ensures that the effect runs only once when the component mounts

  if (result === null) {
    return (
      <div>
        Loading...
      </div>
    );
  } else if (Array.isArray(result)) {
    return (
      <div>
        The User data is given below
        <table border="1" align='center'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {result.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  } else {
    return (
      <div>
        There is no data to display
      </div>
    );
  }
}
