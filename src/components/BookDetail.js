import React from 'react';
import {connect} from 'react-redux';
import {selectBook} from './../actions';
import {bindActionCreators} from 'redux';
class BookDetail extends React.Component{

    render(){
        if (!this.props.book){
            return <div>Select Book to Start</div>
        }
        return(
           <div>
               <h3>Details for:</h3>
               <div>title : {this.props.book.title}</div>
               <div>pages : {this.props.book.pages}</div>
           </div>
        )
    }
}
const  mapStateToProps = (state) => {
  return{
      book:state.activeBook
  };
};
// function mapDispatchToProps(dispatch) {
//     //when call selectBook result pass to all reducers
//     return bindActionCreators({selectBook:selectBook},dispatch)
// }
export default connect(mapStateToProps)(BookDetail);

