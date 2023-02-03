import React from "react";
import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Videos } from "./IExport";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";

const Searchdata = () => {
  const [videos, setVideos] = useState(null);
  const { searchRes } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchRes}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchRes]);
  return (
    <Box p={2} minHeight="95vh">
      <Typography
        variant="h4"
        fontWeight={900}
        color="white"
        mb={3}
        ml={{ sm: "100px" }}
      >
        Search Results for <span style={{ color: "#FC1503" }}>{searchRes}</span>{" "}
        videos
      </Typography>
      <Box display="flex">
        <Box sx={{ mr: { sm: "100px" } }} />
        {<Videos videos={videos} />}
      </Box>
    </Box>
  );
};
export default Searchdata;
