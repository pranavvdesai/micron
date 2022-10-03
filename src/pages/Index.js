import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import DemoHero from "../components/hero/DemoHero";
import Divider from "../components/divider/Divider";
import CTA from "../components/cta/CTA";
import AboutCard from "../components/about/AboutCard";
import AboutContent from "../components/about/AboutContent";
import CoolFacts from "../components/about/CoolFacts";
import Testimonial from "../components/about/Testimonial";
import TemplateFeature from "../components/feature/TemplateFeature";
import TemplateDemos from "../components/demos/TemplateDemos";

export default function DemoPage() {
  return (
    <>
      <Header />

      <DemoHero
        title="E-cycle"
        subTitle="It's crafted with the latest trend of design & coded with all modern approaches."
        btnInfo={[
          {
            color: "primary",
            text: "Explore Now",
            path: "/home1",
            icon: "bi-arrow-right",
          },
          {
            color: "minimal",
            text: "Go Dashboard",
            path: "/dashboard",
            icon: "bi-pie-chart-fill",
          },
        ]}
        heroThumbnail="img/illustrator/2.png"
      />

      <Divider />

      <CTA
        backgroundColor="primary" // try 'success', 'warning', 'danger', 'info' etc
        text="Beautifully designed & coded, NFT buying & selling React JS template."
        buttonText="Purchase Now"
        buttonColor="warning"
        buttonURL="https://themeforest.net/item/funto-react-nft-marketplace/36593340"
        buttonIcon=""
      />

      <Divider />

      <div className="about-area">
        <AboutCard />

        <Divider />

        <AboutContent
          textSectionOrder="10"
          textSection={[
            "<h2 class='h2 fw-bold mb-3'>Digital arts are trends now. Welcome to the world of NFTs.</h2>",
            "<p class='fz-18'>It's crafted with the latest trend of design coded with all modern approaches. It's a robust & multi-dimensional usable template.</p>",
            "<a class='btn btn-primary rounded-pill mt-4' href='/#'>Know More</a>",
          ]}
          imageOrder="20"
          image="img/illustrator/4.png"
        />

        <Divider />

        <CTA
          backgroundColor="primary" // try 'success', 'warning', 'danger', 'info' etc
          text="Resources for getting started with Funto."
          buttonText="Get Started"
          buttonColor="warning"
          buttonURL="#"
          buttonIcon=""
        />

        <Divider />

        <AboutContent
          textSectionOrder="20"
          textSection={[
            "<h2 class='h2 fw-bold mb-3'>Digital arts are trends now. Welcome to the world of NFTs.</h2>",
            "<p class='fz-18'>It's crafted with the latest trend of design & coded with all modern approaches. It's a robust & multi-dimensional usable template.</p>",
            "<a class='btn btn-primary rounded-pill mt-4' href='/#'>Know More</a>",
          ]}
          imageOrder="10"
          image="img/illustrator/4.png"
        />

        <Divider />

        <CoolFacts
          coolFactsData={[
            {
              value: "3409",
              title: "Total Items",
            },
            {
              value: "7831",
              title: "Users",
            },
            {
              value: "45236",
              title: "NFTs",
            },
            {
              value: "247",
              title: "Daily Sale",
            },
          ]}
        />

        <Divider />

        <Testimonial testimonialTitle="Read some reviews from our beloved clients about our work." />
      </div>
      <Divider />

      <CTA
        backgroundColor="danger" // try 'success', 'warning', 'danger', 'info' etc
        text="Feeling the love with this React template?"
        buttonText="Purchase Now"
        buttonColor="dark"
        buttonURL="https://themeforest.net/item/funto-react-nft-marketplace/36593340"
        buttonIcon=""
      />

      <Divider />

      <Footer />
    </>
  );
}
