import AfterAuth from "./afterauth";
import Carousel from "./carousel";
import CardsLog from "./tariflog";
import Footer from "./footer";
import MainLog from "./mainlog";
import Preloader from "./loader";
import React, { Component, Suspense, } from 'react';


export default class Admin extends Component {
    render() {
        return (
            <div className="all_main">
                <Suspense fallback={<Preloader />}>
                    <AfterAuth />
                </Suspense>
                <MainLog />
                <Carousel />
                <CardsLog />
                <Footer />
            </div>
        )
    }
}
