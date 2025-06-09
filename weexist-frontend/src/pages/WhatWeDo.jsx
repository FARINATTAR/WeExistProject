import Navbar from "../Components/Navbar";
import IntroSection from "../Components/IntoWhatWeDo";
import Timeline from "../Components/Timeline";
import Footer from "../Components/Footer";
import WeExistJourneyStory from "../Components/Journey";

const WhatWeDo = () => {
  return (
    <div>
      <div>
      <Navbar />
      </div>
      <div className="bg-gradient-to-br from-orange-50 via-pink-50 to-blue-50">

      <div>
        <IntroSection />
      </div>
      <div>
        <Timeline/>
      </div>
      <div>
        <WeExistJourneyStory/>
      </div>

      <div>
        <Footer/>
      </div>
</div>

    </div>
  );
};

export default WhatWeDo;
