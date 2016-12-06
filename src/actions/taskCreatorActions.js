import {
  SUBMIT_NEW_TASK,
} from './actionTypes'

export const taskCreateAction = (data) => ({
  data: data,
  type: SUBMIT_NEW_TASK
})