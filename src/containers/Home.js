import React, { Component } from 'react';
import './home.css';
import { 
  atx_getData,
} from '../actions/actionNews';
import { connect } from "react-redux";
import ItemNews from '../components/home/ItemNews';

class Home extends Component {
  componentWillMount(){
    this.props.atx_getData();
  } 
  render() {
    const arr = [...this.props.news];
    arr.reverse();
      return (
          <div className="container">
            {arr.map((item, index)=> { 
              if (item.username === localStorage.getItem('username'))
                return (
                  <div className="row" key={index}>
                    <ItemNews 
                    content={item.content} 
                    username={item.username} 
                    id={item.id} 
                    countlike={item.countlike} 
                    isAdmin/>
                  </div>
                );
              else {
                return (
                  <div className="row" key={index}>
                    <ItemNews 
                    content={item.content} 
                    username={item.username} 
                    id={item.id} 
                    countlike={item.countlike} 
                    history2={this.props.history} 
                    />
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
    news: state.reducerNews.news
  };
}

const mapDispatchToProps = {
  atx_getData
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);