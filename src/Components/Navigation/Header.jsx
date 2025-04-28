import { Box, Button, Typography, Sheet, IconButton } from "@mui/joy";
import MenuIcon from "@mui/icons-material/Menu"; // optional for mobile
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';

function Navbar() {
  return (
    <Sheet
      variant="soft"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: 3,
        py: 3,
        borderRadius: 0,
        boxShadow: "sm",
        position: "sticky",
        top: 0,
        zIndex: 1100,
      }}
    >
      {/* Logo / Brand */}
      <Typography level="h4" color="primary">
        MyBrand
      </Typography>

      {/* Menu Links */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          gap: 2,
          alignItems: "center",
        }}
      >
        <Button variant="plain" color="neutral">
          Home
        </Button>
        <Button variant="plain" color="neutral">
          Categories
        </Button>
        <Button variant="plain" color="neutral">
          Services
        </Button>
        <Button variant="plain" color="neutral">
          Contact
        </Button>
      </Box>
      <Box sx={{ ml: 2 }}>
            <IconButton color="neutral" sx={{ mx: 1 }}>
              <ShoppingCartIcon />
            </IconButton>
            <IconButton color="neutral" sx={{ mx: 1 }}>
              <PersonIcon />
            </IconButton>
          </Box>

      {/* Mobile Menu Icon */}
      <IconButton
        variant="outlined"
        color="neutral"
        sx={{ display: { xs: "inline-flex", md: "none" } }}
      >
        <MenuIcon />
      </IconButton>
    </Sheet>
  );
}

export default Navbar;
