import React, { useState, useEffect } from "react";

const Home = () => {
  const texts = [
    "MEANINGFUL",
    "BEAUTIFUL",
    "RESPONSIBLE",
  ]

  const [index, setIndex] = useState(0);
  const [currentText, setCurrentText] = useState(texts[index]);

  useEffect(() => {
    setCurrentText(texts[index])
  }, [index])

  useEffect(() => {
    const interval = setTimeout(() => {
      setIndex(index === texts.length - 1 ? 0 : index + 1)       
    }, 2000);
  }, [currentText])

    

    return (
      <div className="home-page">
        <div className="page-element home-info">
          <div className="container-fluid">
            <div className="row">
              <div className="col-8 d-flex">
                <img src="./images/home/logo-icon.svg" alt="logo" />
                <div className="info-content">
                  Hello, My name is
                  <div className="info-name">
                    Nguyen Thuy Duong
                  </div>
                </div>
              </div>
              <div className="col-4">
              “I'm creative, open-minded and a fast learner. I have a strong desire to know, to understand, to grow, to create, to transform, to improve and to share. My dream is to improve people's lives through my designs”
              </div>
            </div>
          </div>
        </div>
        <div className="page-element">
          <div className="home-showcase">
            <div className="img-container">
              <img src="./images/home/Showcase.png" alt="showcase"/>
              <div className="img-text">
                Hello!
                <img className="img-smile" src="./images/icons/smile.svg" alt="smile"/>
                <img className="img-ellipe" src="./images/icons/ellipse.svg" alt="smile"/>
                Welcome to my website.
                <img className="img-ellipe" src="./images/icons/ellipse.svg" alt="smile"/>
                I'm delighted to share my portfolio with you!
                <img className="img-ellipe" src="./images/icons/ellipse.svg" alt="smile"/>
              </div>
            </div>
          </div>
        </div>
        <div className="page-element home-info2">
          <div className="container-fluid">
            <div className="row">
              <div className="col-5 d-flex">
                <div className="info-content">
                  19/08/1998 __________
                  <div className="info-lage">
                   I’m UX/UI Designer
                  </div>
                </div>
              </div>
              <div className="col-1">
                April/2023
              </div>
              <div className="col-6 text-right">
                Don't just imagine, create
              </div>
            </div>
          </div>
        </div>
        <div className="page-element home-info3">
          <div className="container-fluid">
            <div className="row">
              <div className="col-6 child1">
                <div className="text-normal">
                  Let’s Create
                </div>
                <div className="text-large">
                  {currentText}
                </div>
                <div className="d-flex">
                  <img src="./images/home/Rectangle35.png" alt="Rectangle35"/>
                  <div className="brands text-normal">
                    Brands <span className="brands-line"></span>
                  </div>
                </div>
              </div>
              <div className="col-4 child2">
                <img src="./images/home/Rectangle36.png" alt="Rectangle35"/>
              </div>
              <div className="col-2 child3">
                <div>
                  <img src="./images/home/Rectangle34.png" alt="Rectangle35"/>
                  <div className="small-img">
                    <img src="./images/home/Rectangle440.png" alt="Rectangle35"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Home;