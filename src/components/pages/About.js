import React,{useState} from 'react';
import {ListItem, TextField} from "@mui/material";
import axios from 'axios';

// API KEY:http://www.omdbapi.com/?i=tt3896198&apikey=4af4548c
const About=()=>{
    const [searchResults,setSearchResults]=useState([]);
    const handleSubmit=(e)=>{
        e.preventDefault();
        const response= axios.get("http://www.omdbapi.com/?i=tt389");
        setSearchResults(response.data)
    }
    const [searchQuery,setSearchQuery]= useState('');
    return(
        <div>
            <h1>About</h1>
            <form onSubmit={handleSubmit}>
                <TextField variant="contained" value={searchQuery} label="Search for your movie" onChange={(e)=>setSearchQuery(e.target.value)} />
                {searchResults.map((items,index)=>(
                    <ListItem key={items.id}>
                        {items.title}
                    </ListItem>
                    ))}

            </form>
        </div>
    )
}
export default About;