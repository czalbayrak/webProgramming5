import { useState } from "react";
import ProductList from "./components/ProductList";

function App(){
  const [showProducts,setShowProducts]=useState(false);

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto", padding: "16px" }}> 
     <h1>React Product Dashboard</h1>

      <button onClick={()=> setShowProducts(!showProducts)}>
        {showProducts ? "Hide Products" : "Show Products"}
      </button>

      {showProducts && <ProductList />}
    </div>
  );
}

export default App;