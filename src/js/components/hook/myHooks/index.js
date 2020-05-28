import React, { useState } from "react"
import UseAllData from './useAllData'
import "./index.css";

export default function MyHooks(){
    // 页码
    const [ page, setPage ] = useState(1)
    // 一页总数
    const [ pageSize, setPageSize ] = useState(10)
    let count = 0
    let dataList = []

    // 获取数据
    const data = UseAllData(page,pageSize)
    if(data && data.DataStatus){
        count = data.DataStatus.DataTotalCount
    }
    if(data && data.Data){
        dataList = data.Data
    }
    // 下一页
    const nextPage = () => {
        if(page < Math.ceil(count/pageSize)){
            setPage(page+1)
        }
    }

    // 上一页
    const prePAge = () => {
        if(page > 1){
            setPage(page-1)
        }
    }

    return (
        <div className="wrap">
            <ul>
                {
                    dataList.map(item=>{
                        return (
                        <li key={item.Title+Math.random()}>
                            {item.Title}
                        </li>
                        )
                    })
                }
            </ul>
            <button  onClick={nextPage}>下一页</button>
            <button style={  page <= 1 ? { color:'#ccc', cursor: ' not-allowed'} : {}}  onClick={prePAge}>上一页</button>
        </div>
    )
}