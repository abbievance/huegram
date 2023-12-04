import Hue from './Hue'
import HueObject from '../HueObject'

interface Props {
    hues: HueObject[],
}

const Main = (props : Props) => {
  return (
    <div className='flex flex-wrap w-full justify-center gap-8 overflow-y-auto'>


        {props.hues.map(  (hue) => ( 
            
            <Hue hue={hue}/>
       ))}

        

    </div>
  )
}

export default Main