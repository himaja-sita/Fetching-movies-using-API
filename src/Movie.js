import classes from './Listitem.module.css';
export default function Movie(props){
    return <li id={props.id} className={classes.item}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
    </li>
}