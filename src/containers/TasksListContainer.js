import { connect } from 'react-redux'
import TasksList from '../components/TasksList'
import { fetchTasksList } from '../actions/taskCreatorActions'

const TasksListContainer = connect(
	state => ({ tasks: state.tasks, token: state.auth.currentUser.token }),
	dispatch => ({
		fetchTasks(token) {
			dispatch(fetchTasksList(token))
		}
	})
)(TasksList)

export default TasksListContainer