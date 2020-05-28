import React, { useState, useEffect} from "react"
import { getAllData } from './service' 


function UseAllData(pageindex,pagesize){
    const [ data, setData ] = useState({})
    useEffect(()=>{
        getAllData('/news/joke',{pageindex,pagesize}).then(res=>{
            console.log(res)
            setData(res.data)
        })
    },[pageindex,pagesize])
    return data
}

export default UseAllData