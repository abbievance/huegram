import { useState } from 'react'
import Hue from './Hue'

interface Props{
    addHue: (color:string)=> void
}

const PostHue = (props:Props) => {
  const[color, setColor] = useState('')

  const[value, setValue] = useState('');

  return (
    <div className='flex flex-row p-4 justify-evenly gap-8'>

        <div className='flex flex-col w-full p-4 gap-4 justify-center align-middle'>
            <input type="text" name="hue" id="hue" value={value} onChange={ (event) => {setColor(event.target.value), setValue(event.target.value) }}  className='rounded-lg p-2'/>
            <button onClick={ () => {props.addHue(color), setColor(""), setValue("")}  } className="btn bg-slate-800 border-white border-2 text-white  text-center rounded-lg p-1">Post</button>
        </div>

        <div className='h-52'><Hue hue={ {color, username:"kavery", likes:3}} /></div>

    </div>
  )
}

export default PostHue