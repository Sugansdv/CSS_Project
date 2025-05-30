import React, { useState } from 'react'
import'./Paydtl.css'
import { NavLink, useNavigate } from 'react-router-dom';

function PayDetails() {
    const navigate = useNavigate()
  const [employeeName, setEmployeeName] = useState('');
  const [employeeRole, setEmployeeRole] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [date, setDate] = useState('');
  const [basicSalary, setBasicSalary] = useState('');
  const [totalSalary, setTotalSalary] = useState('');
  const [workingDays, setWorkingDays] = useState('');
  const [presentDays, setPresentDays] = useState('');
  const [leaveDays, setLeaveDays] = useState('');
  const [additions, setAdditions] = useState('');
  const [deductions, setDeductions] = useState('');

  const handleSubmitPayroll = (e) => {
    e.preventDefault();
    const payrollData = {
      employeeName,
      employeeRole,
      employeeId,
      date,
      basicSalary: parseFloat(basicSalary) || 0, 
      totalSalary: parseFloat(totalSalary) || 0, 
      workingDays: parseInt(workingDays) || 0,   
      presentDays: parseInt(presentDays) || 0, 
      leaveDays: parseInt(leaveDays) || 0,    
      additions: parseFloat(additions) || 0,   
      deductions: parseFloat(deductions) || 0 
    };

    if (!employeeName || !employeeId || !date) {
      alert('Please fill in Employee Name, Employee ID, and Date.');
      return;
    }
    
    console.log("Payroll Data Submitted:", payrollData);
    navigate('/Payslip', { state: { payrollData } });
  };
  return (
    <>
    <div className="main1">
        <div className="mainbox1">
            <div className="manisubbx">
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
                    <h2>Payroll Details</h2>
                </div>
                <div className="mainbx2">
                    <button className="monthbtn">This Month</button>
                    <button className="dwnldbtn">Download</button>
                </div>   
            </div>
            <div className="mainsubbx22">
                <div className="mainsubx21">
                    <div className="smallbx">
                        <label >Employee Name</label><br/>
                        <input type="text"
                        value={employeeName}
                        onChange={(e) => setEmployeeName(e.target.value)}/>
                    </div>
                    <div className="smallbx">
                        <label >Employee Role</label><br/>
                        <input type="text"
                        value={employeeRole}
                        onChange={(e) => setEmployeeRole(e.target.value)}
                        />
                    </div>
                    <div className="smallbx">
                        <label >Employee I'd</label><br/>
                        <input type="text"
                        value={employeeId}
                  onChange={(e) => setEmployeeId(e.target.value)}/>
                    </div>
                    <div className="smallbx">
                        <label >Date</label><br/>
                        <input type="date"
                        value={date}
                  onChange={(e) => setDate(e.target.value)}/>
                    </div>
                    <div className="smallbx">
                        <label >Basic Salary</label><br/>
                        <input type="number"
                        value={basicSalary}
                  onChange={(e) => setBasicSalary(e.target.value)}/>
                    </div>
                    <div className="smallbx">
                        <label >Total Salary</label><br/>
                        <input type="number"
                        value={totalSalary}
                  onChange={(e) => setTotalSalary(e.target.value)}/>
                    </div>
                    <div className="smallbx">
                        <label >No of Working Days</label><br/>
                        <input type="number"
                        value={workingDays}
                  onChange={(e) => setWorkingDays(e.target.value)}/>
                    </div>
                    <div className="smallbx">
                        <label >Total Present Days</label><br/>
                        <input type="number"
                        value={presentDays}
                  onChange={(e) => setPresentDays(e.target.value)}/>
                    </div>
                    <div className="smallbx">
                        <label >Total Leave Days</label><br/>
                        <input type="number"
                        value={leaveDays}
                  onChange={(e) => setLeaveDays(e.target.value)}/>
                    </div>
                    <div className="smallbx">
                        <label >Additions</label><br/>
                        <input type="number"
                        value={additions}
                  onChange={(e) => setAdditions(e.target.value)}/>
                    </div>
                    <div className="smallbx">
                        <label >Deductions</label><br/>
                        <input type="number"
                        value={deductions}
                  onChange={(e) => setDeductions(e.target.value)}/>
                    </div>
                </div>
                <div className="mainsubx22">
                    <button type="submit" className="submitbtn" onClick={handleSubmitPayroll}>Submit Payroll</button>
                    <button type="button" className="cancelbtn">Cancel</button>
                </div>
            </div>
        </div> 
    </div>
    </>
  )
}

export default PayDetails