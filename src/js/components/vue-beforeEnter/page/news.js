import React from 'react'

export default function News(props){
  function go(page){
    console.log(props)
    const prevpathname = props.location.pathname
    props.history.push(page)
    props.history.listen((location,msg)=>{
      console.log(`从${prevpathname}进入${location.pathname}`)
    })
  }
  return(
    <>
      12321321321
      <p onClick={()=>{go('/VueBeforeEnterRoter/news/details/666')}}>进入详情</p>
      {
        props.children
      }
    </>
  )
}
