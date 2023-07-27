import React from 'react'
import Styles from '../login/login.module.css'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../../FormikControl'

function Login() {
    const initialValues = {
        email: '',
        password: ''
    }

    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid email format").required("Required"),
        password: Yup.string().required("Required")
    })

    const  onSubmit = values => {
        console.log('Form data', values)
    }

  return (
    <div className={Styles.general}>
        <Formik 
            className={Styles.container}
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <div className={Styles.login}>Login</div>
            {
                formik => {
                    return <Form className={Styles.formfill}>
                        <FormikControl
                            contrl='input'
                            type="email" 
                            name='email' 
                            placeholder="Email address" />
                        
                        <FormikControl
                            contrl='input'
                            type="password" 
                            name='password' 
                            placeholder="Password" />
            
                        <button type="submit"  value="Login" className={Styles.submitbutton} disabled={!formik.isValid}/>
                    </Form>
                }
            }        
        </Formik>
    </div>
  )
}

export default Login