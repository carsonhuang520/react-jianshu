import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { withRouter } from 'react-router-dom'
import { DetailWrapper, Header, Content } from './style'

class Detail extends Component {
  render() {
    return (
      <DetailWrapper>
        <Header>{this.props.title}</Header>
        <Content dangerouslySetInnerHTML={{ __html: this.props.content }} />
      </DetailWrapper>
    )
  }

  componentDidMount() {
    console.log(this.props.match)
    this.props.handleInitDetail()
  }
}

const mapState = (state) => {
  return {
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content']),
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleInitDetail: () => {
      dispatch(actionCreators.initDetailAction())
    },
  }
}

export default connect(mapState, mapDispatch)(withRouter(Detail))
