
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListCommentComponent from './components/ListCommentComponent';
import AddCommentComponent from './components/AddCommentComponent';
import ExternalPageComponent from './components/ExternalPageComponent';
import AddCommentBottonComponent from './components/AddCommentBottonComponent';
function App() {
  return (
    <div>
      <Router>
      <HeaderComponent/>
        <div className='container'>
          <Routes>
            localhost:3000/
            <Route path="/" element = {[<ExternalPageComponent/>,<AddCommentBottonComponent/>,<ListCommentComponent/>]}></Route>
            <Route path="/comments" element = {<ListCommentComponent/>}></Route>
            <Route path="/add-comment" element = {[<ExternalPageComponent/>,<AddCommentComponent/>,<ListCommentComponent/>]}></Route>
          </Routes>
        </div>

        <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
