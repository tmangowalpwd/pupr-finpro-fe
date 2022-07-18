import Hero from "./Hero";
import Card from "./Card";
import Perumahan from "./Perumahan";
import Bendungan from "./Bendungan";
import Apbn from "./Apbn";
import Sdm from "./Sdm";
import Topbar from "./Topbar";
import mainBg from "../img/bg-main.png";
import { useState } from "react";
import axios from "axios";
import { API_URL } from "../constants/API";
import { useEffect } from "react";

const Landing = () => {
  const [heroData, setHeroData] = useState({});

  const fetchBanner = async () => {
    try {
      const response = await axios.get(`${API_URL}/homepage`);

      setHeroData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchBanner()
  }, [])
  return (
    <div>
      <Topbar />
      <Hero
        image={heroData.image_url}
        title={heroData.title}
        description={heroData.description}
      />
      <br />
      <br />
      <br />
      <Card />
      <br />
      <br />
      <br />
      <Perumahan />
      <br />
      <br />
      <br />
      <Bendungan />
      <br />
      <br />
      <br />
      <Apbn />
      <br />
      <br />
      <br />
      <Sdm />
    </div>
  );
};

export default Landing;
