import React, { useState, useEffect } from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import ContactMain from "./components/ContactMain";
import axios from "axios";

const Login = () => {
  return (
    <div>
      <Header />
      <ContactMain />
      <Footer />
    </div>
  );
};

export default Login;
