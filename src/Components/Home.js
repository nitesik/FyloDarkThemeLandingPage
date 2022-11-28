import Body from "./Body";
import Footer from "./Footer";
import "./Home.css";
import Nav from "./Nav";

function Home() {

  return (
    <div className="container">
      <Nav />
      <div className="body-container">
        <Body />
      </div>
      <Footer />
    </div>
  )
}

export default Home;