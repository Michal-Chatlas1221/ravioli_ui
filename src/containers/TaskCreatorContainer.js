import { connect } from 'react-redux'
import { taskCreateAction } from '../actions/taskCreatorActions'
import TaskCreator from '../components/TaskCreator'

const TaskCreatorContainer = connect(
	(e) => ({}),
	dispatch => ({
		submitTaskForm: (data) => dispatch(taskCreateAction(data))
	})
)(TaskCreator)

export default TaskCreatorContainer