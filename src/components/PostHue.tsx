import { useState } from 'react'
import Hue from './Hue'
import { RiHashtag } from 'react-icons/ri'
 
interface Props{
    addHue: (color:string)=> void;
}

const PostHue = (props:Props) => {

  const[color, setColor] = useState('')

  const[value, setValue] = useState('');


  return (
    <div className='flex-col p-4 justify-evenly gap-8 sm:ml-8 ml-6'>

        <div className='flex flex-col p-4 gap-3 justify-center align-middle'>
          <h1 className='text-white text-center text-xl w-full'>Enter a valid hex code</h1>
          <div className='flex items-center gap-1'>
          <h1 className='text-white text-3xl'><RiHashtag /></h1>
            <input type="text" placeholder="ff2c40" name="hue" id="hue" value={value}
             onChange={ (event) => {
              if (event.target.value.length <= 6 || event.target.value.toLowerCase() === ""){
                  setColor(`#${event.target.value.toLowerCase()}`), 
                  setValue(event.target.value.toLowerCase())
                }}}  
                   
              className='rounded-lg w-full text-black text-2xl'/>

          </div>

            <button onClick={ () => {props.addHue(color), setColor(""), setValue("")}  } className="btn bg-slate-800 border-white border-2 text-white  text-center rounded-lg text-2xl">Post</button>
        </div>

        <div className='sm:h-full h-40'><Hue hue={ {color, username:"abbieV", likes:0, id:0, isLiked:false}} /></div>

    </div>
  )
}

export default PostHue

