
import css from './App.module.css';
import { Route, Routes, Link } from "react-router-dom";
import Home from "path/to/pages/Home";
import About from "path/to/pages/About";
import Products from "path/to/pages/Products";
import NotFound from "path/to/pages/NotFound";
import BlogPost from "path/to/pages/BlogPost";
import ProductDetails from "path/to/pages/ProductDetails";
import Mission from "path/to/components/Mission";
import Team from "path/to/components/Team";
import Reviews from "path/to/components/Reviews";


export default function App() {

  /* Остальной код */
  return (
    <div>
       <nav className={css.nav}>
        <Link to="/" >
          Home
        </Link>
        <Link to="/about" >
          About
        </Link>
        <Link to="/ptoducts">
          Products
        </Link>
  </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="rewiews" element={<Reviews/>}/>
        </Route>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetails/>} />
        <Route path="*" elemt={<NotFound />} />
        <Route path="/blog/:postId" element={<BlogPost/>}/>
      </Routes>
    </div>
  )
}

  