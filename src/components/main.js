  
import React from "react";
import HornedBeasts from "./HornedBeasts";
import data from './data.json'

class main extends React.Component {
    render() {
        return (
            <div className = "main">
               
   
               { data.map((post,idx) =>{
                return(
                    <> 
                      <HornedBeasts title={post.props} pargraph={post.description} url={post.image_url} key={idx} ></HornedBeasts>

                    </>
   
                )   
               })}
              </div>
         
           );
       
   }
}
export default main;


