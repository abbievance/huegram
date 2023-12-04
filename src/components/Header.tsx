import PostHue  from './PostHue'
import { IoIosSearch } from "react-icons/io";
import { RiHashtag } from "react-icons/ri";


interface Props {
    addHue: (color:string) => void
}

const Header = (props : Props) => {
  return (
    <>
    <div className="flex flex-col text-white justify-between w-full px-0 text-4xl lg:flex-row md:px-24">
        <div className='flex mt-2 justify-center items-center'>
            <h1 className='text-center'><RiHashtag /></h1>
            <h1 className='text-center'>Huegram</h1>
        </div>
        
        <div className='flex mt-2 justify-center'>
            <input type="text" name="search" id="search" className='text-slate-800 rounded-lg w-1/2 lg:w-full' />
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