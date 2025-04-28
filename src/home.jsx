import { Box, Typography, Card, CardContent, AspectRatio, Grid } from "@mui/joy";
import React, { useEffect } from "react";

function Home() {
  useEffect(() => {
    document.title = "Home | My Clothing Store";
  }, []);

  return (
    <>
      {/* Top Banner */}
      <Box
        sx={{
          width: "100%",
          justifyContent: "center",
        }}
      >
        <AspectRatio ratio={16 / 9}>
          <img
            src="/poster1.png"
            alt="Top Banner"
            loading="lazy"
            style={{ width: "100%", objectFit: "cover" }}
          />
        </AspectRatio>
      </Box>

      {/* Some Home Pictures
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 2,
          my: 4,
        }}
      >
        <img src="/poster2.png" alt="Home Pic 1" width="300px" style={{ borderRadius: "10px" }} />
        <img src="/images/homepic2.jpg" alt="Home Pic 2" width="300px" style={{ borderRadius: "10px" }} />
        <img src="/images/homepic3.jpg" alt="Home Pic 3" width="300px" style={{ borderRadius: "10px" }} />
      </Box> */}

      {/* Middle Banner */}
      <Box
        sx={{
          width: "100%",
          justifyContent: "center",
        }}
      >
        <AspectRatio ratio={16 / 9}>
          <img
            src="/poster2.png"
            alt="Middle Banner"
            loading="lazy"
            style={{ width: "100%", objectFit: "cover" }}
          />
        </AspectRatio>
      </Box>

      {/* Categories Section */}
      <Box mt={4} mx={{ md: 3, xs: 1 }} mb={4}>
        <Typography level="h2" mb={2}>
          Categories
        </Typography>

        <Grid container spacing={2}>
          {[
            { title: "Dresses", image: "/dress.avif" },
            { title: "Shirts", image: "/pic1.jpg" },
            { title: "T-Shirts", image: "/tshirt.jpg" },
          ].map((category, index) => (
            <Grid xs={12} sm={6} md={4} key={index}>
              <Card>
                <AspectRatio minHeight="200px">
                  <img
                    src={category.image}
                    alt={category.title}
                    style={{ width: "100%", objectFit: "cover" }}
                  />
                </AspectRatio>
                <CardContent>
                  <Typography level="h3">{category.title}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* New Releases Section
        <Typography level="h2" mt={4} mb={2}>
          New Arrivals
        </Typography> */}

        <Grid container spacing={2}>
          {[
            { title: "Mugs", image: "/mug.jpg" },
            { title: "Travel Mugs", image: "/travelmug.jpg" },
            { title: "Tea Cup", image: "/tea.jpg" },
          ].map((product, index) => (
            <Grid xs={12} sm={6} md={4} key={index}>
              <Card>
                <AspectRatio minHeight="200px">
                  <img
                    src={product.image}
                    alt={product.title}
                    style={{ width: "100%", objectFit: "cover" }}
                  />
                </AspectRatio>
                <CardContent>
                  <Typography level="h4">{product.title}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default Home;
