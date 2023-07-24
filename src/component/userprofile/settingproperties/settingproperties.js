import React, { useState } from 'react'
import Styles from '../settingproperties/settingproperties.module.css'
import IconsReactjs  from 'icons-reactjs';
// import nikelogo from '../../../images/nikelogo.png'
import { useFormik } from 'formik';

function Settingproperties() {

    const formik = useFormik ({
        initialValues: {
            firstname: 'wer',
            surname: '',
            formEmail: '',
            formPhone: '',
        },
        onSubmit: values => {
            console.log('Form data', values)
        }
    })

    // console.log('From values:', formik.values)

  return (
    <div className={Styles.settingprofileform}>
        <div className={Styles.avatarprofilecontainer}>
            <div className={Styles.avatarprofile}>
                {/* <img src={nikelogo} alt="" /> */}
            </div>
            <div className={Styles.avatarcredentialsnames}>
                {/* <h1 className={Styles.usersname}>{firstname} {lastname}</h1> */}
                <h3 className={Styles.gmail}>
                    <IconsReactjs 
                    icon={'email'}
                    fontSize={'2rem'} 
                    color={'#6B705C'}
                    /></h3>
                <h3 className={Styles.phonenumber}>
                    <IconsReactjs 
                    icon={'call'} 
                    fontSize={'2rem'} 
                    color={'#6B705C'}
                    /></h3>
            </div>
            <div className={Styles.avatarupload}>Upload new avatar</div>
        </div>
        <div className={Styles.settingformcontainer}>
            {/* <Formik
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
                                <input type="reset"  value="CANCEL" className={Styles.cancelbutton} required/>
                                <input type="submit" disabled={isSubmitting} value="SAVE" className={Styles.savebutton} required/>
                            </div>
                        </div>
        
                        <div className={Styles.dividednames}>
                            <div className={Styles.dividednameone}>
                                <label for="texts">FIRST NAME</label>
                                <Field type="text" name="texts" value={firstname} onChange={(e) => setFirstname(e.target.value)} required/>
                                <ErrorMessage name="texts" />
                            </div>
                            <div className={Styles.dividednametwo}>
                                <label for="text">LAST NAME</label>
                                <Field type="text" name="text" value={lastname} onChange={(e) => setLastname(e.target.value)} required/>
                                <ErrorMessage name="text" /> 
                            </div>
                        </div>
                        
                        <label for="email">EMAIL ADDRESS</label>
                        <Field type="email" name="email" value={emailchange} onChange={(e) => setEmailchange(e.target.value)} required/>
        
                        <label for="phonenumber">PHONE NUMBER</label>
                        <Field type="number" name="phonenumber" value={number} onChange={(e) => setNumber(e.target.value)} required/>
                        <ErrorMessage name="phonenumber" />
                    </form>
                )}
            </Formik> */}
            <form onSubmit={formik.handleSubmit}>
                <div className={Styles.settingheaders}>
                    BASIC INFO
                    <div className={Styles.bottomm}>
                        <input type="reset"  value="CANCEL" className={Styles.cancelbutton} />
                        <input type="submit" value="SAVE" className={Styles.savebutton} />
                    </div>
                </div>
                
                
                <div className={Styles.dividednames}>
                    <div className={Styles.dividednameone}>
                        <label htmlFor="firstname">FIRST NAME</label>
                        <input 
                            type="text" 
                            id="firstname" 
                            name='firstname' 
                            placeholder="firstname" 
                            onChange={formik.handleChange} 
                            value={formik.values.firstname}
                        />
                    </div>
                    <div className={Styles.dividednametwo}>
                        <label htmlFor="surname">LAST NAME</label>
                        <input 
                            type="text" 
                            id="surname" 
                            name='surname' 
                            placeholder="surname" 
                            onChange={formik.handleChange} 
                            value={formik.values.surname} 
                        />
                    </div>
                </div>
                
                <label htmlFor="formEmail" class="design">Email Address</label>
                <input 
                    type="email" 
                    id="formEmail" 
                    name='formEmail' 
                    placeholder="e.g. stephenking@lorem.com" 
                    onChange={formik.handleChange} 
                    value={formik.values.formEmail}
                />

                <label htmlFor="formPhone">PHONE NUMBER</label>
                <input 
                    type="number" 
                    id="formPhone" 
                    name='formPhone' 
                    placeholder="e.g. +1 234 567 890" 
                    onChange={formik.handleChange} 
                    value={formik.values.formPhone}
                />
            </form>
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