import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import { ProductDetails } from "./";

import { callApi } from "../utils/CallApi";
import { GB_CURRENCY } from "../utils/constants";

function SearchResults() {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState(null);

  const getSearchResults = () => {
    const searchTerm = searchParams.get("searchTerm");
    const category = searchParams.get("category");

    callApi("data/search.json").then((searcResults) => {
      const categoryResults = searcResults[category];
      if (searchTerm) {
        const results = categoryResults.filter((product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setProducts(results);
      } else {
        setProducts(categoryResults);
      }
    });
  };
  useEffect(() => {
    getSearchResults();
  });
  return (
    <div className="min-w-[800px] max-w-[1000px] m-auto">
      {products &&
        products.map((product, key) => {
          return (
            <Link key={key} to={`/product/${product.id}`}>
              <div className="h-[250px] grid grid-cols-12 rounded my-1">
                <div className="col-span-2 p-4 bg-gray-400">
                  <img className="m-auto" src={product.image_small} alt="" />
                </div>
                <div className="col-span-10 bg-gray-50 border border-gray-100 hover:bg-gray-100">
                  <div className="font-medium text-black p-2">
                    <ProductDetails product={product} ratings={true} />
                    <div className="text-xl pt-1">
                      {GB_CURRENCY.format(product.price)}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
}

export default SearchResults;
