import React from "react";
import HeaderTwo from "./HeaderTwo";
import EmployeeDetail from "./EmployeeDetail";
function EmployeePage({employeeList,getName, name}){
    return(
        <div className="empDetail-container">
            <div className="employeepage">
                <HeaderTwo/>
                <EmployeeDetail empDetail={employeeList} getName={getName} name={name}/>
            </div>
           
        </div>
    )
}
export default EmployeePage;