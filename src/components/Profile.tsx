import React from 'react'

const Profile = () => {
  return (
    <div className='flex flex-col border-2 p-8 items-center text-white justify-between'>

        <h1 className='text-4xl'>@kodom</h1>

        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-8xl'>86</h1>
          <h2 className='text-4xl opacity-80'>Likes</h2>
        </div>

        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-8xl'>47</h1>
          <h2 className='text-4xl opacity-80'>Hues</h2>
        </div>


    </div>
  )
}

export default Profile