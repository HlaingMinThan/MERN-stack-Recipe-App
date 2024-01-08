import { Outlet, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <nav>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </nav>
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default App
