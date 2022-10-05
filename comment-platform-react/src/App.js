
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListCommentComponent from './components/ListCommentComponent';
import AddCommentComponent from './components/AddCommentComponent';

function App() {
  return (
    <div>
      <Router>
      <HeaderComponent/>
        <div className='container'>
          <Routes>
            localhost:3000/
            <Route path="/" element = {<ListCommentComponent/>}></Route>
            <Route path="/comments" element = {<ListCommentComponent/>}></Route>
            <Route path="/add-comment" element = {<AddCommentComponent/>}></Route>
          </Routes>
        </div>

        <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
