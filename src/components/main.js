import React from "react";
import HornedBeasts from "./HornedBeasts";

class main extends React.Component {
  render() {
    return (
      <main>
      <div>
      {this.props.allbeast.map((post, idx) => {
        return (
          <HornedBeasts
          url={post.image_url}
          title={post.title}
          description={post.description}
          keyword ={post.keyword}
          horns = {post.horns}
          key={idx}
          showthepost={this.props.showpost}
          
          />
          );
        })}
        </div>
        </main>
    );
  }
}
export default main;
