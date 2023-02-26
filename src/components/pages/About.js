import React,{useState} from 'react';
import {TextField} from "@mui/material";

// API KEY:http://www.omdbapi.com/?i=tt3896198&apikey=4af4548c
const About=()=>{
    const handleSubmit=(e)=>{
        e.preventDefault();
    }
    const [searchQuery,setSearchQuery]= useState('');
    return(
        <div>
            <h1>About</h1>
            <form onSubmit={handleSubmit}>
                <TextField variant="contained" label="Search for your movie" onChange={(e)=>setSearchQuery(e.target.value)} />

            </form>
        </div>
    )
}