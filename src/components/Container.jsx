import {useState, useEffect} from 'react';
import List from './List';
import Filter from './Filter';

const Container = ({fruits}) => {

    const [fruitsDisplay, setFruitsDisplay] = useState(fruits)
    
    const handleFilterChange = (e) => {
        e.preventDefault();
        const filterValue = e.target.value;
        setFruitsDisplay((_prevState)=>{
            const filteredList = fruits.filter((fruit)=> {
                return fruit.toLowerCase().includes(filterValue.toLowerCase());
            })
            return filteredList
        })
    }

    useEffect(() => {
        console.log("fruitsDisplay: ", fruitsDisplay)

    }, [fruitsDisplay])
    
    return (
        <div>
            <Filter onChange={(e) => handleFilterChange(e)} />
            <List fruits={fruitsDisplay} />
        </div>
    )
}

export default Container;