import data from './data'
import {useState} from 'react'
import List from './List'


function App() {
  const [people, setPeople] = useState(data)
  const [removedPerson, setRemovedPerson] = useState(null)

  const removeOneClick = (id) => {
    const removedPerson = people.find((person) => person.id === id)
    const newPerson = people.filter((person) => person.id !== id)
     setPeople(newPerson);
     setRemovedPerson(removedPerson)
   } 

   const addAllPeople = () => {
    if(removedPerson) {
      setPeople([...people, removedPerson]);
      setRemovedPerson(null);
    }
  };

const handleClick = () => {
  setPeople([])
}
return(
  <main>
    <section className='container'>
      <h1 style={{textAlign: 'center'}}>{people.length} Employee Profile</h1>
      <List people={people} removeOneClick={removeOneClick} />
      
      
      <button type='button' className='btn btn-block' style={{backgroundColor: 'blue', marginTop: '1rem'}} onClick={handleClick}>Clear All</button>
      
      
      <button type='button' className='btn btn-block' style={{marginTop: '1rem'}} onClick={addAllPeople}> Add</button>
    </section>
    
  </main>
)

}

export default App
