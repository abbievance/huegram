import PostHue  from './PostHue'

interface Props {
    addHue: (color:string) => void
}

const Header = (props : Props) => {
  return (
    <>
    <div className="flex flex-col text-white px-0 text-4xl justify-center items-center">

        <div className='flex flex-col h-full justify-around'>
            <PostHue addHue={props.addHue}/>
        </div>
        

    </div>
    </>
    
  )
}

export default Header