import { connect } from 'react-redux'
import { createAndSaveTask } from '../actions/taskCreatorActions'
import TaskCreator from '../components/TaskCreator'

const TaskCreatorContainer = connect(
	(state) => ({ token: state.auth.currentUser.token }),
	dispatch => ({
		submitTaskForm: (form, token) => { dispatch(createAndSaveTask(form, token)) }
	})
)(TaskCreator)

export default TaskCreatorContainer