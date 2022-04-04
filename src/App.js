import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';
import Review from './Components/Review/Review';
import NotFound from './Components/NotFound/NotFound';
import Blogs from './Components/Blogs/Blogs';

function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
      <Route path='/review' element={<Review></Review>}></Route>
      <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
    </Routes>
    </div>
  );
}

export default App;
