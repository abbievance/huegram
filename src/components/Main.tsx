import Hue from './Hue'
import HueObject from '../HueObject'

interface Props {
    hues: HueObject[],
    toggleLike: (id:number) => void;
}

const Main = (props : Props) => {
  return (
    <div className='flex flex-wrap w-full justify-center gap-8 overflow-y-auto'>


        {props.hues.map(  (hue) => ( 
            
            <Hue hue={hue} toggleLike={props.toggleLike}/>
       ))}

        

    </div>
  )
}

export default Main