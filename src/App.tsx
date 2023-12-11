import Main from './components/Main'
import Profile from './components/Profile'
import Post from './components/Post'
import { useState, useEffect } from 'react'
import HueObject from './HueObject'
import userProfileObject from './userProfileObject'

function App() {

  const [hues, setHues] = useState<HueObject[]>([]);

  const [userProfile, setUserProfile] = useState<userProfileObject[]>([]);

  useEffect( ()=>
  {
    fetch('./userInfo.json')
    .then( res => res.json() )
    .then( data => setUserProfile(data) ) 
  }, [])

  useEffect( ()=>
  {
    fetch('./sampleData.json')
    .then( res => res.json() )
    .then( data => setHues(data) ) 
  }, [])


  const addNewHue = (color:string ) => 
  {
      console.log(color)
      const newHue = {color, username: userProfile[0].username, id: hues.length + 1 , likes:0, isLiked: false};
      setHues( [newHue, ...hues ] );
      const updatedUserHues = {
        ...userProfile[0], hues: [
          ...userProfile[0].hues, newHue
        ]
      }
      setUserProfile([updatedUserHues])


  }

  
  const toggleLike = (id:number) =>
  {
    const newHues = [...hues];
    const hue = newHues.find(h => h.id == id);
    if (hue){
      hue.isLiked = !hue.isLiked;
      hue.isLiked ? hue.likes += 1 : hue.likes -= 1;
      setHues(newHues)
    }

    if (hue != undefined){
      const userHue = userProfile[0].hues.includes(hue)
      if ( userHue && hue.isLiked){
        const newLikes = userProfile[0].likes + 1;
        const updatedUserHues = {
          ...userProfile[0], likes: newLikes
        }
        setUserProfile([updatedUserHues])
      }
      if (userHue && !hue.isLiked){
        const newLikes = userProfile[0].likes - 1;
        const updatedUserHues = {
          ...userProfile[0], likes: newLikes
        }
        setUserProfile([updatedUserHues])
      }      
    }



  }

  return (
    <div className='flex bg-gradient-to-b from-slate-800 to-sky-700 h-screen overflow-x-hidden'>
      {/* <Menu /> */}
      <Post addHue = {addNewHue}/>

      <Main hues={hues} toggleLike={toggleLike}/>


      <Profile userProfile={userProfile} />
    </div>
  )
}

export default App
