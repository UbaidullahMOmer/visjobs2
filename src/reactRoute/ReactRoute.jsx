import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "./RouteConstants";

import Home from "../pages/home/Home.jsx";
import Navbar from "../components/navbar/Navbar.jsx";
import Footer from "../components/footer/Footer.jsx";
import GeneralVisaStatistics from "../pages/generalVisaStatistics/GeneralVisaStatistics.jsx";
import CompanyStatistics from "../pages/companyStatistics/CompanyStatistics.jsx";

const ReactRoute = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path={ROUTES.home} element={<Home />} />
                <Route path={ROUTES.generalVisaStatistics} element={<GeneralVisaStatistics />} />
                <Route path={ROUTES.companyStatistics} element={<CompanyStatistics />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default ReactRoute;