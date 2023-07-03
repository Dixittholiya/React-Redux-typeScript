import { IGetProduct } from '../model/mode';
import React from 'react'
import { Card } from 'antd';
const { Meta } = Card;

type props = {
    item:IGetProduct
}

const ProductCard = (item:props) => {
    return (
        <div>
            {
                <Card
                    hoverable
                    style={{ width: 300, margin: 20, height: 400 }}
                    cover={<img alt="example" style={{ width: 300, height: 200, marginTop: 50 }} src={item.item.image} />}
                >
                    <Meta title={"Price $ " + item.item.price} description={"category : " + item.item.category} />
                </Card>
            }
        </div>
    )
}

export default ProductCard
