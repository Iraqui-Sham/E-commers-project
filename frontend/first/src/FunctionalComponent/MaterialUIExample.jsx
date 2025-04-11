import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
import Carousel from 'react-material-ui-carousel';
import { CardActions, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

const pages = ['Home', 'About Us', 'Service', 'Shop', 'Contact Us'];
const settings = ['Profile', 'Account', 'SignIn', 'Logout'];

function Item(props) {
    return (
        <img src={props.item.pic} height={495} width="100%" />
    )
}

function MaterialUIExample() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    let data = [
        { id: 1001, name: "product1", basePrice: 4400, discount: 50, finalPrice: 4000, pic: "/Images/p11.jpg" },
        { id: 1001, name: "product2", basePrice: 4400, discount: 50, finalPrice: 4000, pic: "/Images/p12.jpg" },
        { id: 1001, name: "product3", basePrice: 4400, discount: 50, finalPrice: 4000, pic: "/Images/p13.jpg" },
        { id: 1001, name: "product4", basePrice: 4400, discount: 50, finalPrice: 4000, pic: "/Images/p14.jpg" },
        { id: 1001, name: "product5", basePrice: 4400, discount: 50, finalPrice: 4000, pic: "/Images/p15.jpg" },
        { id: 1001, name: "product6", basePrice: 4400, discount: 50, finalPrice: 4000, pic: "/Images/p16.jpg" },
        { id: 1001, name: "product7", basePrice: 4400, discount: 50, finalPrice: 4000, pic: "/Images/p17.jpg" },
        { id: 1001, name: "product8", basePrice: 4400, discount: 50, finalPrice: 4000, pic: "/Images/p18.jpg" },
        { id: 1001, name: "product9", basePrice: 4400, discount: 50, finalPrice: 4000, pic: "/Images/p19.jpg" },
        { id: 1001, name: "product10", basePrice: 4400, discount: 50, finalPrice: 4000, pic: "/Images/p21.jpg" },
        { id: 1001, name: "product11", basePrice: 4400, discount: 50, finalPrice: 4000, pic: "/Images/p10.jpg" },
        { id: 1001, name: "product12", basePrice: 4400, discount: 50, finalPrice: 4000, pic: "/Images/p22.jpg" },
        { id: 1001, name: "product13", basePrice: 4400, discount: 50, finalPrice: 4000, pic: "/Images/p8.jpg" },
        { id: 1001, name: "product14", basePrice: 4400, discount: 50, finalPrice: 4000, pic: "/Images/p1.jpg" },
        { id: 1001, name: "product15", basePrice: 4400, discount: 50, finalPrice: 4000, pic: "/Images/p2.jpg" },
        { id: 1001, name: "product16", basePrice: 4400, discount: 50, finalPrice: 4000, pic: "/Images/p3.jpg" },
        { id: 1001, name: "product17", basePrice: 4400, discount: 50, finalPrice: 4000, pic: "/Images/p4.jpg" },
        { id: 1001, name: "product18", basePrice: 4400, discount: 50, finalPrice: 4000, pic: "/Images/p5.jpg" },
        { id: 1001, name: "product19", basePrice: 4400, discount: 50, finalPrice: 4000, pic: "/Images/p6.jpg" },
        { id: 1001, name: "product20", basePrice: 4400, discount: 50, finalPrice: 4000, pic: "/Images/p7.jpg" },
        { id: 1001, name: "product20", basePrice: 4400, discount: 50, finalPrice: 4000, pic: "/Images/p8.jpg" },
        { id: 1001, name: "product20", basePrice: 4400, discount: 50, finalPrice: 4000, pic: "/Images/p9.jpg" },
        { id: 1001, name: "product20", basePrice: 4400, discount: 50, finalPrice: 4000, pic: "/Images/p11.jpg" },
        { id: 1001, name: "product20", basePrice: 4400, discount: 50, finalPrice: 4000, pic: "/Images/p12.jpg" }
    ]

    var items = [
        {
            pic: "Images/p11.jpg"
        },
        {
            pic: "Images/p12.jpg"
        },
        {
            pic: "Images/p13.jpg"
        },
        {
            pic: "Images/p14.jpg"
        },
        {
            pic: "Images/p15.jpg"
        },
        {
            pic: "Images/p16.jpg"
        },
        {
            pic: "Images/p17.jpg"
        },
        {
            pic: "Images/p18.jpg"
        },
        {
            pic: "Images/p19.jpg"
        },
        {
            pic: "Images/p8.jpg"
        }
    ]

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <>
            <AppBar position="sticky">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>

                        <Typography
                            variant="h4"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Ducat
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{ display: { xs: 'block', md: 'none' } }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>

                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,

                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Ducat
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src="/Images/p9.jpg" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Carousel>
                {
                    items.map((item, i) => <Item key={i} item={item} />)
                }
            </Carousel>

            {/* <h5 className='bg-success text-center text-light p-2'>Latest Product</h5> */}
            <Typography variant='h5' align='center' bgcolor={"green"} className='hbackground mb-1' color='white' padding={1}>Latest Product</Typography>
            <Grid container>
                {
                    data.map((p, index) => {
                        return <Grid item key={index} xl={2} lg={3} md={4} sm={6} xs={12}>
                            <Card>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="250"
                                        image={p.pic}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {p.name}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                            <del class='text-danger'>&#8377;{p.basePrice}</del>&#8377;{p.finalPrice}<sup>{p.discount}%off</sup>
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <button variant='contained' className='background w-100 text-light'>
                                        Add to Cart
                                    </button>
                                </CardActions>
                            </Card>

                        </Grid>
                    })


                }
            </Grid>
        </>
    );
}
export default MaterialUIExample;
