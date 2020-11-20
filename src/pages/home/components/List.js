import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import { Link } from 'react-router-dom'
import { ListItem, ListInfo, LoadMore } from '../style'
class List extends Component {
  render() {
    return (
      <div>
        {this.props.list.map((item, index) => {
          return (
            <Link key={index} to={'/detail/' + item.get('id')}>
              <ListItem>
                <img className="pic" src={item.get('imgUrl')} alt="" />
                <ListInfo>
                  <h3 className="title">{item.get('title')}</h3>
                  <p className="desc">{item.get('desc')}</p>
                </ListInfo>
              </ListItem>
            </Link>
          )
        })}
        <LoadMore onClick={this.props.loadMoreList}>阅读更多</LoadMore>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    list: state.getIn(['home', 'articleList']),
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadMoreList: () => {
      dispatch(actionCreators.loadMoreList())
    },
  }
}

export default connect(mapState, mapDispatch)(List)
