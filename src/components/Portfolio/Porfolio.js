import React from 'react'
import {Link} from 'react-router-dom'
import img1 from './Img/1.jpg'
import img2 from './Img/2.jpg'


function Porfolio() {
    return (
        <div>
            <h1 className="display-4 text-center p-2">Photography Album</h1>
            <div className="p-3 d-flex flex-wrap justify-content-center">
                <div className="m-3 card" style={{width: '18rem'}}>
                    <img className="card-img-top" src={img1} alt="#Card"/>
                    <div className="card-body text-center">
                        <h5 className="card-title">Weddings</h5>
                        <Link to="/porfolio/wedding" className="btn btn-primary">View More</Link>
                    </div>
                </div>
                <div className="m-3 card" style={{width: '18rem'}}>
                    <img className="card-img-top" src={img2}alt="#Card"/>
                    <div className="card-body text-center">
                        <h5 className="card-title">Fashion & Portraits</h5>
                        <a href="#sbshgh" className="btn btn-primary">View More</a>
                    </div>
                </div>
                <div className="m-3 card" style={{width: '18rem'}}>
                    <img className="card-img-top" src={img1} alt="#Card"/>
                    <div className="card-body text-center">
                        <h5 className="card-title">Baby</h5>
                        <a href="#sbshgh" className="btn btn-primary">View More</a>
                    </div>
                </div>
                <div className="m-3 card" style={{width: '18rem'}}>
                    <img className="card-img-top" src={img1} alt="#Card"/>
                    <div className="card-body text-center">
                        <h5 className="card-title">Products</h5>
                        <a href="#sbshgh" className="btn btn-primary">View More</a>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default Porfolio
