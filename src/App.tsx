import Main from './components/Main'
import Profile from './components/Profile'
import Post from './components/Post'
import { useState, useEffect } from 'react'
import HueObject from './HueObject'

function App() {

  const [hues, setHues] = useState<HueObject[]>([]);

  const [userHues] = useState([
    {id: 1, color: '#ffa500', username: "kaylee", likes: 15, isLiked:false},
    {id: 2, color: '#ffa500', username: "kaylee", likes: 15, isLiked:false},
    {id: 3, color: '#ff8c00', username: "therealkaylee", likes: 8, isLiked:false},
    {id: 4, color: '#ff7f50', username: "odomester", likes: 20, isLiked:false},
    {id: 5, color: '#ff6347', username: "kaylee", likes: 200, isLiked:false},
    {id: 6, color: '#ff6747', username: "abbieV", likes: 13, isLiked:false},
    {id: 7, color: '#ff6747', username: "abbieV", likes: 13, isLiked:false},
  ]);

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
      <Post addHue = {addNewHue}/>

      <Main hues={hues} toggleLike={toggleLike}/>


      <Profile userHues={userHues} />
    </div>
  )
}

export default App
