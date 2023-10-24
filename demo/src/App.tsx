import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";

import AllBlogList from "./components/allbloglist";
import BlogListtingCategoryWise from "./components/blogcategory";
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <div>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/signin" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            
                  <Route path="blog" element={<AllBlogList/>}/>
                  <Route path="javascript" element={<BlogListtingCategoryWise/>}/>
            

          </Routes>
        </div>
      </BrowserRouter>
    </div>

  )

}

export default App;
