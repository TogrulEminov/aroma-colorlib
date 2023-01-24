import React from 'react'
import "./_Header.scss"
import HeaderImage from "../../Media/hero-banner.jpg"
const Header = () => {
    return (
        <div className='headerBg'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-4 headerLeft">
                        <img src={HeaderImage} alt="header" />
                    </div>
                    <div className="col-8 headerRight">
                        <h4>Shop is fun</h4>
                        <h1>BROWSE OUR PREMIUM PRODUCT</h1>
                        <p>Us which over of signs divide dominion deep fill bring they're meat beho upon own earth without morning over third. Their male dry. They are great appear whose land fly grass.</p>
                        <button>Browse Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header