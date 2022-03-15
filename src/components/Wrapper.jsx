import React from "react";
import HomePage from "./HomePage";
import EmployeePage from"./EmployeePage";
import  "./Style.css";

function Wrapper(props){
    return(
    <div className="wrapper" /*style={styleWrapper}*/>
        <HomePage employeeList={props.employeeList}/>
        <EmployeePage employeeList={props.employeeList}/>
    </div>
    )
};
/*const styleWrapper={
    display:"flex",
    justifyContent:"center",
    margin:"20px 80px 40px",
}*/

export default Wrapper;