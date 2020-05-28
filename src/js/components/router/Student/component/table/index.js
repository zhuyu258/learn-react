import React, { Component } from 'react';

function Table(props){

    const trs = props.list.map((item)=>{
      return <tr>
        <td>item.name</td>
      </tr>
    })

    return (
      <table>
        <thead>
          <tr>
            <th>学号</th>
            <th>姓名</th>
            <th>性别</th>
            <th>出身日期</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    );
}

export default Table;
