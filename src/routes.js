import React from "react";
import Apptrying from "./component/pageone/homecompiler/homecompiler";
import Learncompiler from "./component/learn/learncompiler/learncompiler";
import Supportcompiler from "./component/support/supportcompiler/supportcompiler";
import Desktopone from "./component/desktopone/desktoponecompiler/desktoponecompiler";
import Error from "./component/404";
import Usersetting from "./component/userprofile/usersettings/usersetting";
import Userprofile from "./component/userprofile/userprofile/userprofile";

const routes = [
    { path: '/', element: <Apptrying />, errorElement: <Error></Error>},
    { path: '/explore', element: <Apptrying />, errorElement: <Error></Error>},
    // { path: '/explore', element: <Userprofile />, errorElement: <Error></Error>},
    { path: '/login', element: <Userprofile />, errorElement: <Error></Error>},
    { path: '/settings', element: <Usersetting />, errorElement: <Error></Error>},
    { path: '/learn', element: <Learncompiler />},
    { path: '/support', element: <Supportcompiler />},
    { path: '/desktop', element: <Desktopone />},
]

export default routes