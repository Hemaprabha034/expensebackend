import React, {useEffect, useState} from 'react'

function Index() {
    const[data,setdata] = useState("")
     const[data2,setdata2]=useState([])
     function submit(e){
         e.preventDefault()
         setdata2((prevData2) => [...prevData2, data]);
         setdata("")
     }
     return (
         <div>
             <form onSubmit={submit}>
                <label for = "name">Enter name</label>
                <input type = "text" id="name" value={data}  onChange={(e) => setdata(e.target.value)}/>
                <button>enter</button>
             </form>
          
        {data2.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
       
         </div>
     )
}

export default Index