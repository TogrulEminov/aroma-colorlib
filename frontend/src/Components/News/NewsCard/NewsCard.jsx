import React from 'react'
import { FaCommentDots } from "react-icons/fa"
import card1 from "../../../Media/card1.jpg"
import card2 from "../../../Media/card2.jpg"
import card3 from "../../../Media/card3.jpg"
import "./_NewsCard.scss"
const NewsCard = () => {
    return (
        <div className='newsCard'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-4 card">
                        <div className='cardImage'>
                            <img src={card1} alt="card-1" />
                        </div>
                        <div className='cardComment'>
                            <span>By Admin</span>
                            <span><FaCommentDots /> 2 Comments</span>
                        </div>
                        <h3>The Richland Center Shooping News and weekly shooper</h3>
                        <p>Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.</p>
                        <div>Read More</div>
                    </div>
                    <div className="col-4 card">
                        <div className='cardImage'>
                            <img src={card2} alt="card-1" />
                        </div>
                        <div className='cardComment'>
                            <span>By Admin</span>
                            <span><FaCommentDots /> 2 Comments</span>
                        </div>
                        <h3>The Shopping News also offers top-quality printing services</h3>
                        <p>Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.</p>
                        <div>Read More</div>
                    </div>
                    <div className="col-4 card">
                        <div className='cardImage'>
                            <img src={card3} alt="card-1" />
                        </div>
                        <div className='cardComment'>
                            <span>By Admin</span>
                            <span><FaCommentDots /> 2 Comments</span>
                        </div>
                        <h3>Professional design staff and efficient equipment you’ll find we offer</h3>
                        <p>Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.</p>
                        <div>Read More</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsCard
