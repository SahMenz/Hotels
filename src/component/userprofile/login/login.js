import React, { useState } from 'react'
import Styles from '../login/login.module.css'
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Person, Lock } from '@mui/icons-material';
import { useFormik } from 'formik';
import * as Yup from "yup";
import SubmitForm from './Submitform';
import { Fade } from 'react-awesome-reveal';
// import PersonIcon from '@mui/icons-material/Person';
// import LockIcon from '@mui/icons-material/Lock';

const Login = () => {

    const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);

    const formik = useFormik({
        initialValues:{
            email:"",
            password:"",
        },
        validationSchema :Yup.object({
            email: Yup.string().email("Invalid email address").required("Email is required"),
            password: Yup.string().required("password is required")
        }),
        onSubmit: (values) => {
            console.log(values);
            setIsSubmitSuccess(true)
        }
    });

  return (
    <Fade delay={500}>
        <div>
            {
                isSubmitSuccess ? (
                    <SubmitForm />
                ) : (
                    <form 
                        className={Styles.generalContainer}
                        onSubmit={formik.handleSubmit}>
                        <h2 className={Styles.login}>Login</h2>
                        <TextField 
                            name='email' 
                            type='email' 
                            placeholder='Email' 
                            className={Styles.textfieldStyles} 
                            InputProps={{
                                startAdornment :(
                                <InputAdornment>
                                    <IconButton>
                                        <Person />
                                    </IconButton>
                                </InputAdornment>
                                )
                        }}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        />

                        {
                            formik.touched.email && formik.errors.email
                            ? (<div className={Styles.errorMsg}>{formik.errors.email}</div>) : null
                        }

                        <TextField 
                            name='password' 
                            type='password' 
                            placeholder='Password' 
                            className={Styles.textfieldStyles} 
                            InputProps={{
                                startAdornment:(
                                <InputAdornment>
                                    <IconButton>
                                        <Lock />
                                    </IconButton>
                                </InputAdornment>
                                )
                        }} 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                        />
                        {
                            formik.touched.password && formik.errors.password
                            ? (<div className={Styles.errorMsg}>{formik.errors.password}</div>) : null
                        }

                        <button type='submit' className={Styles.submitbutton}>Login</button>
                    </form>
                )
            }
            
        </div>
    </Fade>
  )
}

export default Login