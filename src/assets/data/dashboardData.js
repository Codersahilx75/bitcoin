import img1 from "../img/1.png"; // Top Image
import img2 from "../img/2.png"; // Bottom Left Image
import img3 from "../img/3.png"; // Bottom Right Image
import extra from "../img/extra.png"

const dashboardData = {
  heading: "Follow the Money",
  subHeading: "Dodge the Scams",
  description:
    "Track the smartest traders, expose scams, and rank the most trusted influencers. Crypto transparency starts here!",
  buttons: [
    { text: "Get Started", style: "bg-blue-600 text-white" },
    { text: "See How It Works", style: "border  border-gray-400 text-white" },
  ],
  images: [
    { src: img1, alt: "Bitcoin Illustration" },
    { src: img2, alt: "Crypto Analysis" },
    { src: img3, alt: "Trading Insights" },
  ],
  extraImage: extra, // Extra Image for top, bottom, left, right
};

export default dashboardData;   
