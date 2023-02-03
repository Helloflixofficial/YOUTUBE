import React from "react";
import { Stack } from "@mui/material";
import { cat } from "../utils/constants";

const Sidebar = ({ sc, setSc }) => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {cat.map((cat) => (
      <button
        className="category-btn"
        onClick={() => setSc(cat.name)}
        style={{
          background: cat.name === sc && "#FC15",
          color: "white",
        }}
      >
        <span
          style={{
            color: cat.name === sc ? "white" : "red",
            marginRight: "15px",
          }}
        >
          {cat.icon}
        </span>
        <span
          style={{
            opacity: cat.name === sc ? "1" : "0.8",
          }}
        >
          {cat.name}
        </span>
      </button>
    ))}
  </Stack>
);
export default Sidebar;
