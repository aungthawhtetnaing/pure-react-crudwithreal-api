 
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import Blogdetails from './Blogdetails';
import NotFound from './NotFound';

import Update from './Update';
import CreateTodo from './CreateTodo';
import TodoUpdate from './TodoUpdate';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <div className='content'>
              <Switch>
                <Route exact path="/">
                  <Home/>
                </Route>
                <Route path="/create">
                  <Create/>
                </Route>
                <Route path="/blogs/edit/:id">
                  <Update/>
                </Route>
                <Route path="/blogs/:id">
                  <Blogdetails/>
                </Route>
                <Route path="/addtodo/:id">
                  <CreateTodo/>
                </Route>
                <Route path="/edittodo/:id">
                  <TodoUpdate/>
                </Route>
                <Route path="*">
                  <NotFound/>
                </Route>
              </Switch>
          </div>
      </div>
    </Router>
  );
}

export default App;
