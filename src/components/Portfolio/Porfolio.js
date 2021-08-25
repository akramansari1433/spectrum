import React from 'react'
import img1 from './Img/1.jpg'

function Porfolio() {
    return (
        <div>
            <h1 className="display-4 text-center">Photography Album</h1>
            <div className="p-3 d-flex flex-wrap justify-content-center">
                <div className="m-3 card" style={{width: '18rem'}}>
                    <img className="card-img-top" src={img1} alt="#Card"/>
                    <div className="card-body text-center">
                        <h5 className="card-title">Weddings</h5>
                        <a href="#sbshgh" className="btn btn-primary">View More</a>
                    </div>
                </div>
                <div className="m-3 card" style={{width: '18rem'}}>
                    <img className="card-img-top" src={img1}alt="#Card"/>
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
