import React, { useState } from "react";
import room from "../assets/room.png"
import aboutMe from "../assets/aboutme.PNG"
import contact from "../assets/contact.PNG"
import skills from "../assets/skills.png"
import projects from "../assets/projects.PNG"
import achievement from "../assets/achievement.PNG"

function Home(props){
    const [animation,setAnimation] = useState("room")
    function ClickHandle(event){
        props.pageName(event.target.alt)
        setAnimation("room animation-content-out")
    }
    return(
        <div className={animation}>
            <img className="roomlayout" src={room} alt="" />
            <div className="furniture aboutme" onClick={ClickHandle}>
                <img src={aboutMe} alt="AboutMe" />
                <p className="text">About Me</p>
            </div>
            <div className="furniture contact" onClick={ClickHandle}>
                <img src={contact} alt="Contact" />
                <p className="text">Contact</p>
            </div>
            <div className="furniture skill" onClick={ClickHandle}>
                <img src={skills} alt="Skill" />
                <p className="text">Skill</p>
            </div>
            <div className="furniture projects" onClick={ClickHandle}>
                <img src={projects} alt="Project" />
                <p className="text">Projects</p>
            </div>
            <div className="furniture achievement" onClick={ClickHandle}>
                <img src={achievement} alt="Achievement" />
                <p className="text">Achievement</p>
            </div>
            
        </div>
    )
}
export default Home;