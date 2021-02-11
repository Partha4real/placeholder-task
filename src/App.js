import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Posts from './components/Posts';
import Post from './components/Post';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" exact component={Posts} />
          <Route path="/post/:id" exact component={Post} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
