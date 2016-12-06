import {
  SUBMIT_NEW_TASK
} from '../actions/actionTypes'

const initialState = []

const tasks = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_NEW_TASK:
      return [...state, action.data]
    default:
      return state
  }
}

export default tasks