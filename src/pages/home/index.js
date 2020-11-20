import React, { Component } from 'react'
import List from './components/List'
import Topic from './components/Topic'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { connect } from 'react-redux'
import { HomeLeft, HomeRight, HomeWrapper, BackTop } from './style'
import { actionCreators } from './store'

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
        {this.props.showScroll ? (
          <BackTop onClick={this.backToTop}>回到顶部</BackTop>
        ) : null}
      </HomeWrapper>
    )
  }

  backToTop() {
    window.scrollTo(0, 0)
  }

  componentDidMount() {
    this.props.initHomeData()
    this.bindEvent()
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }

  bindEvent() {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }
}

const mapState = (state) => {
  return {
    showScroll: state.getIn(['home', 'showScroll']),
  }
}

const mapDispatch = (dispatch) => {
  return {
    initHomeData: () => {
      dispatch(actionCreators.initHomeDataAction())
    },
    changeScrollTopShow: () => {
      if (document.documentElement.scrollTop > 100) {
        dispatch(actionCreators.toggleTopShow(true))
      } else {
        dispatch(actionCreators.toggleTopShow(false))
      }
    },
  }
}

export default connect(mapState, mapDispatch)(Home)
