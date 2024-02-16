import Movie from "./Movie";
import classes from './MoviesList.module.css';
export default function MoviesList(props){
    return <ul className={classes.listitems}>
{props.movies.map(movie=>{
   return <Movie {...movie}></Movie>
})}
    </ul>
}