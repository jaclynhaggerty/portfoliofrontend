import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserWithStoredToken } from "./store/user/thunks";
import { Routes, Route } from "react-router-dom";
import { Navigation, MessageBox } from "./components";
import { Homepage, Login, SignUp, ProductsPage, ContactPage, DetailsPage } from "./pages"
import Header from "./components/Header";
import { AdminReview } from "./pages/AdminReview";
import Footer from "./components/Footer";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Application } from "./pages/Application";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);
  
  return (
    <div>
      <Navigation/>
      <Header/>
      <MessageBox/>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/animals/:id" element={<DetailsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/admin/applications" element={<AdminReview />} />
        <Route path="/apply/:id" element={<Application />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
      <Footer />
    </div>
    
  );
}

export default App;