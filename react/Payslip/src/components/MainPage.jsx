import React, { useState } from 'react'
import { data, NavLink } from 'react-router-dom';
import'./Main.css'

const syl={
    "font-family":"Quicksand,FontAwesome"
}
const daysWeek=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
    const months=["Jan","Feb","March","April","May","June","July","Aug","Sep","Oct","Nov","Dec"]

function MainPage() {

const[selectDate,setSelectdate] =useState(new Date()) 
const daysMonth=()=>{
    const daysArray=[];

    const firstDay=new Date(selectDate.getFullYear(),selectDate.getMonth(),1)
    const lastDay=new Date(selectDate.getFullYear(),selectDate.getMonth()+1,0)
    
    for(let i=0; i<firstDay.getDay(); i++){
        daysArray.push(null);
    }
    for(let i=1; i<=lastDay.getDate(); i++){
        daysArray.push(new Date(selectDate.getFullYear(), selectDate.getMonth(),i));
    }
    return daysArray;
} 

const handleMonth=(e)=>{
    const newMonth= parseInt(e.target.value,10)
    setSelectdate(new Date(selectDate.getFullYear(),newMonth,1))
}
const handleYear=(e)=>{
    const newYear= parseInt(e.target.value,10)
    setSelectdate(new Date(newYear,selectDate.getMonth(),1))
}

  return (
    <>
    <div className="main">
        <div className="mainbox1">
            <div class="manisubbx">
                <NavLink to="/MainPage"><p><img src="./src/images/Overview.png" alt="img" />Overview</p></NavLink>
            </div>
            <div className="manisubbx">
                <NavLink to="/PayDetails"><p><img src="./src/images/Payroll.png" alt="img" />Payroll</p></NavLink>
            </div>
            <div className="manisubbx">
                <NavLink to="/Payslip"><p><img src="./src/images/Payroll.png" alt="img" />Payslip</p></NavLink>
            </div>
        </div> 
        <div className="mainbox2">
            <div className="mainsubbx21">
                <div>
                    <h2>Good Morning!!</h2>
                </div>
                <div className="mainbx2">
                    <div>
                    <input style={syl} type="text" placeholder='Search                      &#xf002;'/>
                    </div>
                    <img src="./src/images/notification.png" alt="img" />
                    <img src="./src/images/Profile.png" alt="img" />
                </div>   
            </div>
            <div className="mainsubbx22">
                <div className="mainsubx21">
                    <div className="smallbx">
                        <img src="./src/images/Total.png" alt="img" />
                        <p>Total Employees</p>
                    </div>
                    <div className="smallbx">
                        <img src="./src/images/no of leave.png" alt="img" />
                        <p>Number Of leave</p>
                    </div>
                    <div className="smallbx">
                        <img src="./src/images/add.png" alt="img" />
                        <p>New Employee's</p>
                    </div>
                    <div className="smallbx">
                        <img src="./src/images/holiday.png" alt="img" />
                        <p>Holiday of this Year</p>
                    </div>
                </div>
                <div className="mainsubx21">
                    <div className="calender">
                        <div className='header'>
                        <button onClick={()=>{setSelectdate(new Date(selectDate.getFullYear(),selectDate.getMonth() -1,1))}}>⬅️</button>
                        <select value={selectDate.getMonth()} onChange={handleMonth}>
                            {months.map((month,index)=>(
                                <option key={index} value={index}>{month}</option>
                            ))}
                        </select>
                        <select value={selectDate.getFullYear()} onChange={handleYear}>
                            {Array.from({length:10},(_,i)=>selectDate.getFullYear()-5+ i).map((year)=>(
                                <option key={year} value={year}>{year}</option>
                            ))}
                        </select>
                        <button onClick={()=>{setSelectdate(new Date(selectDate.getFullYear(),selectDate.getMonth() +1,1))}}>➡️</button>
                        </div>
                        <div className='daysofweek'>
                            {daysWeek.map((day)=>(
                                <div key={day}>{day}</div>
                            ))}
                        </div>
                        <div className='days'>
                            {daysMonth().map((day,index)=>(
                                <div key={index} className={day? "day":"empty"}>{day ? day.getDate():""}</div>
                            ))}
                        </div>
                    </div>
                    <div className="meeting">
                        <div className="smallbx2">
                            <h4>Upcomming Meeting</h4>
                            <p>View All</p>
                        </div>
                        <div className="meetback">
                        <div className="smallbx21">
                            <h5>Client Meeting - 10.00 AM</h5>
                            <div class="time">
                                <h3>Wed</h3>
                                <p>June 17</p>
                            </div>
                        </div>
                        <div className="smallbx21">
                            <h5>Team Meeting- 11.00 AM</h5>
                            <div class="time">
                                <h3>Wed</h3>
                                <p>June 17</p>
                            </div>
                        </div>
                        <div className="smallbx21">
                            <h5>HR Interview- 2.00 PM</h5>
                            <div class="time">
                                <h3>Wed</h3>
                                <p>June 17</p>
                            </div>
                        </div>
                        <div className="smallbx21">
                            <h5>Client Meeting- 4.00 PM</h5>
                            <div className="time">
                                <h3>Wed</h3>
                                <p>June 17</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
    </>
  )
}

export default MainPage