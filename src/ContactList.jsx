import React, { useState, useEffect } from 'react';
import Contact from './Contact';
import './contactsList.css';

function ContactList() {
    const [contacts, setContacts] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [newContact, setNewContact] = useState({ name: "", phone: "" });
    
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            setContacts(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewContact(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const contact = { name: newContact.name, phone: newContact.phone };
        const contactExists = contacts.some(c => c.name === newContact.name && c.phone === newContact.phone);
    
    if (!contactExists) {
        setContacts(prevContacts => [contact, ...prevContacts]); // Add new contact at the beginning of the array
        setNewContact({ name: '', phone: '' });
        setShowForm(false);
    } else {
        alert('Contact already exists!');
    }
    };
    const handleDelete = (index) => {
        setContacts(prevContacts => prevContacts.filter((_, i) => i !== index));
      };

    return (
        <div>
            <p>Contact List</p>
            {showForm ? (
                <form onSubmit={handleSubmit}>
                    <label>Name:</label>
                    <input type="text" name="name" value={newContact.name} onChange={handleInputChange}  required />
                    <label>Phone:</label>
                    <input type="text" name="phone" value={newContact.phone} onChange={handleInputChange} required />
                    <button type="submit">Add</button>
                </form>
            ) : (
                <button onClick={() => setShowForm(true)}>Add Contact</button>
            )}
            <div className="contacts-container">
            {contacts.map((contact, index) => (
                <Contact key={index} name={contact.name} phone={contact.phone} 
                onDelete={() => handleDelete(index)} />
            ))}
            </div>
            
        </div>
    );
}

export default ContactList;
