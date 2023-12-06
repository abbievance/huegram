import Main from './components/Main'
import Profile from './components/Profile'
import Header from './components/Header'
import { useState, useEffect } from 'react'
import HueObject from './HueObject'

function App() {

  const [hues, setHues] = useState<HueObject[]>([]);

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
      const newHue = {color, username: currentUser.username, id: hues[hues.length-1].id+1 , likes:0, isLiked: false};
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
      <div className="flex flex-col">
      <Header addHue = {addNewHue}/>

      <Main hues={hues} toggleLike={toggleLike}/>
      </div>


      <Profile />
    </div>
  )
}

export default App
