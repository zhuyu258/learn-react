import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import Task from './Task'

//类组件继承PureComonent 实现纯组件
class TaskList extends PureComponent {
  static propTypes = {
    list: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      isFinished: PropTypes.bool.isRequired
    })).isRequired
  }
  render() {
    console.log('taskList组件render ')
    const { list } = this.props
    const items = list.map((item,i)=>{
      return <Task
                key={i} name={item.name} isFinished={item.isFinished} />
    })
    return (
      <ul>
        {items}
      </ul>
    );
  }
}

export default TaskList;
