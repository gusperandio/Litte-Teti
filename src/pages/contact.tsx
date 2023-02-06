import HeadAuth from "@/components/body/HeadAuth";
import WhiteDiv from "@/components/util/WhiteDiv";
import Button from "@mui/material/Button";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Contacts() {
 const whatsApp = "+55 (18) 98166-3710";

  return (
    <>
      <HeadAuth title="Little Teti - Contato" />
      <div className="mt-8 ml-4">
        <Button
          variant="outlined"
          href="/"
          startIcon={<ArrowBackRoundedIcon />}
          sx={{ m: 1, width: "20ch" }}
          style={{ color: "#fff", border: "1px solid #fff" }}
        >
          Voltar
        </Button>
      </div>
      <div className="m-8">
        <WhiteDiv width="30rem" height="70vh">
          <div className="flex flex-col items-center justify-evenly h-full">
            <Button variant="outlined" startIcon={<WhatsAppIcon />} sx={{ m: 1, width: "30ch" }} style={{color: "#fff", backgroundColor: "#2dd36f", marginTop: "2rem"}} color="success">
              {whatsApp}
            </Button>
            <Button variant="outlined" startIcon={<InstagramIcon />} sx={{ m: 1, width: "30ch" }} style={{color: "#fff", backgroundColor: "dodgerblue", marginTop: "2rem"}}>
              Instagram
            </Button>
          </div>
        </WhiteDiv>
      </div>
    </>
  );
}
