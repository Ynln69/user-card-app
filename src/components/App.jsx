import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const Layout = lazy(() => import("../components/Layout/Layout"));
const Tweets = lazy(() => import("../pages/Tweets"));
const NotFound = lazy(() => import("../components/NotFound"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tweets" element={<Tweets />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
