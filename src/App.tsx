import Main from './components/Main'
import Profile from './components/Profile'
import Header from './components/Header'
import { useState, useEffect } from 'react'

function App() {

  const [hues, setHues] = useState<any[]>([]) // eslint-disable-line @typescript-eslint/no-explicit-any

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

  return (
    <div className='flex bg-slate-800 h-screen overflow-x-hidden'>
      {/* <Menu /> */}
      <div className="flex flex-col">
      <Header addHue = {addNewHue}/>

      <Main hues={hues} />
      </div>


      <Profile />
    </div>
  )
}

export default App
