import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./About";
import POPOSList from "./POPOSList";
import Title from "./Title";
import Footer from "./Footer";
import POPOSDetails from "./POPOSDetails";
import POPOSFeature from "./POPOSFeature";

function App() {

  return (
    <Router>
      <div className="App">

      <Title />

      <Routes>
        <Route path="/" element={<POPOSList />} />
        <Route path="/about" element={<About />} />
        <Route path="/details/:id" element={<POPOSDetails />} />
        

      </Routes>

      <Footer />

      </div>
    </Router>
  )
}


export default App