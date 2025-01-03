import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import("./pages/Home.tsx"));
const About = React.lazy(() => import("./pages/About.tsx"));

const ErrorPage = React.lazy(() => import("./pages/ErrorPage.tsx"));
const LoadingPage = React.lazy(() => import("./pages/LoadingPage.tsx"));

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
