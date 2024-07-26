// Filename - App.js

import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    const notify = () => {
      toast.info('🦄 Wow so easy right!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        
        });

        toast.info('🦄 Wow so easy left!', {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          
          });

          toast.info('🦄 Wow so easy center!', {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            
            });
        
    };

    return (
        <div className="App">
            <button onClick={notify}>Click Me!</button>
            {/* ToastContainer to render the toasts */}
            <ToastContainer />
        </div>
    );
}

export default App;
