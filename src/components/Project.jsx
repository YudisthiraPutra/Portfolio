import React, {useEffect, useState } from "react";
import listOfProject from "../staticData/project";

function Project(){
    const [showedProject, setShowed] = useState("");
    const [cardAnimation,setCardAnimation]=useState("animation-content-in")
    const [num, setNum] = useState(0);

    function SetSelected(number){
            const current = listOfProject.find(item=>item.index===number)
            setShowed(
                <div className="project-card">
                    <img className="project-img" src={current.img} alt="Journ" />
                    <h1>{current.title}</h1>
                    <a href={current.link}><button className="website-button">View</button></a>
                </div>
            )
    }

    function ClickHandle(event){
        const direction = event.target.id;
        console.log(num)
        if(num!==0 || num!==listOfProject.length ){
            setCardAnimation("animation-content-out")
        }
        if(direction==="up")
        {
            setTimeout(()=>setCardAnimation("animation-content-in"),300)
            if(num>0){
                setNum((prevValue)=>prevValue-1)
                SetSelected(num)
            }
        }
        else{
            setTimeout(()=>setCardAnimation("animation-content-in"),300)
            if(num<listOfProject.length-1){
                setNum((prevValue)=>prevValue+1)
                SetSelected(num)
            }
        }
    }

    useEffect(()=>{
       setTimeout(()=>SetSelected(num),300)
    },[num])

    return (
        <div className="dynamic-content animation-content-in">
            <div className="button" onClick={ClickHandle}>
                    <svg id="up" width="68" height="32" viewBox="0 0 68 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 30.7083L28.1667 3.54165C31.375 0.333312 36.625 0.333312 39.8333 3.54165L67 30.7083" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
            </div>
            <div className={cardAnimation}>
                {showedProject}
            </div>

            <div id="down" className="button" onClick={ClickHandle}>
                <svg id="down" width="68" height="32" viewBox="0 0 68 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M67 1.29163L39.8333 28.4583C36.625 31.6666 31.375 31.6666 28.1667 28.4583L1 1.29163" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
        </div>
    )
}

export default Project;