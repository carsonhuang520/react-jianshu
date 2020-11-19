import React, { Component } from 'react'
import List from './components/List'
import Topic from './components/Topic'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { connect } from 'react-redux'
import axios from 'axios'
import { HomeLeft, HomeRight, HomeWrapper } from './style'

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            className="banner-img"
            alt=""
            src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
          />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
      </HomeWrapper>
    )
  }

  componentDidMount() {
    axios.get('/api/home.json').then((res) => {
      const result = res.data.data
      const action = {
        type: 'init_home_data',
        topicList: result.topicList,
        articleList: result.articleList,
        recommendList: result.recommendList,
      }
      this.props.initHomeData(action)
      // console.log(result)
    })
  }
}

const mapDispatch = (dispatch) => {
  return {
    initHomeData: (action) => {
      dispatch(action)
    },
  }
}

export default connect(null, mapDispatch)(Home)
