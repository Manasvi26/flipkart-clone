import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import Banner from "./Banner";
import NavBar from "./NavBar";
import Slide from "./Slide";
import MidSection from "./MidSection";

const useStyle = makeStyles({
  component: {
    padding: 10,
    background: "#F2F2F2",
  },
  rightWrapper: {
    marginTop: 12,
    background: "#FFFFFF",
    width: "17%",
    marginLeft: 10,
    padding: 5,
  },
});

const Home = () => {
  const classes = useStyle();
  const adURL =
    "https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70";
  return (
    <div>
      <NavBar />
      <Box className={classes.component}>
        <Banner />
      </Box>
      <Box style={{ display: "flex" }}>
        <Box style={{ width: "82%" }}>
          <Slide timer={true} title="Deal of the day" />
        </Box>
        <Box className={classes.rightWrapper}>
          <img src={adURL} style={{ width: 250 }} />
        </Box>
      </Box>
      <MidSection />
      <Slide timer={false} title="Discounts for You" />
      <Slide time={false} title="Suggested Items" />
      <Slide time={false} title="Top Selection" />
      <Slide time={false} title="Recommmended Items" />
      <Slide time={false} title="Bestsellers" />
    </div>
  );
};

export default Home;
