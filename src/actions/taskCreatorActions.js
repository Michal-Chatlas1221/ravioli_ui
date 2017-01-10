import {
  SUBMIT_NEW_TASK,
  TASKS_RECEIVED
} from './actionTypes'

import customHeaderFetch from '../helpers/fetch'

export const taskCreateAction = (data) => ({
  data,
  type: SUBMIT_NEW_TASK
})

export const createAndSaveTask = (form, token) =>
  dispatch => {
    customHeaderFetch('http://localhost:4000/api/jobs', {
     method: "POST",
      body: form
    },
    token,
    (data) => { dispatch(taskCreateAction(data[0])) },
    (data) => { console.log("error") }) 
};

export const tasksReceived = (data) => ({
  data,
  type: TASKS_RECEIVED
})

export const fetchTasksList = (token) =>
  dispatch => {
    customHeaderFetch(
      'http://localhost:4000/api/jobs',
      { method: "GET" },
      token,
      (data) => { dispatch(tasksReceived(data)) },
      (data) => { console.log("error") }
    ) 
  };