import React from 'react'
import'./Payslip.css'
import { NavLink, useLocation } from 'react-router-dom';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf'; 

function Payslip() {
    const location = useLocation(); // Initialize useLocation
  const payrollData = location.state?.payrollData;

    const employeeName = payrollData?.employeeName || 'N/A';
  const employeeId = payrollData?.employeeId || 'N/A';
  const employeeRole = payrollData?.employeeRole || 'N/A';
  const date = payrollData?.date || 'N/A';
  const basicSalary = parseFloat(payrollData?.basicSalary) || 0;
  const totalSalary = parseFloat(payrollData?.totalSalary) || 0;
  const additions = parseFloat(payrollData?.additions) || 0;
  const deductions = parseFloat(payrollData?.deductions) || 0;
  const calculatedTotalEarnings = totalSalary + additions - deductions;
  const formattedBasicSalary = basicSalary.toLocaleString('en-IN', { style: 'currency', currency: 'INR' });
  const formattedTotalSalary = totalSalary.toLocaleString('en-IN', { style: 'currency', currency: 'INR' });
  const formattedAdditions = additions.toLocaleString('en-IN', { style: 'currency', currency: 'INR' });
  const formattedDeductions = deductions.toLocaleString('en-IN', { style: 'currency', currency: 'INR' });
  const formattedCalculatedTotalEarnings = calculatedTotalEarnings.toLocaleString('en-IN', { style: 'currency', currency: 'INR' });

  const month = date !== 'N/A' ? new Date(date).toLocaleString('default', { month: 'long' }) : 'N/A';
    const handleDownloadPdf = () => {
    const input = document.querySelector('.mainbox222');

    if (input) {
      html2canvas(input, { scale: 2 }).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4'); 
        const imgWidth = 210; 
        const pageHeight = 297;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;
        let position = 0;

        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }
        pdf.save('payslip.pdf');
      }).catch(err => {
        console.error("Error generating PDF:", err);
        alert("Failed to generate PDF. Please try again.");
      });
    } else {
      alert("Could not find the content to download.");
    }
  };

  const handleSaveData = () => {
    console.log("Saving payroll data:", payrollData);
    alert("Saved data!");  
  };

  return (
    <>
    <div className="main2">
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
          <div className='color'>
          <div className="mainbox222">
            <div className="mainsubbx21">
                    <h2>Payroll Details</h2> 
            </div>
            <div className="mainsubbx22">
                <div className="paybox1">
                    <div className="paybox11">
                        <table>
                            <tbody>
                            <tr>
                                <th>Employee Name</th>
                                <td>: {employeeName}</td>
                            </tr>
                            <tr>
                                <th>Employee I'D</th>
                                <td>: {employeeId}</td>
                            </tr>
                            <tr>
                                <th>Role</th>
                                <td>: {employeeRole}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="paybox12">
                        <table>
                            <tbody>
                            <tr>
                                <th>Date</th>
                                <td>: {date}</td>
                            </tr>
                            <tr>
                                <th>Month</th>
                                <td>: {month}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="paybox2">
                  <table>
                    <thead>
                    <tr>
                        <th colSpan="2">Employee Details</th>
                        <th colSpan="2">Earnings</th>
                        <th >Additions</th>
                        <th >Deductions</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="tablerow2">
                        <td>Employee I'd</td>
                        <td>Employee Name</td>
                        <td>Basic Salary</td>
                        <td>Total Salary</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>{employeeId}</td>
                        <td>{employeeName}</td>
                        <td>{formattedBasicSalary}</td>
                    <td>{formattedTotalSalary}</td>
                    <td>{formattedAdditions}</td>
                    <td>{formattedDeductions}</td>
                    </tr>
                    </tbody>
                  </table>  
                </div>
                <h5 className="total">Total Earnings:{formattedCalculatedTotalEarnings}</h5>
            </div>
          </div>
            <center className='btns'>
                    <button className="savebtn" onClick={handleSaveData}>Save</button>
                    <button className="downloadbtn" onClick={handleDownloadPdf}>Download</button>
            </center>
          </div> 
          </div>
        
    </div>
    </>
  )
}

export default Payslip