const Person = ({id,image, name , age, profession}) => {
  return (
    <article  className="person">
        <img src={image} alt={name} style={{marginTop: '1rem'}}/>
       <div key={id}>
       <h4>{name}</h4>
       <p>{profession}</p>
        <p style={{marginTop: '1rem'}}>{age} Years</p>
       </div>
    </article>
  )
}
export default Person