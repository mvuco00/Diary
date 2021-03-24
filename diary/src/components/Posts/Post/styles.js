import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    position: "relative",
    marginTop: "15px",
    backgroundColor: "#fff",
  },

  title: {
    padding: "16px",
    fontSize: "20px",
    color: "#031521",
    fontStyle: "italic",
  },

  box: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid gray",
    fontSize: "20px",
    color: "#031521",
    fontStyle: "italic",
  },
});
