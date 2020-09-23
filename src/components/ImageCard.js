import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super();

    this.state = { spans: 0};
    
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    // this waits for the load before doing what we want in this case get hieght
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 150);

    this.setState({ spans});
  }

  render() {
    const { description, urls } = this.props.image;
    return (
      <div>
        <img 
        ref ={this.imageRef}
        alt={description}
        src={urls.regular}
        />
      </div>
    );
  }
}

export default ImageCard;