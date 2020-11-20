import axios from 'axios'
import { constants } from './index'

export const setDetailAction = (data) => {
  return {
    type: constants.INIT_DETAIL,
    title: data.title,
    content: data.content,
  }
}

export const initDetailAction = () => {
  return (dispatch) => {
    axios
      .get('/api/detail.json')
      .then((res) => {
        const data = res.data.data
        dispatch(setDetailAction(data))
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
