import React from "react";
function EmployeeDetail(props)
{
    return(
        <div className="container">
            {props.empDetail
            .filter(item=> item.name==="Fiker Workineh")
            .map((list)=>{
                return(
                    <div className="empDetail-container">
                        <div className="employeeList">
                        <div className="img-container">
                            <img src={list.img} alt="pic"/>
                        </div>
                        <div className="nameList">
                            <p>{list.name}</p>
                            <p>{list.position}</p>
                        </div>
                    </div>
                        <div className="more-detail">
                            <div className="callOffice">
                                <p><span style={{fontWeight:"bold"}}>Call Office</span></p>
                                <p>{list.callOffice}</p>
                            </div>
                             <div className="callMobile">
                                <p><span style={{fontWeight:"bold"}}>Mobile</span></p>
                                <p>{list.callMobile}</p>
                            </div>
                            <div className="sms">
                                <p><span style={{fontWeight:"bold"}}>SMS</span></p>
                                <p>{list.sms}</p>
                            </div>
                            <div className="email">
                                <p><span style={{fontWeight:"bold"}}>Email</span></p>
                                <p>{list.email}</p>
                            </div>
                        </div>
                    </div>
                )
                })}
        </div>
        )
}
export default EmployeeDetail;