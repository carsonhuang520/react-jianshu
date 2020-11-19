import { fromJS } from 'immutable'

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
})

const reducer = (state = defaultState, action) => {
  if (action.type === 'init_home_data') {
    return state.merge({
      topicList: fromJS(action.topicList),
      articleList: fromJS(action.articleList),
      recommendList: fromJS(action.recommendList),
    })
  }
  return state
}

export default reducer
