import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";

import { Link } from "react-router-dom";

import { ProductDetails } from "./";

import { GB_CURRENCY } from "../utils/constants";

function Checkout() {
  const products = useSelector((state) => state.cart.products);
  const itemsNumber = useSelector((state) => state.cart.productsNumber);
  const subTotal = useSelector((state) =>
    state.cart.products.reduce(
      (subTotal, product) => subTotal + product.price * product.quantity,
      0
    )
  );

  const dispatch = useDispatch();

  return (
    <div className="h-[100%] ">
      <div className="min-w-[800px] max-w-[1000px] m-auto pt-8">
        <div className="grid grid-cols-8 gap-10">
          {/* products */}
          <div className="col-span-6 bg-amazonclone-background">
            <div className="text-2xl m-4">Shopping Cart</div>
            {products.map((product) => {
              console.log(product.id);
              return (
                <div className="mb-10" key={product.id}>
                  <div className="grid grid-cols-7 divide-y divide-gray-400 mr-4">
                    <div className="col-span-6 grid grid-cols-8 divide-y divide-gray-400">
                      <div className="col-span-2">
                        <Link to={`/product/${product.id}`}>
                          <img
                            className="p-4 m-auto"
                            src={product.image_small}
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="col-span-4">
                        <div className="font-medium text-black mt-2">
                          <Link to={`/product/${product.id}`}>
                            <ProductDetails product={product} ratings={false} />
                          </Link>
                        </div>
                        <div>
                          <button
                            className="btn font-bold"
                            onClick={() => dispatch(removeFromCart(product.id))}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                      <div className="col-span-2">
                        <div className="text-lg mt-2 mr-4 font-semibold">
                          {GB_CURRENCY.format(product.price)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="text-lg text-right mb-4 mr-4">
              SubTotal ({itemsNumber} items) :{" "}
              <span className="font-semibold">
                {GB_CURRENCY.format(subTotal)}
              </span>
            </div>
          </div>
          {/* checkout */}
          <div className="col-span-2 bg-amazonclone-background rounded h-[250px] p-7">
            <div className="text-xs text-green-800 mb-2">
              Your order Quqlifies for
              <span className="font-bold"> FREE DELIVERY</span>. Delivery
              Details
            </div>
            <div className="text-base mb-4">
              SubTotal ({itemsNumber} items) :{" "}
              <span className="font-semibold">
                {GB_CURRENCY.format(subTotal)}
              </span>
            </div>
            <button className="btn">Product to CheckOut</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
