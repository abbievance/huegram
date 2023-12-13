import { useState } from 'react'
import Hue from './Hue'
import { RiHashtag } from 'react-icons/ri'
 
interface Props{
    addHue: (color:string)=> void;
}

const PostHue = (props:Props) => {

  const[color, setColor] = useState('#f08000');

  const[value, setValue] = useState('');

  const[placeholder, setPlaceholder] = useState("f08000");


  return (
    <div className='flex-col sm:p-8 p-4  justify-evenly items-center gap-8 '>

        <div className='flex flex-col p-4 gap-3 justify-center align-middle'>
          <h1 className='text-[#5A5A5A] text-center text-2xl w-full ml-1'>Enter a hex code</h1>
          <div className='flex items-center gap-1'>
          <h1 className='text-[#5A5A5A] text-3xl'><RiHashtag /></h1>
            <input type="text" placeholder={`${placeholder.replace("#", "")}`} name="hue" id="hue" value={value}
             onChange={ (event) => {
              if (event.target.value.length <= 6 || event.target.value.toLowerCase() === ""){
                  setColor(`#${event.target.value.toLowerCase()}`), 
                  setValue(event.target.value.toLowerCase())
                }}}  
                   
              className='rounded-lg w-full text-black text-2xl'/>

          </div>

            <button onClick={ () => {props.addHue(color), setColor(color), setValue(""), setPlaceholder(color)}  } className="btn border-transparent bg-neutral-900 opacity-80 text-center rounded-lg text-2xl hover:opacity-100">Post</button>
        </div>

        <div className='mt-9'><Hue hue={ {color, username:"abbieV", likes:0, id:0, isLiked:false}} /></div>

    </div>
  )
}

export default PostHue

