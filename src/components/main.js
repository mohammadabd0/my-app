import React from "react";
import HornedBeasts from "./HornedBeasts";
import allbeast from "./data.json";

class main extends React.Component {
  render() {
    return (
      <div className="main">
        {this.props.allbeast.map((post, idx) => {
          return (
            <>
              <HornedBeasts
                url={post.image_url}
                title={post.title}
                description={post.description}
                keyword ={post.keyword}
                horns = {post.horns}
                key={idx}
                showthepost={this.props.showpost}
              ></HornedBeasts>
            </>
          );
        })}
      </div>
    );
  }
}
export default main;
