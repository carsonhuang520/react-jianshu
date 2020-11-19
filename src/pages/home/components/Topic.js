import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TopicItem, TopicWrapper } from '../style'

class Topic extends Component {
  getTopicList() {
    const { topicList } = this.props
    const newList = topicList.toJS()
    const items = []
    for (let i = 0; i < newList.length; i++) {
      items.push(
        <TopicItem key={newList[i].id}>
          <img className="topic-pic" src={newList[i].imgUrl} alt="/" />
          {newList[i].title}
        </TopicItem>
      )
    }
    return items
  }
  render() {
    return <TopicWrapper>{this.getTopicList()}</TopicWrapper>
  }
}

const mapStateToProps = (state) => {
  return {
    topicList: state.getIn(['home', 'topicList']),
  }
}

const mapDispatchToProps = () => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Topic)
