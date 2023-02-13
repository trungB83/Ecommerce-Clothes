import "assets/styles/thanks.scss"
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import { Steps } from "antd";
import Header from "components/Header";
import Footer from "components/Footer";
import './thanks.scss'

const { Step } = Steps

function ThanksAfterOrder() {
    useEffect(() => {
        const timeout = setTimeout(() => {
            window.location.replace('http://localhost:3000/');
        }, 10000);

        return () => clearTimeout(timeout);
    }, []);
    return (
        <>
            <Header />
            <section className="checkout-complete mpad">
                <div className="container">
                    <Steps current={2} className="step-bradcrumb">
                        <Step title="Hoàn thành" description="Giỏ hàng" />
                        <Step title="Hoàn thành" description="Tạo Đơn hàng" />
                        <Step title="Hoàn thành" description="Hoàn thành tạo đơn hàng" />
                    </Steps>
                    <div className="body">
                        <div className="box">
                            <h2>
                                <strong>Vui lòng kiểm tra email của bạn</strong> để nhận thông tin chi tiết đơn hàng bạn vừa đặt.
                            </h2>
                            <p>
                                Cảm ơn bạn đã tin tưởng cửa hàng chúng tôi, đơn hàng của bạn đã được đặt thành công, trang sẽ tự động chuyển hướng về trang chủ trong 10 giây
                            </p>
                            <Link to="/">Trở về trang chủ</Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}
export default ThanksAfterOrder
