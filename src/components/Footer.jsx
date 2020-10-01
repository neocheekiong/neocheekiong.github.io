
import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small">
      <MDBRow>
        <MDBCol className='p-0'>
          <div className="footer-copyright text-left py-3 pl-4">
            <MDBContainer fluid>
              &copy; {new Date().getFullYear()} Copyright: <a href="www.linkedin.com/in/neo-chee-kiong"> Neo Chee Kiong </a>
            </MDBContainer>
          </div>
        </MDBCol>
        <MDBCol className='p-0'>
          <div className='footer-copyright text-right py-3 pr-5'>
            Projects Photo by <a href="https://unsplash.com/@ilyapavlov?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
              Ilya Pavlov</a> on 
            <a href="https://unsplash.com/s/photos/web?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
              Unsplash
            </a>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBFooter>
  );
}

export default Footer;
