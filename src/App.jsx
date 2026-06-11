import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Banner from './Components/Banner'
import ProductList from './Components/ProductList'
import { BsCartFill } from 'react-icons/bs'
import Footer from './Components/Footer'
import './App.css'

function App() {
  return (
    <>
      <div className="bg-light">
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <div className='container'>
            <a className='navbar-brand' href='#'>Home</a>
            <a className='navbar-brand' href='#'>Products</a>
            <a className='navbar-brand' href='#'>Men</a>
            <a className='navbar-brand' href='#'>Women</a>
            <a className='navbar-brand' href='#'>Contact</a>
            <BsCartFill className="ms-auto" />
          </div>
          <button className="btn btn-outline-primary">Login</button>
        </nav>
      </div>

      <main className="container my-5">

        <ProductList />
        <Footer/>
      </main>
    </>
  )
}

export default App
