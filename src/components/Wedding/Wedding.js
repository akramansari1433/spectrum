import React from 'react'
import img1 from './Img/1.jpg'
import img2 from './Img/2.jpg'
import img3 from './Img/3.jpg'

import './Wedding.css'

function Wedding() {
    return (
        <div>
            <h1 className="text-center display-4">Wedding Album</h1>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" style={{width:'80%',margin:'auto'}}>
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={img1} className="d-block cover" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src={img2} className="d-block" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src={img3} className="d-block" alt="..."/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            <hr className="w-75 my-4"/>
        </div>
    )
}

export default Wedding
