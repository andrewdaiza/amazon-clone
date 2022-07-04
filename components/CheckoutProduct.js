import Image from "next/image";
import React from "react";
import { StarIcon } from "@heroicons/react/solid";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

const CheckoutProduct = ({ item }) => {
  const { id, title, price, category, description, image, rating, hasPrime } =
    item;
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      category,
      description,
      image,
      rating,
      hasPrime,
    };
    dispatch(addToBasket(product));
  };
  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };
  return (
    <div className='grid grid-cols-5 my-5'>
      <div className='flex justify-center'>
        <Image
          src={image}
          width={200}
          height={200}
          alt='product'
          objectFit='contain'
        />
      </div>
      <div className='flex flex-col col-span-3 mx-5'>
        <p className='font-semibold text-lg'>{title}</p>
        <div className='flex'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className='h-5 text-yellow-500' />
            ))}
        </div>
        <p className='text-xs my-2'>{description.slice(0, 200)}</p>
        <p className='font-semibold'>${price}</p>
        <p>{category}</p>
        {hasPrime && (
          <div className='flex items-center space-x-2'>
            <Image
              src='https://links.papareact.com/fdw'
              width={50}
              height={50}
              objectFit='contain'
            />
            <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
          </div>
        )}
      </div>
      <div className='flex flex-col space-y-2 my-auto'>
        <button
          onClick={addItemToBasket}
          className='bg-yellow-500 p-2 bg-gradient-to-t from-yellow-500 to-yellow-200'
        >
          Add to Basket
        </button>
        <button
          onClick={removeItemFromBasket}
          className='bg-yellow-500 mt-2 p-2 bg-gradient-to-t from-yellow-500 to-yellow-200'
        >
          Remove from Basket
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
