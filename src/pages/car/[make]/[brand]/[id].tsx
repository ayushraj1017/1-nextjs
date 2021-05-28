import { GetServerSideProps } from "next"
import { CarModel } from "../../../../../api/Car";
import { openDB } from "../../../../openDB";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

interface CarDetailsProps{
    car:CarModel|null|undefined;
}

function CarDetails({car}:CarDetailsProps) {
    const classes = useStyles();

    if(!car){
        <h1>Sorry,car not found</h1>
    }
    return (
        <div>
            <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
          {/* make, model, year, kilometers, fuelType, price, make, model, year, kilometers, fuelType, price, photoUrl, details, details */}
              <img className={classes.img} alt="complex" src={car.photoUrl} />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {car.make}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {car.model}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {car.year}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  {car.fuelType}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">${car.price}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
        </div>
    )
}

export const getServerSideProps:GetServerSideProps=async(context)=>{
        const id=context.params.id;
        const db=await openDB();
        const car = await db.get<CarModel |undefined>('SELECT * FROM Car where id=?',id);

        return{props:{car: car || null}}
}

export default CarDetails
