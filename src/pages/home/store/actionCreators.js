import { constants } from './index'
import axios from 'axios'

const changeHomeData = (result) => {
  return {
    type: constants.INIT_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList,
  }
}

const getMoreList = (list) => {
  return {
    type: constants.LOAD_MORE_LIST,
    list,
  }
}

export const initHomeDataAction = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      const result = res.data.data
      dispatch(changeHomeData(result))
    })
  }
}

export const loadMoreList = () => {
  return (dispatch) => {
    axios.get('/api/homeList.json').then((res) => {
      const result = res.data.data
      dispatch(getMoreList(result))
    })
  }
}
