import React from "react";
import HeaderOne from"./HeaderOne";
import Search from "./Search";
import EmployeeListItem from "./EmployeeListItem";
function HomePage(props){
    return(
        <div className="homepage">
            <HeaderOne/>
            <Search/>
            <EmployeeListItem employeeList={props.employeeList}/>
        </div>
    )
}
export default HomePage;