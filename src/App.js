import Header from "./components/header.js";
import Video from "./components/video.js";
import Footer from "./components/footer.js";

import "./components/main.css";

function App() {
  return (
    <>
      <div id="full-vh">
        <Header />
        <Video />
      </div>
      <Footer />
    </>
  );
}

export default App;
