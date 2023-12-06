import Hue from './Hue'
import HueObject from '../HueObject'
import { IoIosSearch } from "react-icons/io";
import { RiHashtag } from "react-icons/ri";

interface Props {
    hues: HueObject[],
    toggleLike: (id:number) => void;
}

const Main = (props : Props) => {
  return (
    <div className='flex flex-col justify-center items-end'>
      <div className="flex flex-col sm:flex-row justify-around w-full">

        <div className='flex mt-2 justify-center items-center text-white text-4xl'>
            <h1 className='text-center'><RiHashtag /></h1>
            <h1 className='text-center'>Huegram</h1>
        </div>

        <div className='flex mt-2 justify-center items-center w-full sm:w-1/4'>
            <input type="text" placeholder='Search...' name="search" id="search" className='text-slate-800 rounded-lg p-1' />
            <h1 className='cursor-pointer ml-2 text-white text-3xl'><IoIosSearch /></h1>
        </div>
      </div>
   
      <div className='flex flex-wrap w-full justify-center gap-8 overflow-y-auto mt-2'>
              


        {props.hues.map(  (hue) => ( 
            
            <Hue hue={hue} toggleLike={props.toggleLike}/>
        ))}

        

      </div>
    </div>
  )
}

export default Main