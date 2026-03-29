import AddTaskForm from "./AddTaskForm"
import SearchTaskForm from "./SearchTaskForm"
import Todoinfo from "./Todoinfo"
import Todolist from "./Todolist"

const Todo = () => {
    const tasks = [ 
        {id: 'task-1', title: 'Дописать CreateX', isDone: false},
        {id: 'task-2', title: 'Изучить React', isDone: true},
    ]

    return(
        <div className="todo">
            <h1 className="todo__title">To Do List</h1>
            <AddTaskForm />
            <SearchTaskForm />
            <Todoinfo 
                total={tasks.length}
                done={tasks.filter(({ isDone }) => isDone).length}
            />
            <Todolist tasks={tasks} />
    </div>
    )
}

export default Todo