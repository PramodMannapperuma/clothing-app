import { AspectRatio, Box, Typography } from "@mui/joy";
import React from "react";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          md: "3fr 2.25fr 3fr", // Three columns: about | links | payment
        },
        gap: 5,
        px: { xs: 2, sm: 10 },
        p: 2,
        mt: 5,
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      {/* About Column */}
      <Box>
        <Typography color="primary" level="title-md">
          About
        </Typography>
        <Typography textAlign="justify" mt={2}>
          We are a modern and stylish clothing brand focused on delivering high-quality, trendy apparel. 
          Our collections are designed for comfort, style, and confidence, catering to diverse fashion needs.
        </Typography>
      </Box>

      {/* Links Column */}
      <Box
        sx={{
          pl: { xs: 0, md: 4 },
          borderLeft: { xs: "0px", md: "1px solid" },
          borderRight: { xs: "0px", md: "1px solid" },
          borderBottom: { xs: "1px solid", md: "0px" },
          borderTop: { xs: "1px solid", md: "0px" },
          borderColor: "divider",
          "& ul": { listStyle: "none", padding: 0 },
          "& li": { mb: 1 },
        }}
      >
        <Typography color="primary" level="title-md">
          Quick Links
        </Typography>
        <ul>
          <li><Typography>Home</Typography></li>
          <li><Typography>About</Typography></li>
          <li><Typography>Terms & Conditions</Typography></li>
          <li><Typography>Privacy Policy</Typography></li>
          <li><Typography>Purchases Exchange Policy</Typography></li>
          <li><Typography>Return & Refund Policy</Typography></li>
          <li><Typography>Help & Support</Typography></li>
        </ul>
      </Box>

      {/* Payment Options */}
      <Box>
        <Typography color="primary" level="title-md">
          Payment Options
        </Typography>
        <Box
          px={{ xs: 0, md: 10 }}
        >
          <AspectRatio
            ratio={3 / 2}
            objectFit="contain"
            variant="plain"
          >
            <img
              src="https://www.payhere.lk/downloads/images/payhere_square_banner.png"
              alt="Payment Methods"
              style={{ objectFit: "contain" }}
            />
          </AspectRatio>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
