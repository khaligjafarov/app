// import { useState } from "react";

// function App() {

//   const [a,seta] = useState(10)
//   return (
//     <div className="app">
//       <h1>{a}</h1>
//       <button onClick={() => seta((t)=>t+5)}>+</button>
//      <button onClick={() => seta((t)=>t-5)}>-</button>
//     </div>
//   );
// }

// export default App;

import { useState } from "react";

function school() {
    const [a, seta] = useState();

    return(
        <>
            <h1>Salam,mən {a}</h1>
            <button
            type="button"
            onClick={()=>seta("Xaliqəm.")}
            >0</button>
            <button
            type="button"
            onClick={()=>seta("əlaçıyam.")}
            >1</button>
             <button
            type="button"
            onClick={()=>seta("yaxşı oxuyanam.")}
            >2</button>
             <button
            type="button"
            onClick={()=>seta("orta oxuyanam.")}
            >3</button>
        </>
    )
}
export default school;
