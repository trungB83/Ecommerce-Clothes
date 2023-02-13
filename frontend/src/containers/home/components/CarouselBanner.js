import { Carousel } from 'antd';
import bannerImg from "assets/images/20200718_1595086365_listen-to-the-cicadas-web.jpg";
// import bannerImg2 from "assets/images/banner2.webp"
import bannerImg3 from "assets/images/loginbanner.webp"


const CarouselBanner = () => {
    return (
        <>
            <Carousel autoplay>
                <div>
                    <div className="main-banner">
                        <img className="banner-img" src={bannerImg} alt="banner" />
                    </div>
                </div>
                <div>
                    <div className="main-banner">
                        <img className="banner-img" src={bannerImg3} alt="banner" />
                    </div>
                </div>
            </Carousel>
        </>
    )
}

export default CarouselBanner