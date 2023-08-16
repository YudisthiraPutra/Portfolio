import React, { useEffect, useState } from "react";
import listOfSkill from "../staticData/skill";

function Skill(){
    const [isIdle, setIdle] = useState(false)

    useEffect(()=>{
        setTimeout(() => {           
            setIdle(true)
         }, 200);
    },[])

    return (
        <div className="dynamic-content animation-content-in">
            {listOfSkill.map((item)=>{
                return (
                <div className="skill-package">
                    <p>{item.title}</p>
                    <div className="bar">
                        <div className="progress" style={isIdle?{width:item.percentage+'%'}:{}}> </div>
                    </div>
                </div>)

            })}
        </div>
    )
}

export default Skill;