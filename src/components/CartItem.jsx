
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div className="">

      <div className="flex justify-between mt-10 space-x-10"> 

        <div className="w-8/12 ">
          <img src={item.image} className="w-full h-[225px]"/>
        </div>
        <div className="flex flex-col space-y-5">
          <h1 className="font-serif text-2xl">{item.title}</h1>
          <h1 className="">{item.description.substr(0,100)}...</h1>
          <div className="flex justify-between ">
            <p className="font-serif font-extrabold text-green-500">${item.price}</p>
            <div
            onClick={removeFromCart} className="w-[25px] h-[25px] rounded-full bg-red-300 flex justify-center items-center">
              <FcDeleteDatabase/>
            </div>
          </div>
          

        </div>
      </div>
      <div className="w-full h-[4px] bg-slate-600 rounded-md mt-5 mb-2"></div>

    </div>
  );
};

export default CartItem;
