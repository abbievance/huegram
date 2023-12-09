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


  const [currentUser] = useState({
    username: "kavery",
    likes: 58,
    hues: [ {id:36, color:'#ffa510', username:"kavery", likes: 15}]
  });

  const addNewHue = (color:string ) => 
  {
      console.log(color)
      const newHue = {color, username: currentUser.username, id: hues.length + 1 , likes:0, isLiked: false};
      setHues( [newHue, ...hues ] );


  }

  const toggleLike = (id:number) =>
  {
    const newHues = [...hues];
    const hue = newHues.find(h => h.id == id);
    if (hue){
      hue.isLiked = !hue.isLiked;
      setHues(newHues)
    }
  }

  return (
    <div className='flex bg-gradient-to-b from-slate-800 to-sky-900 h-screen overflow-x-hidden'>
      {/* <Menu /> */}
      <Post addHue = {addNewHue}/>

      <Main hues={hues} toggleLike={toggleLike}/>


      <Profile userProfile={userProfile} />
    </div>
  )
}

export default App
