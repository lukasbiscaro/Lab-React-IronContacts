import './App.css';
import { useState } from 'react'
import contactsDB from './contacts.json'

function App() {

  const firstFiveContacts = contactsDB.slice(0, 5)

  const [contacts, setContacts] = useState(firstFiveContacts)

  const addRandomContact = () => {
    const randomIndex = Math.floor(Math.random() * contactsDB.length)
    const randomContact = contactsDB[randomIndex]
    let contactsCopy = [...contacts]
    if (!contactsCopy.includes(randomContact)) {
      contactsCopy.push(randomContact)
    }
    setContacts(contactsCopy)
  }

  const sortByPopularity = () => {
    let contactsCopy3 = [...contacts]
    const sortedPopularity = contactsCopy3.sort((a, b) => {
      if (a.popularity < b.popularity) return 1
      return -1
    })

    setContacts(sortedPopularity)
  }

  const sortByName = () => {
    let contactsCopy2 = [...contacts]
    const sortedName = contactsCopy2.sort((a, b) => {
      if (a.name > b.name) return 1
      return -1
    })

    setContacts(sortedName)
  }

  const deleteContact = contactID => {
    const sortedContact = contacts.filter(contact => {
      return contact.id !== contactID
    })

    setContacts(sortedContact)

  }

  return (
    <div className="App">
      <h1>Iron Contacts</h1>
      <div className="buttons">
        <button onClick={addRandomContact}>Add Random Contact</button>
        <button onClick={sortByPopularity}>Sort by Popularity</button>
        <button onClick={sortByName}>Sort by Name</button>
      </div>
      <table>
        <thead>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
        </thead>
        <tbody>
          {contacts.map(contact => {
            return (
              <tr key={contact.id}>
                <td><img src={contact.pictureUrl} alt="famous img" className='famous-img' /></td>
                <td><b>{contact.name}</b></td>
                <td><b>{contact.popularity.toFixed(2)}</b></td>
                <td>{contact.wonOscar && '🏆'}</td>
                <td>{contact.wonEmmy && '🏆'}</td>
                <button className='button-delete' onClick={() => deleteContact(contact.id)}>Delete Contact</button>
              </tr>
            )
          })}
        </tbody>
      </table>

    </div>
  );
}

export default App;
