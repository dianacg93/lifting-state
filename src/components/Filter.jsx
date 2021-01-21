const Filter = (props) => {
    return(
        <div>
            <label htmlFor="fruit-filter">Filter Fruits:</label>
            <input type="text" value={props.value} onChange={props.onChange}/>
        </div>
    )
}

export default Filter;