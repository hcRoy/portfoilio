import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import userData from "@/constants/data";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

import OutlinedInput from "@mui/material/OutlinedInput";
import classes from "./contact.module.css";
import { Button } from "@mui/joy";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import Footer from "../footer/footer-item";

export default function Contact() {
  return (
    <div className={classes.contact}>
      <h1>Contact</h1>
      <div className={classes.flex}>
        <div>
          <h2>Get in touch, let's Talk.</h2>
          <p>Fill the details and I will back to you as soon as I can.</p>
          <div className={classes.icon}>
            <PhoneIcon />
            <p>{userData.phone}</p>
          </div>
          <div className={classes.icon}>
            <EmailIcon />
            <p>{userData.email}</p>
          </div>
          <div className={classes.icon}>
            <HomeIcon />
            <p>{userData.address}</p>
          </div>
          <div className={classes.icons}>
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
          </div>
        </div>
        <div>
          <form className={classes.formdata}>
            <div className={classes.form}>
              <div>
                {/* <TextField
                  id="name"
                  label="Your name"
                  variant="standard"
                ></TextField> */}
                <FormControl fullWidth sx={{ m: 1 }}>
                  <InputLabel htmlFor="outlined-adornment-amount">
                    Your Name
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    startAdornment={
                      <InputAdornment position="start"></InputAdornment>
                    }
                    label="Your Name"
                  />
                </FormControl>
              </div>
              <div>
                <FormControl fullWidth sx={{ m: 1 }}>
                  <InputLabel htmlFor="outlined-adornment-amount">
                    Email
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    startAdornment={
                      <InputAdornment position="start"></InputAdornment>
                    }
                    label="Email"
                  />
                </FormControl>
              </div>
              <div>
                <FormControl fullWidth sx={{ m: 1 }}>
                  <InputLabel htmlFor="outlined-adornment-amount">
                    Message
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    startAdornment={
                      <InputAdornment position="start"></InputAdornment>
                    }
                    label="Message"
                  />
                </FormControl>
              </div>
              <Button variant="soft">Send Message</Button>
            </div>
          </form>
        </div>
      </div>
      <div className={classes.footer}>
        <Footer></Footer>
      </div>
    </div>
  );
}
