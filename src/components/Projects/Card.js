import React from "react";
import { ProjectData } from "./ProjectData";

const Card = () => {
  return (
    <>
      {ProjectData.map((item) => {
        return (
          <div className="col-lg-3 col-md-4 col-sm-6 col-12">
            <div className="card">
            <div className="images p-1"><img src={item.img} className="card-img-top" alt="..." /></div>
              
              <div className="card-body">
                <h5 className="card-title ">{item.title}</h5>
               <div className="mt-3">
               <a href={item.githubLink} className="button ">
                  Githubcode
                </a>
               </div> 
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
