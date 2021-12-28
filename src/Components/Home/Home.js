import Styles from "./Home.module.css";
import background from "./3.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from "./10.jpg";
import image2 from "./11.jpg";
import image4 from "./12.jpg";
import image5 from "./13.jpg";
import image6 from "./6.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    fade: true,
    pauseOnHover: true,
    arrows: false,
    appendDots: (dots) => (
      <div
        style={{
          marginBottom: "35px",
          marginLeft: "38%",
          width: "8rem",
          backgroundColor: "#ddd",
          borderRadius: "10px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <main className={Styles.main}>
      <section className={Styles.showCase}>
        <div className={Styles.imgContainer}>
          <img src={background} className={Styles.img} />
        </div>
        <div className={Styles.imgContent}>
          <p>WHICH STYLE ARE YOU?</p>
          <button>Visit gallery</button>
        </div>
      </section>
      <section className={Styles.content}>
        <div className={Styles.desc}>
          <p className={Styles.descTitle}>We Serve the best for you.</p>
          <p className={Styles.descLink}>
            ّFind beautiful home interior designs. Complete home interiors
            solution. An interior designer is someone who plans,
            researches,coordinates
            <br />
            <Link to="#">Read more</Link>
          </p>
        </div>
        <div className={Styles.section2}>
          <img src={image6} className={Styles.image} loading="lazy" />
          <div className={Styles.descS2}>
            <p className={Styles.descTitleS2}>
              We Provide You The Best Experience.
            </p>
            <p className={Styles.describtionS2}>
              interior design is the art and science of enhancing the interior
              of a buliding to achieve a healthier & more aesthetically pleasing
              environment.
              <br />
              <br />
              interior Design Compaines Usa - Quick And Easily Found At Asksly!
              Many Products. Easy Acces. Quick Results.
            </p>
            <button className={Styles.descButton}>Learn more</button>
          </div>
        </div>

        <div className={Styles.section3}>
          <div className={Styles.descS3}>
            <p className={Styles.descTitleS3}>
              Architects With Diffrent Approach.
            </p>
            <p className={Styles.describtion}>
              Complete home interiros solution. An interior designer is someone
              who plans, researches, coordinates.
            </p>
            <button className={Styles.descButton}>Learn more</button>
          </div>
          <div className={Styles.slider}>
            <Slider {...settings}>
              <div>
                <img src={image1} className={Styles.sliderImg} loading="lazy" />
              </div>
              <div>
                <img src={image2} className={Styles.sliderImg} loading="lazy" />
              </div>
              <div>
                <img src={image4} className={Styles.sliderImg} loading="lazy" />
              </div>
              <div>
                <img src={image5} className={Styles.sliderImg} loading="lazy" />
              </div>
            </Slider>
          </div>
        </div>
        <div className={Styles.section4}>
          <p className={Styles.descTitleS4}>
            Subscribe To Get The Latest News About Us.
          </p>
          <p className={Styles.descS4}>
            We recommended you to subscribe to our newspaper, Enter your email
            below to get our daily updte about us.
          </p>
          <div className={Styles.formContainer}>
            <input type="email" placeholder="Enter your email address..." />
            <button>Subscribe</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
