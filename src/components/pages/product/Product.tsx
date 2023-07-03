import axios from 'axios'
import './Product.scss'
import React, { useEffect, useState } from 'react'
import { IGetProduct } from '../../model/mode'
import ProductCard from '../../card/ProductCard'
import saveproductData from '../../../redux/action/product'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { ClipLoader, DotLoader} from 'react-spinners'
// import ClipLoader from "react-spinners/ClipLoader";


const Product = () => {
  const dispatch = useDispatch()
  const getproductData = useSelector((state: any) => state.saveProducts.saveProducts);
  // console.log("getproductData : ", getproductData);

  // const [product, setProduct] = useState<IGetProduct[]>([])
  const [loading, setLoading] = useState(true);

  useEffect((): void => {
    axios.get('http://localhost:2000/users/findProduct')
      .then(function (response) {
        // console.log(response.data.data);
        dispatch(saveproductData(response.data.data))
        setLoading(false);
      })
  }, [])

  return (

    <>
      {loading ?

        <DotLoader
          color={"#D0021B"}
          loading={loading}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        :

        <div id='Product'>
          <h1>Product Page</h1>
          <div className="showCard">
            {getproductData &&
              getproductData.map((item: IGetProduct) => (
                <>
                  <ProductCard item={item} key={item.id} />
                </>
              ))
            }
          </div>
        </div>
      }

    </>
  )
}

export default Product
