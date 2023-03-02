import CardProduct3 from "./CardProduct3";
import React, { Component } from "react";
import Slider from "react-slick";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 560,
          settings: {
            slidesToShow: 1.5,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 425,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <div className="banner2-control-1">
            <p>Featured</p>
            <button type="button" className="see-all">
                <p>See all  {" >>"}</p>
            </button>
        </div>
        <Slider {...settings}>
            <CardProduct3 img="/media/img/1.jpg" avt="/media/img/9.jpg"/>
            <CardProduct3 img="/media/img/2.jpg" avt="/media/img/10.jpg"/>
            <CardProduct3 img="/media/img/3.jpg" avt="/media/img/11.jpg"/>
            <CardProduct3 img="/media/img/4.jpg" avt="/media/img/12.jpg"/>
            <CardProduct3 img="/media/img/5.jpg" avt="/media/img/13.jpg"/>
            <CardProduct3 img="/media/img/6.jpg" avt="/media/img/14.jpg"/>
            <CardProduct3 img="/media/img/7.jpg" avt="/media/img/15.jpg"/>
            <CardProduct3 img="/media/img/8.jpg" avt="/media/img/16.jpg"/>
        </Slider>
      </div>
    );
  }
}