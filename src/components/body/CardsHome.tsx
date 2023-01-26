import { PhotoCamera } from "@mui/icons-material";
import { IconButton, Grid } from "@mui/material";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import Card from "../util/Card";
import ClearAllRoundedIcon from '@mui/icons-material/ClearAllRounded';
export default function CardsHome() {
  return (
    <>
      <br />
      <div className="flex justify-end">
        <div className="mr-8 sm:mr-44 bg-slate-100 w-32 flex justify-around rounded-lg opacity-90">
          <IconButton color="primary" size="large">
            <input hidden accept="image/*" type="file" />
            <SearchRoundedIcon />
          </IconButton>
          <IconButton color="primary" aria-label="delete">
            <input hidden accept="image/*" type="file" />
            <AppsRoundedIcon />
          </IconButton>
          <IconButton color="primary" aria-label="delete">
            <input hidden accept="image/*" type="file" />
            <ClearAllRoundedIcon />
          </IconButton>
        </div>
      </div>
      <br />
      <h1 className="text-white font-bold text-2xl ml-8 sm:ml-24 pl-3 border-l-4">Ultimos Lançamentos</h1>
      <br />
      <div className="flex justify-center flex-wrap">
        <Card titulo="Roupa Infantil" />
        <Card titulo="Roupa Infantil" />
        <Card titulo="Roupa Infantil" />
        <Card titulo="Roupa Infantil" />
        <Card titulo="Roupa Infantil" />
        <Card titulo="Roupa Infantil" />
        <Card titulo="Roupa Infantil" />
        <Card titulo="Roupa Infantil" />
        <Card titulo="Roupa Infantil" />
        <Card titulo="Roupa Infantil" />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
