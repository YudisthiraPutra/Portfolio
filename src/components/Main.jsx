import React, { useEffect, useState } from "react";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Skill from "./Skill";
import Project from "./Project";
import Achievement from "./Achievement";

function Main(){
    const [subtitle, setSubtitle] = useState("Portfolio");
    const [isIdle,setIdle] = useState(true);
    const [subAnimation, setSubAnimation] = useState("animation-subtitle-in")
    const [dynamicAnimation, setDynamicAnimation] = useState("content dynamic animation-content-in")
    const [btnAnimation, setBtnAnimation] = useState("backbutton animation-content-in")
    const [current,setCurrent] = useState('')
    const [selectedPage,setSelectedPage] = useState();


    function IdleSubtitle(){
        setSubAnimation("animation-subtitle-out")
        if(subtitle === "Portfolio"){
            setTimeout(()=>{
                setSubAnimation("animation-subtitle-in")
                setSubtitle("Click on the items!");
            },300)
            
        }
        else if(subtitle === "Click on the items!"){
            setTimeout(()=>{
                setSubAnimation("animation-subtitle-in")
                setSubtitle("Portfolio");
            },300)
        }
    }

    function PageTransition(name){
        switch(name){
            case "AboutMe":
            setSelectedPage(<AboutMe/>)
            break;
            case "Skill":
            setSelectedPage(<Skill/>)
            break;
            case "Achievement":
            setSelectedPage(<Achievement/>)
            break;
            case "Contact":
            setSelectedPage(<Contact/>)
            break;
            case "Project":
            setSelectedPage(<Project/>)
            break;
            default:
        }
    }

    function PageSubtitle(name){
        setSubAnimation("animation-subtitle-out")
        PageTransition(name);
        setTimeout(()=>{
            setIdle(false)
            setBtnAnimation("backbutton animation-content-in")
            setSubAnimation("animation-subtitle-in")
            setCurrent(name);
        },300);
    }

    function BackHandle(){
        setSubAnimation("animation-subtitle-out")
        setBtnAnimation("backbutton animation-content-out")
        setDynamicAnimation("content dynamic animation-content-out")
        setTimeout(()=>{
            setIdle(true)
            setSubAnimation("animation-subtitle-in")
            setDynamicAnimation("content dynamic animation-content-in")
        },600)
    }
    

    useEffect(()=>{
       setTimeout(IdleSubtitle,2000)
    },[subtitle])

    return(
        <div className="container">
            <div className={dynamicAnimation}>
                {isIdle && 
                <Home
                pageName={PageSubtitle}/>}
                {!isIdle && selectedPage}
            </div>
            <div className="content static text">
                <div>
                    <h1>Yudisthira's</h1>
                    {isIdle?
                    <p className={subAnimation}>{subtitle}</p>
                    :
                    <p className="animation-subtitle-in">{current}</p>}
                </div>

                {!isIdle && (
                <div className={btnAnimation}>
                    <button className="btn-animation" onClick={BackHandle}>
                        <svg fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M39.1 82H58.9C75.4 82 82 75.4 82 58.9V39.1C82 22.6 75.4 16 58.9 16H39.1C22.6 16 16 22.6 16 39.1V58.9C16 75.4 22.6 82 39.1 82Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M54.145 63.4141L39.7717 49L54.145 34.5858" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>)}
                

            </div>
        </div>
    )
}

export default Main;