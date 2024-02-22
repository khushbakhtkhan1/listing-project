import React from "react";
import { Typography,Box } from "@mui/material";
import Link from "next/link";
import Image from "next/image"

const imagePath = "/images/header.jpg";

const Header = () => {

  return (

    <Box >
      <Image src={imagePath} alt="Header image" width={100} height={100}/>
      <Box>
        <Typography variant="h2">React Hook Form</Typography>
        <Typography variant="h6">
          Performant, flexible and extensible forms with easy-to-use validation.
        </Typography>
        <Link
          href="https://codesandbox.io/s/preact-2zsw6?file=/src/index.js"
        >
          <Typography >
            🐰 Show me the Preact version
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default Header;
