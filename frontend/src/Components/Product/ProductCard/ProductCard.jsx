import React from 'react'
import product2 from "../../../Media/product2.png"
import "./_ProductCard.scss"
import { AiTwotoneDelete } from "react-icons/ai"
import { useContext } from 'react'
import { mainContext } from '../../../Context/Context'
const ProductCard = () => {
    const { data, delData } = useContext(mainContext)
    return (
        <div className='productCard'>
            <div className="row">
                {data && data.map((e, index) => (
                    <div className="col-3 card" key={index}>
                        <div className='cardImage'>
                            <img src={e.url} alt="product1" />
                        </div>
                        <h3>{e.markName}</h3>
                        <h2>{e.name}</h2>
                        <span>${e.price}</span>
                        <div className='btnDelete' onClick={() => delData(e._id)}>
                            <AiTwotoneDelete />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductCard
