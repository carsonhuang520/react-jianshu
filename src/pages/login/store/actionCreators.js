import axios from 'axios'
import { constants } from './index'

const setLoginAction = (value) => {
  return {
    type: constants.LOGIN,
    value,
  }
}

export const login = (account, password) => {
  return (dispatch) => {
    axios
      .get('/api/login.json?account=' + account + '&password=' + password)
      .then((res) => {
        dispatch(setLoginAction(res.data.data))
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export const logout = (value) => {
  return {
    type: constants.LOGOUT,
    value,
  }
}
