import React from 'react'

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from './Layer/RootLayout';
import Home from './Page/Home';
import Shop from './Page/Shop';
import ProductDeatils from './Page/ProductDeatils';
import Cart from './Page/Cart';
import CheckOut from './Page/CheckOut';
import Blog from './Page/Blog';
import ArticleOpen from './Page/ArticleOpen';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home/>}/>
      <Route path='/shop/' element={<Shop/>}/>
      <Route path='/product/details/' element={<ProductDeatils/>}/>
      <Route path='/cart/' element={<Cart/>} />
      <Route path='/checkout/' element={<CheckOut/>} />
      <Route path='/blog/' element={<Blog/>}/>
      <Route path='/article/open/' element={<ArticleOpen/>}/>
   





    </Route>
  )
);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App