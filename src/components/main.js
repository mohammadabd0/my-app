  
import React from "react";
import HornedBeasts from "./HornedBeasts";
import data from './data.json'

class main extends React.Component {
    render() {
        return (
            <div className = "main">
               
   
               {
                data.map((post,idx) =>{
                return(
                    <> 
                      <HornedBeasts  url = {post.image_url}
                title = {post.title}
                description = {post.description}></HornedBeasts>

                    </>
   
                )   
               })}
              </div>
         
           );
       
   }
}
export default main;

