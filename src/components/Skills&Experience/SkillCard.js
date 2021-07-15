import React from "react";
import SkillsList from "./SkillsList";


const SkillCard = () => {
  return (
    <>
      {SkillsList.map((item) => 
       
          <>
            <div className="col-lg-6 col-12 py-2">
              <div className="skill-div d-flex">
                <img src={item.img} alt="" />
                <div>
                  <div className="slill-title">{item.title}</div>
                  <div className="skill-details my-1">
                    {item.skills.map((items) => (
                      <>
                        <div className="skill-lists">{items}</div>
                      </>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
      )}
    </>
  );
};

export default SkillCard;
