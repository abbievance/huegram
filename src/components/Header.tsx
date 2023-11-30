import PostHue  from './PostHue'
import { IoIosSearch } from "react-icons/io";
import { RiHashtag } from "react-icons/ri";


interface Props {
    addHue: (color:string) => void
}

const Header = (props : Props) => {
  return (
    <>
    <div className="flex flex-col text-white justify-between w-3/4 m-auto text-3xl md:flex-row">
        <div className='flex mt-2 justify-center items-center'>
            <h1><RiHashtag /></h1>
            <h1>Huegram</h1>
        </div>
        
        <div className='flex mt-2'>
            <input type="text" name="search" id="search" className='text-slate-800 rounded-md' />
            <h1 className='cursor-pointer ml-2'><IoIosSearch /></h1>
        </div>

    </div>
    <div className='flex justify-center align-middle'>
        <PostHue addHue={props.addHue}/>
    </div>
    </>
    
  )
}

export default Header