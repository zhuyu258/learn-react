import React, { PureComponent } from 'react';
import TaskList from './TaskList'
import AddTask from './addTask'

class TaskContainer extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      tasks: []
    }
  }

  componentDidMount(){
    let arr = []
    for(let i = 0; i < 10; i++){
      arr.push({
        name: `任务${i}`,
        isFinished: Math.random() > 0.5
      })
    }
    this.setState({
      tasks: arr
    })
  }

  render() {
    console.log('container的render执行，数组长度:'+this.state.tasks.length)
    const { tasks } = this.state
    return (
      <div>
        <AddTask addBtn={
          (val)=>{
            this.setState({
              tasks:[
                ...this.state.tasks,
                val
              ]
            })
          }
        }/>
        <TaskList list={tasks} />
      </div>
    );
  }
}

export default TaskContainer;
