import react from "react";


 function About(props){
 return (
       <aside>
        <img alt="blog logo"src={props.image}/>
        <p>{props.about}</p>
    </aside>
 );
}
export default About;