 

function Link1() {
    function Home() {
        return <h2>Home Page</h2>
    }

    function About() {
        return <h2>About Page</h2>
    }

    return (
        <BrowserRouter>
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
        </BrowserRouter>
    )
}

export default Link1