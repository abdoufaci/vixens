import Image from "next/image";
import banner from '../public/banner.jpg'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";



const Banner = () => {
    return(
        <div className="caro">
            <div className='welcome'>
                <h1 id="c">Welcome to the</h1>
                <h1 id="b">Vixens</h1>
                <img id='a' loading='lazy' src="https://media.discordapp.net/attachments/682649341302931476/875503179771547678/Untitled-3.jpg?width=839&height=406" alt="" />
            </div>
        <div className="car">
        <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
        >
            <div>
                <div className="banner">
                    <div className="script">
                        <h3>Vixens Team</h3>
                        <h1>Vixens Hoodie</h1>
                        <h3>Get Yours Now !</h3>
                    </div>
                    <button>Buy Now</button>
                </div>
            </div>
            <div>
                <div className="valo"></div>
            </div>
        </Carousel>
        </div>
        </div>
    )
}

export default Banner;