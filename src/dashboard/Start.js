import React from 'react'
import ActivityTabuser from "../components/dashboard/activityTabuser/ActivityTabuser";
import MonthlyVisitorChart from "../components/dashboard/charts/MonthlyVisitorChart";
import PriceHistory from "../components/dashboard/charts/PriceHistory";
import StatisticsChart from "../components/dashboard/charts/StatisticsChart";
import StatisticsChartTwo from "../components/dashboard/charts/StatisticsChartTwo";
import CreateNewButton from "../components/dashboard/createNew/CreateNewButton";
import FeaturedCard from "../components/dashboard/featuredCard/FeaturedCard";
import DashboardHeader from "../components/dashboard/header/DashboardHeader";
import HeroCard from "../components/dashboard/hero/HeroCard";
import TodaysPick from "../components/dashboard/todaysPick/TodaysPick";
import TopAuthor from "../components/dashboard/topAuthor/TopAuthor";
import TopBuyer from "../components/dashboard/topBuyer/TopBuyer";
import TrendingAuction from "../components/dashboard/trendingAuction/TrendingAuction";

function Start() {
  return (
    <>
      <DashboardHeader />

      <div className="admin-wrapper">
        <div className="container">
          <div className="row g-4">
            <div className="col-12 col-xxl-12">
              <div className="row g-4">
                {/* Google Maps */}
                <div className="col-12 col-lg-12">
                  <div className="maps-wrap">
                    <iframe
                      title="Google Maps"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14047.882048906753!2d-0.14268817855593444!3d51.50701170390822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sbd!4v1570696571917!5m2!1sen!2sbd"
                    />
                  </div>
                </div>
              </div>
            </div>

           

            {/* Activity Tab */}
            <ActivityTabuser />

            <TodaysPick
              title="Next Stop"
              btnPath="/featured-items"
              btnText="View all"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Start