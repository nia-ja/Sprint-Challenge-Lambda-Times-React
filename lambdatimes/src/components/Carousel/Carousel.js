import React, { Component } from 'react';
import { carouselData } from '../../data'
import '../../CSS/index.css';

export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      carousel: '',
      currentIndex: 0
    }
  }
  componentDidMount(){
    this.setState({ carousel: carouselData })
  }

  leftClick = () => {
    if (this.state.currentIndex === 0) {
      const lastSlide = this.state.carousel.length - 1;
      this.setState({currentIndex: lastSlide})
    } else {
      const prevSlide = this.state.currentIndex - 1;
      this.setState({currentIndex: prevSlide})
    }
  }

  rightClick = () => {
    const lastSlide = this.state.carousel.length - 1;
    if (this.state.currentIndex === lastSlide) {
      this.setState({currentIndex: 0})
    } else {
      const nextSlide = this.state.currentIndex + 1;
      this.setState({currentIndex: nextSlide})

    }

  }

  selectedImage = (index) => {
    return <img src={this.state.carousel[index]} alt={this.state.carousel[index]} style={{display: 'block'}} />
  }
  
  render(){
    console.log(this.state.carousel[this.state.currentIndex])
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        {this.selectedImage(this.state.currentIndex)}
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}