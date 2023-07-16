import React from 'react'
import Styles from './userprofile.module.css'
import Usernavigation from '../usernavigation/usernavigation'
// import nikelogo from '../../../images/nikelogo.png'
import IconsReactjs  from 'icons-reactjs';

function Userprofile() {
  return (
    <div className={Styles.Userprofilegeneral}>
        <Usernavigation />
        <div className={Styles.general}>
            <div className={Styles.avatarprofilecontainer}>
                <div className={Styles.avatarprofile}>
                    {/* <img src={nikelogo} alt="" /> */}
                </div>
                <div className={Styles.avatarcredentials}>
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
                            09060758772</h3>
                        <p className={Styles.Paststays}>
                          The last hotel that i used from thiss website was not satisfacting enough.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Userprofile
