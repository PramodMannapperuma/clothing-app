import { FormControl, Input } from "@mui/joy";
import React from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

function SearchBar() {
    return (
        <FormControl
            sx={{
                width: { xs: "100%", md: "25ch" },
                display: {
                    xs: "none",
                    md: "block",
                },
            }}
            variant="outlined"
        >
            <Input
                size="sm"
                startDecorator={<SearchRoundedIcon />}
                placeholder="Search"
                sx={{ color: "black" }}
            />
        </FormControl>
    );
}

export default SearchBar;