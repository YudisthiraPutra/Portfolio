import React from "react";
import listOfContact from "../staticData/contact";

function Contact(){
    return (
        <div className="dynamic-content animation-content-in">
            {listOfContact.map((item)=>{
                return(
                    <a href={item.link}>
                        <div  className="contact-info" onClick={()=>{}}>
                            {item.svg}
                            <p>{item.title}</p>
                        </div>
                    </a>
                )
            })}
        </div>
    )
}


export default Contact;