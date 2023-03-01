import {Box, Button, Container, TextField, Typography} from "@mui/material";
import {useState} from "react";
import {useForm} from "react-hook-form";
import  {auth} from "./firebase";


const Signup=()=>{
    const [loading,setLoading]=useState(false);
    const {register, handleSubmit} = useForm();
    const onSignup=async(data)=>{
        setLoading(true);
        try{
            const userCredential=await auth.createUserWithEmailAndPassword(
                data.email,
                data.password
            );
            const user=userCredential.user;
            await user.sendEmailVerification();
            await user.updateProfile({
                displayName: data.username
            });
            console.log(user);

        }
        catch (error) {
            console.log("error",error);
        }
        finally{
            setLoading(false);
        }
    }



    return(
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',

                }}>
                <Box sx={{
                    border: '1px solid black',
                    borderRadius: '10px',
                    padding: '1rem',
                    maxWidth: '400px',
                    margin: 'auto',
                    marginTop: '2rem',
                    backgroundColor: 'white',

                }}>
                    <Typography sx={{textAlign:"center"}} variant="h4" component="h2" gutterBottom>Signup Form</Typography>
                    <Container>
                        <form onSubmit={handleSubmit(onSignup)}>
                        <TextField
                            fullWidth
                            name="username"
                            label="Username"
                            variant="outlined"
                            {...register("username")}
                        />
                        <TextField
                            fullWidth
                            name="email"
                            type="email"
                            label="Email"
                            {...register("email")}
                            variant="outlined"
                            margin="normal"
                            />
                        <TextField
                            fullWidth
                            name="password"
                            type="password"
                            label="Password"
                            {...register("password")}
                            variant="outlined"
                            margin="normal"
                            />
                        <Button fullWidth variant="contained" color="primary" type="submit" disabled={loading}>Register here</Button>
                        </form>
                    </Container>
                </Box>
            </Box>
    </>)
}
export default Signup;