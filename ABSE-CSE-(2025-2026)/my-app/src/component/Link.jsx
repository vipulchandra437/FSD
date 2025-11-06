import { BrowserRouter ,Router, Route, Link } from 'react-router-dom'

function Link1() {
    function Home() {
  return <h2>Home Page</h2>
}

function About() {
  return <h2>About Page</h2>
}       
  return (
    <Link1>
    <div>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </nav>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
    </div>
    </Link1>
  )
}

export default Link1