// Create a React app to perform tasks as asked using functional component:
// 1)Create a react Router that includes three routes: Home, Product, and Contact and implement 
// navigation between these routes.    2)Create a route that displays a Home page, Product details 
// page and Contact details page.   3) When a user clicks on Home page it should navigate to 
// home page and display “Welcome to LJU” in bold in h1 heading. When a user clicks on a 
// Product page, it should navigate to the product detail page and display three products 
// information with price and description using props. And when user clicks on Contact page it 
// should navigate to contact details page and display contact information with blue color font.

import React from "react"
import {BrowserRouter as Router,Route,Routes,Link} from "react-router-dom"
import Home from "./Home"
import Product from "./Product"
import Contact from "./Contact"

function My(){
    const product=[
        {
            id:1,
            name:"p1",
            price:100,
        },
        {
            id:2,
            name:"p2",
            price:1002,
        },
        {
            id:3,
            name:"p3",
            price:1030,
        }
    ]
    return(
        <div>
            <Router>
                <div className="main=route">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Product">Product</Link></li>
                        <li><Link to="/Contact">Contact</Link></li>
                    </ul>
                </div>
                <Routes>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='/Product' element={<Product info={product}/>}></Route>
                    <Route path='/Contact' element={<Contact/>}></Route>
                </Routes>
            </Router>
        </div>
    )
}
export default My