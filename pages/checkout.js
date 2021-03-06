import Image from "next/image";
import React from "react";
import { Header } from "../components/Header";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../slices/basketSlice";
import CheckoutProduct from "../components/CheckoutProduct";

const Checkout = () => {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  return (
    <div className='bg-gray-100'>
      <Header />
      <main className='lg:flex max-w-screen-2xl mx-auto'>
        <div className='flex-grow m-5 shadow-sm'>
          <Image
            src='https://links.papareact.com/ikj'
            width={1020}
            height={250}
            objectFit='contain'
            alt='Product'
          />
          <div className='flex flex-col space-y-10 bg-white my-2'>
            <h1 className='text-3xl border-b pb-4'>
              {items.length === 0
                ? "Your Amazon Basket is empty"
                : "Shopping Basket"}
            </h1>
            <div className='flex flex-col mx-5'>
              {items.map((item, idx) => (
                <CheckoutProduct key={item.idx} item={item} />
              ))}
            </div>
          </div>
          <div className='flex flex-col bg-white p-10 my-5'>
            {items.length > 0 && (
              <>
                <h2 className='whitespace-nowrap'>
                  Subtotal {""} ({items.length} items) {""} ${total}
                </h2>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Checkout;
