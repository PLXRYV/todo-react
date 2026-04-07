import { memo, useContext } from 'react'
import Todoitem from "../Todoitem/Todoitem"
import { TasksContext } from '../../context/TasksContext'

const Todolist = (props) => {
    const { styles } = props
    const {
        tasks,
        filteredTasks,
    } = useContext(TasksContext)

    const hasTasks = tasks.length > 0
    const isEmptyFilteredTasks = filteredTasks?.length === 0

    if (!hasTasks) {
        return <div className={styles.emptyMessage}>There are no tasks yet</div>
    }

    if (hasTasks && isEmptyFilteredTasks) {
                return <div className={styles.emptyMessage}>Tasks not found</div>

    }

    return (
        <ul className={styles.list}>
        {(filteredTasks ?? tasks).map((task) => (
            <Todoitem 
            className={styles.item}
            key={task.id}
            {...task}
            />
        ))}
    </ul>
    )
}

export default memo(Todolist)