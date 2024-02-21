import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
import "./style.css";

export class Thumbnails extends React.Component {
  mainRef = React.createRef();
  thumbsRef = React.createRef();

  componentDidMount() {
    if (
      this.mainRef.current &&
      this.thumbsRef.current &&
      this.thumbsRef.current.splide
    ) {
      this.mainRef.current.sync(this.thumbsRef.current.splide);
    }
  }

  renderSlides() {
    return this.props.images?.map((slide) => (
      <SplideSlide className="SLIDES" key={slide.src}>
        <img src={slide} alt="" width={"100%"} />
      </SplideSlide>
    ));
  }

  /**
   
Render the component.*
@return A React node.*/
  render() {
    const mainOptions = {
      type: "loop",
      perPage: 1,
      perMove: 1,
      gap: "1rem",
      pagination: false,
      arrows: true,
      height: "20rem",
      cover: true,
      width: "100%",
      isNavigation: true,
      breakpoints: {
        640: {
          width: "100%",
          height: "35rem",
        },
      },
    };

    const thumbsOptions = {
      type: "slide",
      rewind: true,
      gap: "1rem",
      pagination: false,
      fixedWidth: 200,
      fixedHeight: 110,
      cover: true,
      focus: "center",
      isNavigation: true,
      arrows: false,
      dragMinThreshold: {
        mouse: 20,
        touch: 10,
      },
      breakpoints: {
        640: {
          fixedWidth: 66,
          fixedHeight: 38,
        },
      },
    };

    return (
      <div className="wrapper">
        <Splide
          options={mainOptions}
          ref={this.mainRef}
          aria-labelledby="thumbnail-slider-example"
          className="splide-container"
        >
          {this.renderSlides()}
        </Splide>

        <Splide
          options={thumbsOptions}
          ref={this.thumbsRef}
          aria-label="The carousel with thumbnails. Selecting a thumbnail will change the main carousel"
          className="thumb-container"
        >
          {this.renderSlides()}
        </Splide>
      </div>
    );
  }
}
