import React, { useState } from 'react'
import Styles from '../settingproperties/settingproperties.module.css'
import IconsReactjs  from 'icons-reactjs';
import nikelogo from '../../../images/nikelogo.png'
import { Formik, Form, Field, ErrorMessage } from 'formik';


function Settingproperties() {

//     const [text, setText] = useState("");

//    function handlechange(event) {
//         setText(event.target.value);
//     }

    const [text, setText] = useState("09060758772");
    const [inputtext, setInputtext] = useState("");

    const handlesubmit = (event) => {
        setText(inputtext)
    }

  return (
    <div className={Styles.settingprofileform}>
        <div className={Styles.avatarprofilecontainer}>
            <div className={Styles.avatarprofile}>
                <img src={nikelogo} alt="" />
            </div>
            <div className={Styles.avatarcredentialsnames}>
                <h1 className={Styles.usersname}>Mensah Emmanuel</h1>
                <h3 className={Styles.gmail}>
                    <IconsReactjs 
                    icon={'email'}
                    fontSize={'2rem'} 
                    color={'#6B705C'}
                    /> 
                    mensahemma670@gmail.com</h3>
                <h3 className={Styles.phonenumber}>
                    <IconsReactjs 
                    icon={'call'} 
                    fontSize={'2rem'} 
                    color={'#6B705C'}
                    /> 
                   { changetext }</h3>
            </div>
            <div className={Styles.avatarupload}>Upload new avatar</div>
        </div>
        <div className={Styles.settingformcontainer}>
            {/* <input
                type="text" 
                placeholder='text is being written here'
                value={ text }
                onChange={ handlechange }
            />
            <div>{text}</div> */}
            <Formik
                initialValues={{ email: '', text: '', number: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                    errors.email = 'Required';
                    } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                    errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                    }, 400);
                }}
                >
                {({ isSubmitting }) => (
                    <form className={Styles.formfilling}>
                        <div className={Styles.settingheaders}>
                            BASIC INFO
                            <div className={Styles.bottomm}>
                                <input type="reset"  value="CANCEL" className={Styles.cancelbutton} />
                                <input type="submit" disabled={isSubmitting} value="SAVE" className={Styles.savebutton} />
                            </div>
                        </div>
        
                        <div className={Styles.dividednames}>
                            <div className={Styles.dividednameone}>
                                <label for="texts">FIRST NAME</label>
                                {/* <input type="text" id="form-name" name='form-name' required/> */}
                                <Field type="text" name="texts"/>
                                <ErrorMessage name="texts" />
                            </div>
                            <div className={Styles.dividednametwo}>
                                <label for="text">LAST NAME</label>
                                {/* <input type="text" id="form-surname" name='form-surname'required/> */}
                                <Field type="text" name="text"/>
                                <ErrorMessage name="text" />
                            </div>
                        </div>
                        
                        <label for="email">EMAIL ADDRESS</label>
                        <Field type="email" name="email"/>
                        {/* <input type="email" id="form-email" name='form-email' required/> */}
                        {/* <ErrorMessage name="email"/> */}
        
                        <label for="phonenumber">PHONE NUMBER</label>
                        {/* <input type="number" name="phonenumber" id="phone" required/> */}
                        <Field type="number" onChange={ handlesubmit } name="phonenumber"/>
                        <ErrorMessage name="phonenumber" />
                    </form>
                )}
            </Formik>
        </div>
    </div>
  )
}

export default Settingproperties


// <Form className={Styles.settingform} >
                    // <Field type="text" name="text"/>
                    // <ErrorMessage name="text" component="div" />
                    // <Field type="email" name="email"/>
                    // <ErrorMessage name="email" component="div" />
                    // <Field type="number" name="phonenumber"/>
                    // <ErrorMessage name="phonenumber" component="div" />
                    // <button type="submit" disabled={isSubmitting}>
                    //     Submit
                    // </button>
                    // </Form>