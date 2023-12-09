import Hue from './Hue'
import HueObject from '../HueObject'
import { IoIosSearch } from "react-icons/io";
import { RiHashtag } from "react-icons/ri";
import { useState } from 'react';

interface Props {
    hues: HueObject[],
    toggleLike: (id:number) => void;
}

const Main = (props : Props) => {

  const [searchHue, setSearchHue] = useState('');
  const [filteredHues, setFilteredHues] = useState(props.hues);

  const searchCondition = () => {
    if (searchHue.length > 0){
      return true;
    } 
    else{
      return false;
    }
  }

  const filterHues = () => {
    const filteredHues = props.hues.filter((hue) =>
    hue.color.toLowerCase().includes(searchHue.toLowerCase())
    );

    setFilteredHues(filteredHues);
  }

  return (
    <div className='flex flex-col justify-start items-center border-l-2 border-r-2 w-3/4'>
      <div className="flex flex-col sm:flex-row fixed w-1/2 justify-between items-center  mt-2">

        <div className='flex mt-2 justify-center items-center text-white text-4xl'>
            <h1 className='text-center'><RiHashtag /></h1>
            <h1 className='text-center'>Huegram</h1>
        </div>

        <div className='flex mt-2 justify-center items-center w-full sm:w-1/4'>
            <input type="text" placeholder='Search Hues...' name="search" id="search" className='text-slate-800 rounded-lg p-1' value={searchHue}
            onChange={(e) => {
              setSearchHue(e.target.value), filterHues()
            }} />
            <button className='cursor-pointer ml-2 text-white text-3xl'><IoIosSearch /></button>
        </div>
      </div>
   
      <div className='flex flex-wrap w-full justify-center gap-8 overflow-y-auto mt-20'>
        <div>
              {searchCondition() ? <div className='flex flex-wrap gap-8 justify-center'> 
                  {filteredHues.map(  (hue) => (          
                  <Hue hue={hue} toggleLike={props.toggleLike}/>
                ))}</div> : 
                 <div className='flex flex-wrap gap-8 justify-center'> 
                  {props.hues.map(  (hue) => ( 
                  
                  <Hue hue={hue} toggleLike={props.toggleLike}/>
                ))}
                  </div>}
        </div>


        

      </div>
    </div>
  )
}

export default Main