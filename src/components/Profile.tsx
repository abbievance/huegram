import userProfileObject from "../userProfileObject";

interface Props {
  userProfile: userProfileObject[];
}


const Profile = (props: Props) => {
  return (
    <div className='p-4 sm:p-8 text-white sm:block hidden'>

      
              {props.userProfile.map((profile) => (
                <div className="h-full flex">
                  <div className="flex flex-col justify-between items-center">
                    <h1 className='text-3xl sm:text-4xl'>@{profile.username}</h1>
                    <h1 className='text-2xl sm:text-3xl opacity-80 text-center'>Your Palette</h1>
                    <div className="w-52 h-52 border-2 table rounded-full overflow-hidden">
                          {profile.hues.map((hue) => (
                            <div className="table-cell w-3 h-3" style={{backgroundColor: `${hue.color}`}}></div>
                          ))}
                      </div>


                    <div className='flex flex-col justify-center items-center '>
                      <h1 className='text-7xl sm:text-8xl'>{profile.likes}</h1>
                      <h2 className='text-3xl sm:text-4xl opacity-80'>Likes</h2>
                    </div>
            
                    <div className='flex flex-col justify-center items-center'>
                      <h1 className='text-7xl sm:text-8xl'>{profile.hues.length}</h1>
                      <h2 className='text-3xl sm:text-4xl opacity-80'>Hues</h2>
                    </div>
                </div>
              </div>
              ))}
          </div>


  )
}

export default Profile