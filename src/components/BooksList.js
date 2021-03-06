import React from 'react';
import {connect} from 'react-redux';
import {selectBook} from './../actions';
import {bindActionCreators} from 'redux';
class BooksList extends React.Component{
    renderList(){
        return this.props.books.map(book=>{
            return (
                <li onClick={()=> this.props.selectBook(book)} key={book.title} className="list-group-item">
                    {book.title}
                </li>
            )
        });
    }
    render(){
        return(
            <ul className="list-group col-md-4">
                {this.renderList()}
            </ul>
        )
    }
}
const  mapStateToProps = (state) => {
  return{
      books:state.books
  };
};
// function mapDispatchToProps(dispatch) {
//     //when call selectBook result pass to all reducers
//     return bindActionCreators({selectBook:selectBook},dispatch)
// }
export default connect(mapStateToProps,{selectBook})(BooksList);

