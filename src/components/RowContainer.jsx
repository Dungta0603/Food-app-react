import React, { useRef, useEffect } from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
const RowContainer = ({ flag, data, SrcollValue }) => {
  console.log(data);
  const rowcontainer = useRef();
  useEffect(() => {
    rowcontainer.current.scrollLeft += SrcollValue;
  }, [SrcollValue]);
  return (
    <div
      ref={rowcontainer}
      className={`w-full my-12 flex items-center gap-3 ${
        flag ? "overflow-x-scroll scrollbar-none" : "overflow-x-hidden"
      }
      `}
    >
      {data &&
        data.map(item => (
          <div
            key={item.id}
            className="w-300 min-w-[300px] md:min-w-350 md:w-350 h-auto  backdrop-blur-lg bg-gray-400 p-2 rounded-lg my-12 hover:drop-shadow-lg"
          >
            <div className="w-full flex items-center justify-between">
              <motion.image
                whileTap={{ scale: 1.2 }}
                src={item?.imageUrl}
                alt="c1"
                className="w-40 -mt-8 drop-shadow-2xl"
              />
              <motion.div
                whileTap={{ scale: 0.75 }}
                className="h-8 w-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md"
              >
                <MdShoppingBasket className=" text-white " />
              </motion.div>
            </div>
            <div className="w-full flex flex-col items-end justify-end ">
              <p className="text-textColor font-semibold text-base md:text-lg ">
                {item?.title}
              </p>
              <p className=" mt-1 text-sm text-gray-500 "> {item?.calories}</p>
              <div className="flex items-center gap-8">
                <p className="text-lg text-headingColor font-semibold ">
                  <span className="text-sm text-red-500 ">$</span> {item?.price}
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default RowContainer;
