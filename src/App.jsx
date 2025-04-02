import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router";
import H1 from "./components/H1/H1";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <H1 text="Beautiful things ahead..." />
                <span style={{ textAlign: "center", fontSize: "18px" }}>
                  Stay tuned!
                </span>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
