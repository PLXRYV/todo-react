import { useContext } from 'react'
import AddTaskForm from "../AddTaskForm/AddTaskForm"
import SearchTaskForm from "../SearchTaskForm/SearchTaskForm"
import Todoinfo from "../Todoinfo/Todoinfo"
import Todolist from "../Todolist/Todolist"
import Button from "../Button/Button"
import { TasksContext } from '../../context/TasksContext'
import styles from './Todo.module.scss'

const Todo = () => {
    const { firstIncompleteTaskRef } = useContext(TasksContext)

    return(
    <div className={styles.todo}>
        <h1 className={styles.title}>To Do List</h1>
        <AddTaskForm styles={styles} />
        <SearchTaskForm styles={styles} />
        <Todoinfo styles={styles} />
        <Button 
            onClick={() => firstIncompleteTaskRef.current?.scrollIntoView( { behavior: 'smooth'} )}
        >
            Show first incomplete task
        </Button>
        <Todolist styles={styles} />
    </div>
    )
}

export default Todo