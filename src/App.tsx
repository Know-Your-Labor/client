import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import DetailPage from "./components/DetailPage";
import ListPage from "./components/ListPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ListPage />} />
          <Route path="/product/:id" element={<DetailPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
