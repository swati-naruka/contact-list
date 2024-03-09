import React from "react";
import ContactList from './ContactList'
import { useState, useEffect } from "react";
function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetch('https://jsonplaceholder.typicode.com/users');
              const data = await response.json();
              setUsers(data);
          } catch (error) {
              console.error('Error fetching data:', error);
          }
      };

      fetchData();
  }, []);

  return (
      
          
          <ContactList users={users} />
      
  );
}

export default App;
