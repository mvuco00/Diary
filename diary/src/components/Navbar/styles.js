import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  appBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  heading: {
    color: "rgba(255,97,98)",
    fontFamily: "Raleway",
  },
  image: {
    marginLeft: "15px",
  },
}));
