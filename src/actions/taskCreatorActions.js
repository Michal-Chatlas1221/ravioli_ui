import {
  SUBMIT_NEW_TASK,
} from './actionTypes'

import customHeaderFetch from '../helpers/fetch'

export const taskCreateAction = (data) => ({
  data: data,
  type: SUBMIT_NEW_TASK
})

export const createAndSaveTask = (form, token) =>
  dispatch => {
    customHeaderFetch('http://localhost:4000/api/jobs', { method: "POST", body: JSON.stringify(form)}, token, (data) => { console.log("success") }, (data) => { console.log("error") }) 
};