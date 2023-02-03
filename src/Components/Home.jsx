import React from "react";
import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Sidebar, Videos } from "./IExport";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const Home = () => {
  const [sc, setSc] = useState("JS Mastery");
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${sc}`).then((data) =>
      setVideos(data.items)
    );
  }, [sc]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #191919",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar sc={sc} setSc={setSc} />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#191919" }}
        >
          {/* Copyright show banner space*/}
        </Typography>
      </Box>
      <Box p={2} style={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          style={{ color: "white", margin: 0 }}
          variant="h5"
          fontWeight="bold"
          mb={2}
        >
          <span>{sc}</span> | <span style={{ color: "red" }}>Videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};
export default Home;
