import { useState } from 'react';
import './App.css';

function App() {
  const [addnotes, setaddnotes] = useState(false)
  const [title, settitle] = useState('write Somthing here.....')
  const [list, setlist] = useState([])
  let addNote = () => {
    setaddnotes(true)
    // console.log(title)
    setlist([...list, { title:title }]); 
    settitle('')
    console.log(list)
  }
  let Delete=(index)=>{
     let res = list.splice(index,1)
     setlist([...list, { title:title }])
  }
  return (
    <>
      <div class="btn">
        <div class="heading">
          <h1 >Note Taking Application</h1><br /><br />
          {addnotes ?
            <div id='myinput'>
              <input
                type="text"
                id="title" value={title} onChange={(e) => settitle(e.target.value)}
                placeHolder="Add title"
              ></input>
              <div style={{ marginTop: "100px",width:"22rem",background:"white",height:"300px",color:"black" }}>
                {list.map((note, index) => (
                  <table>
                   <tr>
                    <td className='notes'>{note.title}</td>
                   </tr>
                   <tr>
                    <td><button onClick={()=>Delete(index)}>Delete</button></td>
                   </tr>
                   </table>
                ))}
               
              </div>
            </div>
            :
            ''
          }

        </div>
        <button id="addBtn" onClick={addNote}>
          <i class="fas fa-plus"></i>
          Add Note
        </button>
      </div>
      <div id="main">
      </div>
      

    </>
  )
}

export default App;
