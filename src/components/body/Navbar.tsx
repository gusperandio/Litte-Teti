/* eslint-disable react/jsx-no-undef */
import { Button } from "@mui/material";
import styles from "../../styles/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ToysRoundedIcon from '@mui/icons-material/ToysRounded';
import Face3RoundedIcon from '@mui/icons-material/Face3Rounded';
import FaceRoundedIcon from '@mui/icons-material/FaceRounded';
import BedroomBabyRoundedIcon from '@mui/icons-material/BedroomBabyRounded';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

interface PropsNavbar {
  exibe1?: boolean;
  exibe2?: boolean;
  exibe3?: boolean;
  exibe4?: boolean;
  exibe5?: boolean;
}
type Anchor = "top" | "left" | "bottom" | "right";

export default function Navbar(props: PropsNavbar) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        backgroundColor: "transparent",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className="bg-transparent">
        {/* {["Inicio", "Meninas", "Meninos", "Acessórios", "Login"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))} */}
        <ListItem key={"Inicio"} disablePadding>
          <Link href={"/"}>
            <ListItemButton>
              <ListItemIcon>
                <HomeRoundedIcon className="text-blue-600"/>
              </ListItemIcon>
              <ListItemText primary={"Inicio"} className="text-blue-600"/>
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem key={"Meninas"} disablePadding>
          <Link href={"/girls"}>
            <ListItemButton>
              <ListItemIcon>
                <Face3RoundedIcon className="pink" />
              </ListItemIcon>
              <ListItemText primary={"Meninas"} className="pink"/>
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem key={"Meninos"} disablePadding>
          <Link href={"/boys"}>
            <ListItemButton>
              <ListItemIcon>
                <FaceRoundedIcon className="text-blue-600"/>
              </ListItemIcon>
              <ListItemText primary={"Meninos"} className="text-blue-600 font-bold"/>
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem key={"Acessórios"} disablePadding>
          <Link href={"/accessories"}>
            <ListItemButton>
              <ListItemIcon>
                <BedroomBabyRoundedIcon className="pink"/>
              </ListItemIcon>
              <ListItemText primary={"Acessórios"} className="pink"/>
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem key={"Login"} disablePadding>
          <Link href={"/login"}>
            <ListItemButton>
              <ListItemIcon>
                <ExitToAppRoundedIcon className="text-gray-900"/>
              </ListItemIcon>
              <ListItemText primary={"Login"} className="text-gray-900"/>
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem key={"Cart"} disablePadding>
          <Link href={"/cart"}>
            <ListItemButton>
              <ListItemIcon>
                <ShoppingCartRoundedIcon className="text-gray-900"/>
              </ListItemIcon>
              <ListItemText primary={"Cart"} className="text-gray-900"/>
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
      <Divider />
      <List className="flex justify-center mt-4">
        <Image src="/Logo.png" width={150} height={150} alt="logo" className="animate__animated animate__jello"/>
      </List>
    </Box>
  );
  return (
    <header>
      <div className={styles.menuMobile}>
        {(["left"] as const).map((anchor) => (
          <React.Fragment key={anchor}>
            {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
            <Button
              variant="outlined"
              className="mt-8 ml-8 w-10 h-10"
              color="inherit"
              onClick={toggleDrawer(anchor, true)}
            >
              <MenuRoundedIcon className="w-8 h-8" />
            </Button>
            <Drawer
              anchor="left"
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              className="bg-transparent"
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>

      <div className={styles.menu}>
        <div className="flex flex-row justify-around items-center container mx-auto bg-white rounded-bl-2xl rounded-br-2xl h-44">
          <div>
            <Link href="/">
              <Image
                src="/Logo.png"
                alt="Picture of the author"
                width={150}
                height={150}
                priority
              />
            </Link>
          </div>
          <div className="w-3/6 flex flex-row justify-start items-center">
            <Button variant="text" href="/">
              Inicio
            </Button>
            <Button variant="text" className="pink" href="/girls">
              Meninas
            </Button>
            <Button variant="text" href="/boys">
              Meninos
            </Button>
            <Button variant="text" className="pink" href="/accessories">
              Acessórios
            </Button>
          </div>
          <div>
            <Button variant="text" className="pink" href="/login">
              Login
            </Button>
            <Button variant="contained" className="ml-4" href="/register">
              Cadastro
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
