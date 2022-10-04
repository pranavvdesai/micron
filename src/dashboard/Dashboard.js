import ActivityTab from "../components/dashboard/activityTab/ActivityTab";
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

const Dashboard = () => {
    return(
        <>
            <DashboardHeader />

            <CreateNewButton />

            <div className="admin-wrapper">
                <div className="container">
                    <div className="row g-4">
                    
                        <div className="col-12 col-xxl-12">
                            <div className="row g-4">
                                
                                {/* Hero Card */}
                                <HeroCard 
                                    backgroundImage="img/bg-img/44.jpg" 
                                    heading="Ratings" 
                                    subHeading="See the ratings of your nearest dumpyard"
                                    buttonGroup={[
                                        {
                                            style: "warning",
                                            path: "/explore1",
                                            text: "View"
                                        },
                                        
                                    ]}
                                />


                                

                            </div>
                        </div>
                        
                        

                        {/* Activity Tab */}
                        <ActivityTab name="Dump data (amount of stuff recycled)" />
                        <ActivityTab name="Ratings (on what basis)" />


                        <PriceHistory 
                            title="Price History" 
                            icon="img/core-img/ethereum.png" 
                        />

                        

                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;