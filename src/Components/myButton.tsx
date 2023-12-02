"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

const addToCart = ()=>{
  console.log('added to cart');
}

const button = ({ children, className, ...rest }: IProps) => {
  return (
    <>
      <button className={`${className} rounded-md text-white py-1`} onClick={()=>{
        if(className?.includes('addToCart'))
        {
          addToCart()
        }
        
      }} {...rest}>
        {children}
      </button>
    </>
  );
};

export default button;

