import { Container, Typography, Box } from "@mui/material";
import { AccessTimeFilled, Room, Email, Phone, Copyright, Inventory, SupportAgent, ShoppingCart, Language } from '@mui/icons-material';


const FooterComponents = () => {
  const boxStyle = {
    backgroundColor: "#000",
    width: "100vw",
    height: "300px",
    display: "flex",
    padding: "20px 180px",
  };

  const boxStyleOne = {
    width: "100vw",
    display: "flex",
  };

  const boxStyleTwo = {
    color: "#fff",
    padding: "30px",
  }
  const boxStyleThree = {
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    padding: "30px"
  }

  const boxStyleCopyright = {
    backgroundColor: "#000",
    display: "flex",
    justifyContent: "center",
    padding: "0 0 30px 0"
  };

  return (
    <>
      <Box style={boxStyle}>
        <Box style={boxStyleOne}>
          <Container>
            <Box style={boxStyleTwo}>
              <Typography variant="h5" sx={{ fontWeight: "800", marginBottom: "25px" }}>INFORMACION</Typography>
              <Box sx={{ display: "flex", marginBottom: "10px" }}>
                <Phone sx={{ color: "#fd611a", marginRight: "10px" }} />
                <Typography> +54 112256-8888</Typography>
              </Box>
              <Box sx={{ display: "flex", marginBottom: "10px" }}>
                <Room sx={{ color: "#fd611a", marginRight: "10px" }} />
                <Typography> Calle Falsa 123 - Buenos Aires</Typography>
              </Box>
              <Box sx={{ display: "flex", marginBottom: "10px" }}>
                <Email sx={{ color: "#fd611a", marginRight: "10px" }} />
                <Typography> contacto@hypermegared.com.ar</Typography>
              </Box>
              <Box sx={{ display: "flex", marginBottom: "10px" }}>
                <AccessTimeFilled sx={{ color: "#fd611a", marginRight: "10px" }} />
                <Typography> Lunes a Viernes: 10 a 14hs y 17 a 20hs | Sábados: 10 a 14hs.</Typography>
              </Box>
            </Box>
          </Container>
          <Container>
            <Box style={boxStyleThree}>
              <Typography variant="h5" sx={{ fontWeight: "800", marginBottom: "25px" }}>PAGINAS</Typography>
              <Box sx={{ display: "flex", marginBottom: "10px" }}>
                <Typography sx={{ marginRight: "10px" }}>INICIO</Typography>
                <Language sx={{ color: "#fd611a" }} />
              </Box>
              <Box sx={{ display: "flex", marginBottom: "10px" }}>
                <Typography sx={{ marginRight: "10px" }}>PRODUCTOS</Typography>
                <Inventory sx={{ color: "#fd611a" }} />
              </Box>
              <Box sx={{ display: "flex", marginBottom: "10px" }}>
                <Typography sx={{ marginRight: "10px" }}>TIENDA</Typography>
                <ShoppingCart sx={{ color: "#fd611a" }} />
              </Box>
              <Box sx={{ display: "flex", marginBottom: "10px" }}>
                <Typography sx={{ marginRight: "10px" }}>SOPORTE</Typography>
                <SupportAgent sx={{ color: "#fd611a" }} />
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
      <Box style={boxStyleCopyright}>
        <Box sx={{ display: "flex" }}>
          <Copyright sx={{ color: "#fd611a", marginRight: "10px" }} />
          <Typography sx={{ color: "#787373", fontWeight: "500" }}>2023 | Todos los derechos reservados. | Desarrollado por Grupo PF - Henry.</Typography>
        </Box>
      </Box>
    </>
  );
};

export default FooterComponents;
