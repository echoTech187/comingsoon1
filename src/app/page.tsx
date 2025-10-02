"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [placeholder, setPlaceholder] = useState('');
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  return (
    <>
      <div className={`${loading ? '' : 'preloader-hidden'} preloader`}>
        <div className="spinner">

          <div className="bounce-1"></div>
          <div className="bounce-2"></div>
          <div className="bounce-3"></div>

        </div>

      </div>
      <div className="hero">
        <div className="front-content">
          <div className="container-mid">
            <div className="animation-container animation-fade-down" data-animation-delay="0">
              <Image className="img-responsive logo" src={"/assets/img/logo.png"} width={170} height={150} alt="image" priority={true} />
            </div>
            <div className="animation-container animation-fade-right" data-animation-delay="300">

              <h1>We're Coming Soon..</h1>

            </div>


            <div className="animation-container animation-fade-left" data-animation-delay="600">

              <p className="subline">We're working on our new website. Join our newsletter and get notifed.</p>

            </div>


            <div className="animation-container animation-fade-up" data-animation-delay="900">

              <div className="open-popup" onClick={() => window.open("https://optimaluntuknegri.id", "_parent")}>Notify Me</div>

            </div>


          </div>

          <div className="footer">


            <div className="animation-container animation-fade-up" data-animation-delay="1200">

              <p>© 2017 Optimal Penerbit | Design by <a href="https://optimaluntuknegri.id">Optimal</a></p>

            </div>


          </div>

        </div>
        <div className="background-content parallax-on">

          <div className="background-overlay"></div>
          <div className="background-img layer" data-depth="0.05"></div>

        </div>
      </div>
      

      <script type="text/javascript" src="/assets/js/plugins.js"></script>
      <script type="text/javascript" src="/assets/js/main.js"></script>
    </>
  );
}
