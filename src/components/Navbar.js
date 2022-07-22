import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppBar } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import LoginModal from "./LoginModal";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // console.log("Navbar rendered")
  console.log(open)

  return (
    <>
      <AppBar position="sticky">
        <Toolbar
          disableGutters
          sx={{
            padding: "4px 16px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link to={"/"}>
            <img
              style={{ width: "50px" }}
              src={require("../img/MR.Logo2.png")}
              alt="logo"
            />
          </Link>
          <Button
            variant="outlined"
            sx={{
              color: "white",
              borderColor: "white",
              ":hover": { backgroundColor: "gray" },
            }}
            onClick={() => setOpen(true)}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <LoginModal open={open} setOpen={setOpen} />
    </>
  );
};

export default Navbar;
