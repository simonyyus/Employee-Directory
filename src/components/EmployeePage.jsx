import React from "react";
import HeaderTwo from "./HeaderTwo";
import EmployeeDetail from "./EmployeeDetail";
//import EmployeeDetail from "./EmployeeDetail";
function EmployeePage(props){
    return(
        <div className="empDetail-container">
            <div className="employeepage">
                <HeaderTwo/>
                <EmployeeDetail empDetail={props.employeeList}/>
            </div>
           
        </div>
    )
}
export default EmployeePage;