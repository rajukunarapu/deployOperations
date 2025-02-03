import {useState,useEffect} from 'react'

const Backend_URL = import.meta.env.VITE_BACKEND_URL;

const App = ()=>{

    const [data,setData] = useState('');

    useEffect(()=>{
        getData()
    },[])

    const getData = async()=>{
        const res = await fetch(`${Backend_URL}/`)
        const data = await res.json()
        setData(data)
    }

    return(
        <>
            <h1>Getting the data from the server</h1>
            <h1>{data}</h1>
        </>
    )
}

export default App;