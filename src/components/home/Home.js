import React, { Component } from 'react';
import './home.css';
import { 
  atx_getData,
} from '../../actions/actions';
import { connect } from "react-redux";

import ItemNews from './ItemNews';

class Home extends Component {
  componentWillMount(){
    this.props.atx_getData();
  } 
  render() {
      return (
          <div className="container">
            {this.props.news.map((item, index)=> { 
              if (item.username === localStorage.getItem('username'))
                return (
                  <div className="row" key={index}>
                    <ItemNews content={item.content} username={item.username} id={item.id} countlike={item.countlike} isAdmin={true}/>
                  </div>
                );
              else {
                return (
                  <div className="row" key={index}>
                    <ItemNews content={item.content} username={item.username} id={item.id} countlike={item.countlike} history2={this.props.history} isAdmin={false}/>
                  </div>
                );
              }
            })
            }
          </div>
      );
  }
}
function mapStateToProps(state) {
  return {
      ...state
  };
}
function mapDispatchToProps(dispatch) {
  return {
    atx_getData: () => dispatch(atx_getData()),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);