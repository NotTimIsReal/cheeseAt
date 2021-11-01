import {useState, useEffect} from 'react'
export default function LoginPage(){
    const [Username, setUser]=useState<String>('')
    const [password, setPassword]=useState<String>('')
    useEffect(()=>{
        console.log(Username)
    }, [Username])
    return (
        <>
        <input onChange={(e)=>{
            if(e.target.value.length==0){
                setUser('empty_string_err')
            }else{
            setUser(e.target.value)   
            }
            console.log(e.target.value.length)   
            }
            }/>
        <span>{Username==='empty_string_err'?'Username Cannot Be Empty':null}</span>
        <br/>
        <input onChange={(e)=>{
            if(e.target.value.length==0){
                setPassword('empty_string_err')
            }else{
            setPassword(e.target.value)   
            }
            console.log(e.target.value.length)   
            }
            }/>
        <span>{password==='empty_string_err'?'password cannot be empty':null}</span>
        <br/>
        <button onClick={()=>{
            
        }}>Signup</button>
        </>
    )
}