import React from "react";
import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { SideBar, Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
    <Typography
      variant="h4"
      fontWeight="bold"
      mb={2}
      sx={{ color: "white" }}
    >
      {selectedCategory}
      <span style={{ color: "#Fc1503" }}> videos</span>
    </Typography>
    <Videos videos={videos} />
  </Box>
  );
};

export default Feed;