import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div className="w-full flex items-center justify-center">
    {
    cart.length > 0  ? 
    (<div className="w-8/12 flex justify-between">


      <div className="w-8/12 flex flex-col">
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div className="flex flex-col mt-20 ml-10 mb-10">

        <div className="flex flex-col space-y-5">
          <div className="">
            <div className="font-serif text-xl font-bold text-green-500">Your Cart</div>
            <div className="font-serif text-4xl text-green-500">SUMMARY</div>
          </div>
          <p className="font-bold">
            <span>Total Items: {cart.length}</span>
          </p>
        </div>

        <div className="flex flex-col space-y-3">
          <p className="text-sm ">Total Amount: ${totalAmount}</p>
          <button className="w-full h-[40px] rounded-md bg-green-500">
            CheckOut Now
          </button>
        </div>

      </div>


    </div>) : 
    (<div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center">
      <h1 className="font-serif font-bold mt-2">Your Cart is Empty!</h1>
      <Link to={"/"}>
        <button className="w-[150px] h-[40px]  bg-green-500 rounded-md text-white mt-5"> 
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
