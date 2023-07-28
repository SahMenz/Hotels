// import React from 'react'
// import Styles from '../login/login.module.css'
// import { Formik, Form } from 'formik'
// import * as Yup from 'yup'
// import FormikControl from '../../FormikControl'

// function Login() {



//     const initialValues = {
//         email: '',
//         password: ''
//     }

//     const validationSchema = Yup.object({
//         email: Yup.string().email('Invalid email format').required('Required'),
//         password: Yup.string().required('Required')
//     })

//     const  onSubmit = values => {
//         console.log('Form data', values)
//     }

//   return (
//     <div className={Styles.general}>
//         <Formik 
//             className={Styles.container}
//             initialValues={initialValues}
//             validationSchema={validationSchema}
//             onSubmit={onSubmit}
//         >
//             <>
//                 <div className={Styles.login}>Login</div>
//                 {
//                     formik => {
//                         return <Form className={Styles.formfill}>
//                             <FormikControl
//                                 control='input'
//                                 type="email" 
//                                 name='email' 
//                                 placeholder="Email address" />
                            
//                             <FormikControl
//                                 control='input'
//                                 type="password" 
//                                 name='password' 
//                                 placeholder="Password" />
                
//                             <button type="submit" className={Styles.submitbutton} disabled={!formik.isValid}>Login</button>
//                         </Form>
//                     }
//                 }
                
//             </>  
//         </Formik>
//     </div>
//   )
// }

// export default Login


import React, { useState } from 'react'
import Styles from '../login/login.module.css'
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Person, Lock } from '@mui/icons-material';
import { useFormik } from 'formik';
import * as Yup from "yup";
import SubmitForm from './Submitform';
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
    <div className={Styles.generalContainer}>
        {
            isSubmitSuccess ? (
                <SubmitForm />
            ) : (
                <form 
                    className={Styles.general}
                    onSubmit={formik.handleSubmit}>
                    <h2 className={Styles.login}>Login</h2>
                    <TextField 
                        name='email' 
                        type='text' 
                        placeholder='Email' 
                        className={Styles.textfield} 
                        InputProps={{
                            startAdornment:(
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
                        className={Styles.textfield} 
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

                    <button type='submit'>Login</button>
                </form>
            )
        }
        
    </div>
  )
}

export default Login