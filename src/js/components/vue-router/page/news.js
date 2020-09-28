import React from 'react'

export default function News(props){
  function go(page){
    props.history.push(page)
  }
  return(
    <>
      12321321321
      <p onClick={()=>{go('/VueRoter/news/details')}}>进入详情</p>
      {
        props.children
      }
    </>
  )
}
