import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    marginTop: "15px",
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  buttonSubmit: {
    fontWeight: "bold",
    backgroundColor: "lightgreen",
    color: "black",
    margin: 8,
  },
  buttonReset: {
    fontWeight: "bold",
    backgroundColor: "lightgray",
    color: "black",
    margin: 8,
  },
}));
