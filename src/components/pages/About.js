import React,{useState} from 'react';
import {
    Paper,
    TableContainer,
    TableHead,
    TextField,
    Table,
    TableRow,
    TableCell,
    Container,
    TableBody, InputAdornment
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';

// API KEY:http://www.omdbapi.com/?i=tt3896198&apikey=4af4548c
const About=()=>{
    const [searchResults,setSearchResults]=useState([]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.get(
            `http://www.omdbapi.com/?s=${searchQuery}&apikey=4af4548c`
        );
        console.log("inside handle submit",response);
        setSearchResults(response.data.Search);
    };
    const [searchQuery,setSearchQuery]= useState('');
    return(
        <Container>
            <h1>About</h1>
            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    variant="outlined"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleSubmit();
                        }
                    }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <SearchIcon onClick={handleSubmit} />
                            </InputAdornment>
                        )
                    }}
                />

            </form>
                   <TableContainer component={Paper}>
                       <Table sx={{}}>
                           <TableHead>
                               <TableRow>
                                   <TableCell>Title</TableCell>
                                   <TableCell>Year</TableCell>
                                   <TableCell>Type</TableCell>
                               </TableRow>
                           </TableHead>
                          <TableBody>
                              {searchResults && searchResults.map((item, index) => (
                                  <TableRow key={index}>
                                      <TableCell>{item.Title}</TableCell>
                                      <TableCell>{item.Year}</TableCell>
                                      <TableCell>{item.Type}</TableCell>
                                      </TableRow>
                              ))}
                          </TableBody>
                       </Table>

                   </TableContainer>

        </Container>
    )
}
export default About;