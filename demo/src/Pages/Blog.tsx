import React from "react";
import { Link, Route } from "react-router-dom";
import { Routes } from "../../node_modules/react-router-dom/dist/index";
import AllBlogList from "../Components/allbloglist";
import BlogListtingCategoryWise from "../Components/blogcategory";

const Blog: React.FC<{}> = () => {
    return (
        <div className="album py-5 bg-light">
            <div className ="container">
                <div className="row">
                    <div className="col-md-2">
                        <div className="list-group" id="list-tab" role="tablist">
                            <Link
                              className ="list-group-item list-group-item-action active"
                              id="list-home-list"
                              data-bs-toggle="list"
                              role="tab"
                              aria-controls ="list-home"
                              to="/blog/javascript"
                            >
                               Javascript
                            </Link>
                    
                            <Link
                            className ="list-group-item list-group-item-action active"
                              id="list-home-list"
                              data-bs-toggle="list"
                              role="tab"
                              aria-controls ="list-home"
                              to="/blog/javascript"
                              >
                                  Php
                              </Link>

                        </div>
                    </div>
                    <div className ="col-md-10">
                        <Routes>
                            <Route path="/" element={<AllBlogList/>}/>
                            <Route path="javascript" element={<BlogListtingCategoryWise/>}/>


                        </Routes>
                    </div>
                </div>
            </div>
            
        </div>
    
    );
};

export default Blog;