/*const App = () => {
    return (
        <h2> Hello components</h2>
    );
};*/

const React = require('react');
import Booklist from './Booklist';

class App extends React.Component {
    render() {
        return (
            <Booklist />
        );
    }
}
export default App;