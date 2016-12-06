import { connect } from 'react-redux'
import TasksList from '../components/TasksList'

const TasksListContainer = connect(
	state => ({ tasks: state.tasks })
)(TasksList)

export default TasksListContainer