import React, { Component } from 'react';
import Search from '../component/search'
import Table from '../component/table'
import { useState,useEffect } from 'react'
import Service from '../service/service'

function StuList(props) {

  const [movies,setMovies] = useState([])
  useEffect(()=>{
    Service.fetchAllMovies({'city':'上海','count':10,'start ':0,'apikey':'0b2bdeda43b5688921839c8ecb20399b'}).then((data)=>{
      console.log(data)
    })
  },[])


  const search = (val) => {
    console.log(val)
  }


  return (
    <React.Fragment>
      <div>学生列表页</div>
      <Search search={search} defineSearch={{key:'',sex:0}}/>
      <Table list={movies} />
    </React.Fragment>
  );
}

export default StuList;
