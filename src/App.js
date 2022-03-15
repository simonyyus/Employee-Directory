import React from "react";
import Wrapper from "./components/Wrapper";
import "./App.css";

function App() {
  //define employee state here using react hooks
  const [employeeData, setEmployeeData] = React.useState([
    {
      img: "./images/pic-one.jpg",
      name: "Simon Worku",
      position: "CEO",
      callOffice: "800-000-0000",
      callMobile: "571-000-0000",
      sms: "703-000-0000",
      email: "simon@gmail.com",
    },
    {
      img: "./images/pic-two.jpg",
      name: "Fiker Workineh",
      position: "HR",
      callOffice: "800-000-0000",
      callMobile: "571-000-0001",
      sms: "703-000-0001",
      email: "fiker@gmail.com",
    },
    {
      img: "./images/pic-three.jpg",
      name: "Girum Dori",
      position: "Marketing Manager",
      callOffice: "800-000-0000",
      callMobile: "571-000-0002",
      sms: "703-000-0002",
      email: "girum@gmail.com",
    },
    {
      img: "./images/pic-four.jpg",
      name: "Bethel Tefera",
      position: "QA Manager",
      callOffice: "800-000-0000",
      callMobile: "571-000-0003",
      sms: "703-000-0003",
      email: "bethel@gmail.com",
    },
    {
      img: "./images/pic-five.jpg",
      name: "Nega T",
      position: "IT Manager",
      callOffice: "800-000-0000",
      callMobile: "571-000-0004",
      sms: "703-000-0004",
      email: "nega@gmail.com",
    },
    {
      img: "./images/pic-six.jpg",
      name: "Elleni E",
      position: "VP of sales",
      callOffice: "800-000-0000",
      callMobile: "571-000-0005",
      sms: "703-000-0005",
      email: "elleni@gmail.com",
    },
    {
      img: "./images/pic-seven.jpg",
      name: "Assegid A",
      position: "Finance Manager",
      callOffice: "800-000-0000",
      callMobile: "571-000-0006",
      sms: "703-000-0006",
      email: "asseged@gmail.com",
    },
  ]);
  return (
    <div className="App">
      <Wrapper employeeList={employeeData} />
    </div>
  );
}

export default App;
