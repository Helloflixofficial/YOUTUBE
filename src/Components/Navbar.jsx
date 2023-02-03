import React from "react";
import { Stack } from "@mui/system";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import { Searchbar } from "./IExport";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: "0",
      justifyContent: "space-between",
      // margin: "none",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItem: "center" }}>
      <img
        src={logo}
        alt="logo"
        height={30}
      />
    </Link>
    <Searchbar />
  </Stack>
);
export default Navbar;
