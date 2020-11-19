import * as constants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable'

export const getFocusAction = () => {
  return {
    type: constants.SEARCH_FOCUS,
  }
}

export const getBlurAction = () => {
  return {
    type: constants.SEARCH_BLUR,
  }
}

const getListAction = (data) => {
  return {
    type: constants.GET_LIST,
    data: fromJS(data),
  }
}

export const getHeaderListAction = () => {
  return (dispatch) => {
    axios
      .get('/api/headerList.json')
      .then((res) => {
        const data = res.data
        dispatch(getListAction(data.data))
        console.log('succ')
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
