import React from "react";
import Apptrying from "./component/pageone/homecompiler/homecompiler";
import Learncompiler from "./component/learn/learncompiler/learncompiler";
import Supportcompiler from "./component/support/supportcompiler/supportcompiler";
import Desktopone from "./component/desktopone/desktoponecompiler/desktoponecompiler";
import Error from "./component/404";

const routes = [
    { path: '/', element: <Apptrying />, errorElement: <Error></Error>},
    { path: '/explore', element: <Apptrying />, errorElement: <Error></Error>},
    { path: '/learn', element: <Learncompiler />},
    { path: '/support', element: <Supportcompiler />},
    { path: '/desktop', element: <Desktopone />},
]

export default routes