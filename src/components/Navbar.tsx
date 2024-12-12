import React, { useState, useEffect } from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    Box,
    Drawer,
    List,
    ListItem,
    ListItemText,
    useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import { navList } from "../constant";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleDrawer =
        (open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent): void => {
                if (event.type === "keydown" && (event as React.KeyboardEvent).key === "Tab") {
                    return;
                }
                setDrawerOpen(open);
            };

    return (
        <>
            <AppBar
                position="fixed"
                sx={{
                    backgroundColor: scrolled
                        ? "rgba(0, 0, 0, 0.8)"
                        : isMobile
                            ? "#000"
                            : "transparent",
                    transition: "background-color 0.3s ease",
                    boxShadow: "none",
                }}
            >
                <Toolbar
                    sx={{
                        display: "flex",
                        justifyContent: isMobile ? "space-between" : "center",
                    }}
                >
                    {!isMobile && (
                        <Box sx={{ display: "flex", gap: 3 }}>
                            {navList.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    style={{
                                        color: "#fff",
                                        textDecoration: "none",
                                        fontSize: "1rem",
                                        textTransform: "none",
                                    }}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </Box>
                    )}
                    {isMobile && (
                        <IconButton
                            edge="end"
                            color="inherit"
                            aria-label="menu"
                            onClick={toggleDrawer(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                    )}
                </Toolbar>
            </AppBar>

            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
            >
                <Box
                    sx={{
                        width: 250,
                        backgroundColor: "#000",
                        height: "100%",
                        color: "#fff",
                    }}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <List>
                        {navList.map((item) => (
                            <ListItem key={item.name} disablePadding>
                                {/* <ListItemButton href={item.path}> */}

                                    <Link
                                        key={item.name}
                                        to={item.path}
                                        style={{
                                            color: "#fff",
                                            textDecoration: "none",
                                            fontSize: "1rem",
                                            textTransform: "none",
                                            marginLeft:'1rem'
                                        }}
                                    >
                                        <ListItemText primary={item.name} sx={{ color: "#fff" }} />
                                    </Link>

                                {/* </ListItemButton> */}
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </>
    );
};

export default Navbar;
