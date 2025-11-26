import Main from "./components/pages/Main";
import './assets/css/style.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SingleBlog from "./components/pages/SingleBlog";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/blog/:id" element={<SingleBlog/>}/>
        </Routes>
      </BrowserRouter>
      {/* <Main /> */}
    </>
  )
}

export default App;
