import React from 'react';
import AddTask from '../AddTask';
import TodoLists from '../TodoLists'

class MyTask extends React.Component {
    render() {
        return (
            <div class="InputTasksForm">
                <AddTask />
                <TodoLists />
            </div>
        )
    }
}

export default MyTask;