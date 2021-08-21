import React from 'react'
import img1 from './1.jpg'

function Albums() {
    return (
        <div>
            <h1 className="display-3 text-center">Photography Albums </h1>
            <div className="p-3 d-flex justify-content-center">
                <div className="m-3 card" style={{width: '18rem'}}>
                    <img className="card-img-top" src={img1} alt="#Card"/>
                    <div className="card-body text-center">
                        <h5 className="card-title">Weddings</h5>
                        <a href="#sbshgh" class="btn btn-primary">View More</a>
                    </div>
                </div>
                <div className="m-3 card" style={{width: '18rem'}}>
                    <img className="card-img-top" src={img1}alt="#Card"/>
                    <div className="card-body text-center">
                        <h5 className="card-title">Fashion</h5>
                        <a href="#sbshgh" class="btn btn-primary">View More</a>
                    </div>
                </div>
                <div className="m-3 card" style={{width: '18rem'}}>
                    <img className="card-img-top" src={img1} alt="#Card"/>
                    <div className="card-body text-center">
                        <h5 className="card-title">Portaits</h5>
                        <a href="#sbshgh" class="btn btn-primary">View More</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Albums
