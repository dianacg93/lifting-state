import {useState, useEffect} from 'react';
import List from './List';
import Filter from './Filter';

const Container = ({fruits}) => {

    const [fruitsDisplay, setFruitsDisplay] = useState(fruits)
    
    const [filter, setFilter] = useState("")

    return (
        <div>
            <Filter/>
            <List/>
        </div>
    )
}

export default Container;