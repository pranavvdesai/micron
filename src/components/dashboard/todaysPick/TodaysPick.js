import { Link } from "react-router-dom";
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import ScrollAnimation from "react-animate-on-scroll";

import TodaysDropData from "../../../data/todaysDrop/todays-drop.json";

const TodaysPick = (props) => {
    const { title, btnPath, btnText } = props;

    const TodaysDropCards = TodaysDropData.slice(0, 2).map((ele, index) => (
      <div className="nft-card card shadow-sm mt-4" key={index}>
        <div className="card-body">
          <div className="row align-items-center g-3">
            <div className="col-4">
              <div className="maps-wrap2">
                <iframe
                  title="Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14047.882048906753!2d-0.14268817855593444!3d51.50701170390822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sbd!4v1570696571917!5m2!1sen!2sbd"
                />
              </div>
            </div>

            <div className="col-8">
              {/* Meta Info */}
              <div className="meta-info">
                <div className="name-info d-flex align-items-center mb-3">
                  
                  <div className="name-author">
                    <OverlayTrigger
                      placement="left"
                      delay={{ show: 250, hide: 400 }}
                      overlay={
                        <Tooltip id={`todaysDrop${ele.id}`}>
                          {ele.title}
                        </Tooltip>
                      }
                    >
                      <Link
                        className="name d-block hover-primary text-truncate"
                        to="#"
                      >
                        {ele.title}
                      </Link>
                    </OverlayTrigger>
                    <Link
                      className="author d-block fz-12 hover-primary text-truncate"
                      to="#"
                    >
                      {ele.authorName}
                    </Link>
                  </div>
                </div>

                <div className="price-bid">
                  <div className="price">
                    <h6 className="mb-0 d-block fz-14 border border-2 rounded py-1 px-2 text-center">
                      {ele.price}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));

    return(
        <div className="col-12 col-md-6 col-xl-6">
            <ScrollAnimation animateIn="fadeInUp" delay={500} animateOnce={true} >
                <div className="card border-0 shadow-sm">
                    <div className="card-body p-4">
                        <div className="d-flex align-items-center justify-content-between mb-3">
                            <h5>{title}</h5>
                            <Link className="btn btn-primary btn-minimal" to={btnPath}>{btnText}</Link>
                        </div>

                        {TodaysDropCards}
                    </div>
                </div>
            </ScrollAnimation>
        </div>
    )
}

export default TodaysPick;