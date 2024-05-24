import React from 'react'
import './style.css'
import './reset.css'

export default function Banner() {
  return (
    <>
    <div className="wrappper-main">
    <header className="header">
                <div className="wrappper">
                    <div className="header-wrapper">
                        <div className="header-logo">
                            <a href="/" className="header-logo-link">
                                <img src="./src/assets/banner/logo-banner.svg" alt="Logo" />
                            </a>
                        </div>
                        <nav className="header-nav">
                            <ul className="header-list">
                                <li className="header-item">
                                    <a href="/" className="header-link">ОБЗОР</a>
                                </li>
                                <li className="header-item">
                                    <a href="/" className="header-link">ГОСТИ</a>
                                </li>
                                <li className="header-item">
                                    <a href="/" className="header-link">СЕКЦИИ</a>
                                </li>
                                <li className="header-item">
                                    <a href="/" className="header-link">КАРТА</a>
                                </li>
                                <li className="header-item">
                                    <a href="/" className="header-link">ПАРТНЕРЫ</a>
                                </li>
                                <li className="header-item">
                                    <a href="/" className="header-link">КОНТАКТЫ</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
           
            <div className="image">
                <div className="header-image">
                    <a href="/">
                        <img src="./src/assets/banner/item1.svg" alt="Image 1" />
                    </a>
                </div>
                <div className="header-image">
                    <a href="/">
                        <img src="./src/assets/banner/item2.svg" alt="Image 2" />
                    </a>
                </div>
                <div className="header-image">
                    <a href="/">
                        <img src="./src/assets/banner/item3.svg" alt="Image 3" />
                    </a>
                </div>
            </div>
            </header>
            {/* <main className="main">
                <section className="intro">
                    <video autoplay muted loop id="background-video">
                        <source src="/img/212818_small.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="banner-it-wordd">
                      IT
                    </div>
                    <p className="content-1">
                        16-17 august 2024 Issyk-Kul
                    </p>
                    <div className="content-2">
                        <img src="../img/svg/FESTIVAL.svg" alt="FESTIVAL" />
                    </div>
                    <p className="content-3">
                        Присоединяйтесь к крупнейшему мероприятию в Средней Азии по стартапам и технологиям
                    </p>
                    <p className="content-4">
                        Почему ты должен участвовать:
                    </p>
                    <div className="circles">
                        <div className="circle-1"></div>
                        <div className="circle-2"></div>
                        <div className="circle-3"></div>
                        <div className="circle-4"></div>
                    </div>
                </section>
            </main> */}

            <div className="main-wrapper-banner">
              <div className="container-banner">
                <div className="title-banner">
                  <div className="uptitle-banner">
                  <div className="word-it-banner">
                    IT
                  </div>
                  <div className="place-and-date">
                  16-17 августа <br/>
2024 Иссык-Куль
                  </div>
                  </div>
                  <div className="festival">
                  FESTIVAL
                  </div>
                  <div className="subt-wrap">
                  <div className="subtitle-banner">
                  Присоединяйтесь к крупнейшему мероприятию в Средней Азии по стартапам и технологиям
                  </div>
                  </div>
                  <div className="small-subt">
                  Почему ты должен участвовать:
                  </div>
                </div>
                <div className="cercles">
                  <img src="./src/assets/banner/cercle1.svg" alt="" />
                  <img src="./src/assets/banner/cercle2.svg" alt="" />
                  <img src="./src/assets/banner/cercle3.svg" alt="" />
                  <img src="./src/assets/banner/cercle4.svg" alt="" />



                </div>
                <div className="cards-banner">
                  <div className="card">
<div className="title-card">
Секции фестиваля
</div>
Получите максимум удовольствия от участия в разных мероприятиях фестиваля!
<div className="btn-know-more">
Узнать больше
<img src="./src/assets/banner/arrow 1 (1).svg" alt="" />
</div>
                  </div>
                  <div className="card">
<div className="title-card">
Секции фестиваля
</div>
Получите максимум удовольствия от участия в разных мероприятиях фестиваля!
<div className="btn-know-more">
Узнать больше
<img src="./src/assets/banner/arrow 1 (1).svg" alt="" />
</div>
                  </div>
                </div>
              </div>
            </div>
            </div>
    </>
  )
}
