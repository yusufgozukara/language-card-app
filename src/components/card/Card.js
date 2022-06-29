

const Card = ({name, img, options}) => {



  return (
    <div  className="minicard">
        <img src={img} alt="logoimage" />
        
        <p>{name}</p>
        
        <ul>
            {options.map((item) => {
                return <li>{item}</li>
            })}
        </ul>
    </div>
  )
}

export default Card