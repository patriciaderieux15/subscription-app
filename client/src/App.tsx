import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav/Nav";
import Articles from "./pages/Articles";
import ArticlesPlan from "./pages/ArticlesPlan";
import LandingPage from "./pages/LandingPage";
import { ProtectedRoute } from "./routes/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/articles" element={<ProtectedRoute />}>
          <Route path="/articles" element={<Articles />}></Route>
        </Route>
        <Route path="/articles-plans" element={<ProtectedRoute />}>
          <Route path="/articles-plans" element={<ArticlesPlan />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
