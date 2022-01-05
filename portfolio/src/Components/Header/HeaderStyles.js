import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    width: 900,
    margin: "auto",
    textAlign: "center",
  },
  container: {
    marginTop: "15%",
  },
  name: {
    color: "#fff",
    fontWeight: 800,
    fontSize: "5rem",
    letterSpacing: "0.3rem",
    fontFamily: "'Comforter Brush', cursive",
  },
  profession: {
    color: "#fff",
    fontWeight: 500,
    letterSpacing: "0.1rem",
  },
  upIcon: {
    position: "absolute",
    top: "15%",
    cursor: "pointer",
    zIndex: 1,
  },
});

export default useStyles;
