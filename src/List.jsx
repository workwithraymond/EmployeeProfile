import Person from './Person'

const List = ({people, removeOneClick}) => {

    
  return (
    <section>
        {people.map((person) => {
            return(
            <div key={person.id}>
            <Person {...person} />
            <button type='button' className = 'btn' onClick={() => removeOneClick(person.id)}>Remove</button>
            
          </div>
            )
        })}
    </section>
  )
}
export default List