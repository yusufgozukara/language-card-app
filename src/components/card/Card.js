
import './Card.css'

const Card = ({name, img, options, index}) => {



  return (
    <div  className="minicard" key={index}>
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