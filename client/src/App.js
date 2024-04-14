import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// import useStyles from "./styles";
import Posts from './components/Posts/Posts';
import Form from "./components/Form/Form";
import { getPosts } from "./actions/posts";
import memories from "./images/memories.png";

// ! material
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Grow from "@mui/material/Grow";
import Grid from "@mui/material/Grid";

function App() {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  // const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <div>
      <Container maxWidth="lg">
        <AppBar className={`appBar`} position="static" color="inherit">
          <Typography className={`heading`} variant="h2" align="center">
            Memories
          </Typography>
          <img className={"image"} src={memories} alt="icon" height="60" />
        </AppBar>
        <Grow in>
          <Container>
            <Grid
              container
              justifyContent="space-between"
              alignItems="stretch"
              spacing={3}
            >
              <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />

              </Grid>
              <Grid item xs={12} sm={4}>
                <Form currentId={currentId} setCurrentId={setCurrentId} />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </div>
  );
}

export default App;
