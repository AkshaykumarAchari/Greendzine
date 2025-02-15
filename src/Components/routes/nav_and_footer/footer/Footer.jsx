import React from 'react';
import "./Footer.css";
import { DateTime } from "luxon";
 


function Footer() {
  return (
    <>
    <div className="footer-main">©{DateTime.local().year}, Greendzine Technologies Pvt. Ltd. All Rights Reserved.</div>
    </>
  )
}

export default Footer