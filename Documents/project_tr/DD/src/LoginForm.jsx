import React from 'react'
import {useState} from 'react'


function LoginForm(){
    const[data,setdata] = useState("")
    const[data2,setdata2]=useState("")
    function submit(){
        e.preventDefault()
        setdata2(data2)
    }
    return (
        <div>
            <form onSubmit={submit}>
                <input value={data} onChange={(e) => setdata(e.target.value)}/>
                 <button>enter</button>
            </form>
            <p>{data2}</p>
        </div>
    )

}
export default LoginForm;

