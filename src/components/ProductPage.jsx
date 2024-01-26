import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { GB_CURRENCY } from "../utils/constants";
import { callApi } from "../utils/CallApi";

import { ProductDetails } from "./";

import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState("1");
  const dispatch = useDispatch();

  const getProduct = () => {
    callApi("data/products.json").then((productResults) => {
      setProduct(productResults[id]);
    });
  };

  const addQuantityToProduct = () => {
    setProduct((product.quantity = Number(quantity)));
    return product;
  };

  useEffect(() => {
    getProduct();
  });

  if (!product?.title) return <h2>Loading Product ...</h2>;

  return (
    product && (
      <div className="h-screen bg-amazonclone-background">
        <div className="min-w-[800px] max-w-[1000px] m-auto p-4">
          <div className="grid grid-cols-10">
            {/* left */}
            <div className="col-span-3 p-8 rounded bg-white m-auto">
              <img src={product.image} alt="" />
            </div>
            {/* middle */}
            <div className="col-span-5 p-3 mx-2 rounded bg-white divide-y divide-gray-400">
              <div className="mb-3">
                <ProductDetails product={product} ratings={true} />
              </div>
              <div className="text-base xl:text-lg mt-3">
                {product.description}
              </div>
            </div>
            {/* right */}
            <div className="col-span-2 p-4 rounded bg-white ">
              <div className="text-xl text-red-700 text-right font-semibold">
                {GB_CURRENCY.format(product.price)}
              </div>
              <div className="text-base xl:text-lg text-gray-500 text-right font-semibold">
                RRP:
                <span className="line-through">
                  {GB_CURRENCY.format(product.oldPrice)}
                </span>
              </div>
              <div className="text-sm xl:text-base font-semibold text-blue-500 mt-3">
                FREE Returns
              </div>
              <div className="text-sm xl:text-base font-semibold  text-blue-500 mt-1">
                FREE Delivery
              </div>
              <div className="text-base xl:text-lg font-semibold text-green-700 mt-1">
                In Stack
              </div>
              <div className="text-base xl:text-lg mt-1">
                Quantity:
                <select
                  onChange={(e) => setQuantity(e.target.value)}
                  className="p-1 ml-2 bg-white border rounded-md focus:border-indigo-600"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
              <Link to={"/checkout"}>
                <button
                  onClick={() => dispatch(addToCart(addQuantityToProduct()))}
                  className="btn"
                >
                  Add to Cart
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default ProductPage;
