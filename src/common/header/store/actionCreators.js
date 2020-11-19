import * as constants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable'

const getListAction = (data) => {
  return {
    type: constants.GET_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10),
  }
}

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

export const mouseEnterAction = () => {
  return {
    type: constants.MOUSE_ENTER,
  }
}

export const mouseLeaveAction = () => {
  return {
    type: constants.MOUSE_LEAVE,
  }
}

export const changePageAction = (page) => {
  return {
    type: constants.CHANGE_PAGE,
    page,
  }
}

export const getHeaderListAction = () => {
  return (dispatch) => {
    axios
      .get('/api/headerList.json')
      .then((res) => {
        const data = res.data
        dispatch(getListAction(data.data))
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
