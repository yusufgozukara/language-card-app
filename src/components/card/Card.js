
import { useState } from 'react'
import './Card.css'

const Card = ({name, img, options, index}) => {

    const [langu, setLangu] =useState(true);



  return (
    <div  className="minicard" key={index}  onClick={() => setLangu(!langu)}>
        {langu ? 
        <div className='minicard2'>
        <img className='logoimage' src={img} alt="logoimage" />
        <p>{name}</p>
        </div>
        : 
        <ul>
            {options.map((item) => {
                return <li>{item}</li>
            })}
        </ul>
        }
        
    </div>
  )
}

export default Card