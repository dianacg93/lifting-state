const List = (props) => {
    console.log("List:", props)
    return(
        <ul>
           {props.fruits.map((fruit) => {
               return <li>{fruit}</li>
           })} 
        </ul>
    )
}

export default List;