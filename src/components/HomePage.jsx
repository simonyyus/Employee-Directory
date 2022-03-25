import React from "react";
import HeaderOne from"./HeaderOne";
//import Search from "./Search";
import EmployeeListItem from "./EmployeeListItem";
function HomePage({getName, employeeList}){
   
    return(
        <div className="homepage">
            <HeaderOne/>
            <EmployeeListItem employeeList={employeeList} getName={getName} />
        </div>
    )
}
export default HomePage;