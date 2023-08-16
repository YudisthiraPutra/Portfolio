import React, { useEffect } from "react";
import listOfAchievement from "../staticData/achievement";

function Achievement (){

    useEffect(()=>{
        console.log(listOfAchievement[0].year);
        const year = listOfAchievement[0]
        console.log(year.achievement[0][1])
    },[])
    return ( 
        <div className="Scrollable-content animation-content-in">
            {listOfAchievement.map((item)=>{
                return (<div className="achievement-card">
                    <div className="card-content">
                        <h2 className="year">{item.year}</h2>
                        {item.achievement.map((item)=>{
                            return(
                            <div className="list">
                                <h3 className="title">{item[0]}</h3>
                                <p className="position">{item[1]}</p>
                            </div>)
                        })}
                    </div>
                    <div className="card-icon">
                        <div className="circle"></div>
                        <div className="line"></div>
                    </div>
                </div>)})}
        </div>
    )
}

export default Achievement;