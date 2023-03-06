import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { CreateContainer, Header, MainContainer } from "./components";
import { AnimatePresence } from "framer-motion";
import { useStateValue } from "./context/StateProvider";
import { getAllFoodItems } from "./utils/firebaseFunctions";
import { actionType } from "./context/reducer";

const App = () => {
  const [{ foodItems }, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllFoodItems().then(data => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AnimatePresence wait>
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />
        <div className="mt-14 md:mt-20 px-4  md:px-16 py-4 w-ful">
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/CreateContainer" element={<CreateContainer />} />
          </Routes>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default App;
