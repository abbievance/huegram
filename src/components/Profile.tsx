import HueObject from "../HueObject"

interface Props {
  userHues: HueObject[];
}


const Profile = (props: Props) => {
  return (
    <div className='flex flex-col border-2 p-4 sm:p-8 items-center text-white justify-between'>

        <h1 className='text-3xl sm:text-4xl'>@kavery</h1>

      <div className="flex flex-col justify-center items-center">
          <h1 className='text-2xl sm:text-3xl opacity-80'>Your Palette</h1>

          {/* ignore this horrible code */}
          <div className="flex flex-wrap p-5 pr-3 gap-2 h-48 aspect-square overflow-y-hidden">
              {props.userHues.map((hue) => (
                <div className="h-3 w-3" style={{backgroundColor: `${hue.color}`}}></div>
              ))}
          </div>
        </div>


        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-7xl sm:text-8xl'>86</h1>
          <h2 className='text-3xl sm:text-4xl opacity-80'>Likes</h2>
        </div>

        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-7xl sm:text-8xl'>47</h1>
          <h2 className='text-3xl sm:text-4xl opacity-80'>Hues</h2>
        </div>


    </div>
  )
}

export default Profile