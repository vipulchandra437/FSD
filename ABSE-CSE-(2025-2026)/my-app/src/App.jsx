
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import image from "./assets/logo.jpg"
import Navbar from './component/Navbar'
function App() {


  return (
    <div>{/* nav bar is start  */}
  <Navbar/>
      {/* nav bar closed */}

      {/* button is start */}
      <div class="container mt-3">
  <h2>Button Styles</h2>
  <button type="button" class="btn">Basic</button>
  <button type="button" class="btn btn-primary">Primary</button>
  <button type="button" class="btn btn-secondary">Secondary</button>
  <button type="button" class="btn btn-success">Success</button>
  <button type="button" class="btn btn-info">Info</button>
  <button type="button" class="btn btn-warning">Warning</button>
  <button type="button" class="btn btn-danger">Danger</button>
  <button type="button" class="btn btn-dark">Dark</button>
  <button type="button" class="btn btn-light">Light</button>
  <button type="button" class="btn btn-link">Link</button>      
</div>

{/* button is closed */}

{/* card is start */}
<div class="container mt-3">
 
  <div class="card">
    <div class="card-body">
      <h4 class="card-title">Card title</h4>
      <p class="card-text">Some example text. Some example text.</p>
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div>
  </div>
</div>

{/* card is cloesd */}
<img src={image} height={700} width={400} alt="logo"></img>
    </div>
  )
}

export default App