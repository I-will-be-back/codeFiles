import React, { Component } from 'react';
import Swiper from 'swiper';
import { getCarousel, getNewAlbum } from '../../api/recommend';
import { createAlbumByItem } from '../..//model/album'
import 'swiper/dist/css/swiper.css';
import './recommend.styl';

class Recommmend extends Component {
  state = {
    slideList: [],
    albumList: [],
  }
  componentDidMount() {
    getCarousel().then(res => {
      this.setState({
        slideList: res.data.slider
      }, () => {
        if (!this.sliderSwiper) {
          this.sliderSwiper = new Swiper('.slider-container', {
            loop: true,
            autoplay: 3000,
            pagination: '.swiper-pagination'
          });
        }
      })
    })
    getNewAlbum().then(res => {
      let albumList = res.albumlib.data.list;
      console.log(albumList);
      this.setState({
        albumList
      })
    })
  }
  renderAlbum() {
    const { albumList = [] } = this.state;
    return albumList.map(item => {
      const album = createAlbumByItem(item);
      return (
        <div className="album-wrapper" key={album.mId}>
          <div className="left">
            <img src={album.img} width="100%" height="100%" alt=""/>
          </div>
          <div className="right">
            <div className="album-name">
              { album.name }
            </div>
            <div className="singer-name">
              { album.singer }
            </div>
            <div className="public-time">
              { album.publicTime }
            </div>
          </div>
        </div>
      )
    })
  }
  renderSwiperItem() {
    const { slideList } = this.state;
    return (
      <>
        {
          slideList.map((slider) => {
            return (
              <div className="swiper-slide" key={slider.id}>
                <a href={slider.linkUrl} className="slider-nav">
                  <img src={slider.picUrl} width="100%" height="100%" alt=""/>
                </a>
              </div>
            )
          })
        }
      </>
    )
  }
  render() {
    return ( 
      <div className="music-recommend">
        <div>
          <div className="slider-container">
            <div className="swiper-wrapper">
              { this.renderSwiperItem() }
            </div>
            <div className="swiper-pagination"></div>
          </div>
          <div className="album-container">
            <h1 className="title">最新专辑</h1>
            <div className="album-list">
              { this.renderAlbum() }
            </div>
          </div>
        </div>
      </div>
     );
  }
}
 
export default Recommmend;
