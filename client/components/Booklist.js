const React = require('react');
import Book from './Book';
const BookList = (props) => {
    return (
       <div>
            <Book />
            <Book />
            <Book />
        </div>
    );
};
export default BookList;