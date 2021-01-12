import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import { Grid } from "@material-ui/core";
import fi from './../images/fi.png'

const Footer =()=>{
return(
    <React.Fragment>
<div className="latest-container">
        <hr className="line" /> &nbsp; &nbsp;
        <span className="latest-designs">Contact Us</span>
        &nbsp;&nbsp;
        <hr className="line" />
        <br />
        <br />
      </div>
      <Grid container direction="row" justify="center" alignItems="center">
        <div className="links">
          <a
            href="https://github.com/rameezamemon1"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon
              style={{
                marginRight: "20px",
                marginLeft: "20px",
                color: "green[500]",
              }}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/rameeza-memon/"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon style={{ marginRight: "20px", marginLeft: "20px" }} />
          </a>
          <a
            href="https://www.facebook.com/rameeza.memon1/"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon style={{ marginRight: "20px", marginLeft: "20px" }} />
          </a>
          <a
            href="https://www.instagram.com/rameeza.memon1/?hl=en"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon
              style={{ marginRight: "20px", marginLeft: "20px" }}
            />
          </a>
          <a
            href="mailto:rameeza.memon1@gmail.com"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <EmailIcon
              style={{ marginRight: "20px", marginLeft: "20px" }}
            />
          </a>
          <a
            href="https://www.fiverr.com/rameezamemon?up_rollout=true"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={fi} height="20px" width="20px" alt="fiverr"
              style={{ marginRight: "20px", marginLeft: "20px" }}
            />
          </a>
        </div>
      </Grid>
    </React.Fragment>
)
}

export default Footer