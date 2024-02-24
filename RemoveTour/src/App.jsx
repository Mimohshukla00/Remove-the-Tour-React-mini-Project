import { useState } from "react";
import Tour from "./Tour"
import Data from "./Data";

function App() {
  const[Tours,setTours]=useState(Data)

  function removeTour() {
    const newTour=Tours.filter(tour=> tour.id!==id)
    setTours(newTour)
    
  }

  return (
    <>
      <div>
        <h2>Plan With Love</h2>
        <Tour Tours={"Tour"}></Tour>
      </div>
    </>
  );
}

export default App;
