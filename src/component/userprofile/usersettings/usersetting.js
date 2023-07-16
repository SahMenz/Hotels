import React from 'react'
import Styles from '../usersettings/usersetting.module.css'
import Usernavigation from '../usernavigation/usernavigation'
import Settingproperties from '../settingproperties/settingproperties'

function Usersetting() {
  return (
    <div>
        <Usernavigation />
        <div className={Styles.settingsection}>
            <div className={Styles.topcolorsection}>
              <h1 className={Styles.settingsheader}>Settings</h1>
              <ul className={Styles.unorderdersettings}>
                <li className={Styles.settinglist}>Settings</li>
                <li className={Styles.settinglisttwo}>Notification</li>
                <li className={Styles.settinglist}>Privacy</li>
              </ul>
            </div>
            <Settingproperties />
        </div>
    </div>
  )
}

export default Usersetting