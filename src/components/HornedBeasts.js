// import React from "react";

// class HornedBeasts extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h2>{this.props.title}</h2>
//                 <img src={this.props.image_url} alt={this.props.keyword} title={this.props.horns} />
//                 <p>{this.props.description}</p>
//             </div>
//         )
//     }
// }
// export default HornedBeasts;
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


class HornedBeasts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            numOfPets: 0
        }
    }

    // for adding 1 to the clicked on cat
    increaseNumberOfPets = () => {
        this.setState({
            numOfPets: this.state.numOfPets + 1
        })
    }

    render() {
        return (
            <div>
                {/* <p>{this.props.catName}</p>
                <p>{this.state.numOfPets}</p>
                <img onClick={this.increaseNumberOfPets} src={this.props.catImg} alt={this.props.catName} width={250} /> */}

                <Card style={{ width: '18rem' }}>
                    <Card.Img className='cardCat' variant="top" src={this.props.url} alt={this.props.title} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.description}--- 
                            Number of Pets {this.state.numOfPets}
                        </Card.Text>
                        <Button onClick={this.increaseNumberOfPets} variant="primary">vote</Button>
                    </Card.Body>
                </Card>
            </div>

        )
    }
}
export default HornedBeasts;

