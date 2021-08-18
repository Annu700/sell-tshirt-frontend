import React from "react"
import Menu from "./Menu";
import Home from "./Home";

const Base = ({
    title="My Title",
    description="My description",
    className="bg-dark text-white p-4",
    Children
}) => (
     <div>
         <Menu />
         <div className="container-fluid">
             <div className="jumbortron bg-dark text-white text-center">
                <h2 className="display-4">{title}</h2> 
                <p className="lead">{description}</p>
             </div>
             <div className={className}>{Children}</div>
         </div>
         <footer className="footer bg-dark mt-auto py-3">
             <div className="container-fluid bg-success text-white text-center">
                 <h4>If you got any question, feel free to reach out!</h4>
                 <button className="btn btn-warning btn-lg">Contact Us</button>
             </div>
             <div className="container">
                  <span className="text-muted">An Amazing Mern Bootcamp</span>
             </div>
         </footer>
     </div>
)

export default Base;