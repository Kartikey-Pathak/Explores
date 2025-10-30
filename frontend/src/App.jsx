
import { Route, Router, Routes } from 'react-router-dom'
import { Suspense, lazy } from "react";
import './App.css'


// Lazy load pages
const Home = lazy(() => import("./pages/Home.jsx"));
const Enquiry = lazy(() => import("./pages/Enquiry.jsx"));
const Info = lazy(() => import("./pages/Info.jsx"));
function App() {

  return (
    <>
      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-screen text-xl font-semibold">
            Loading...
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/enquiry" element={<Enquiry />} />
          <Route path="/packages/:city" element={<Info />} />
        </Routes>
      </Suspense>


    </>
  )
}

export default App
