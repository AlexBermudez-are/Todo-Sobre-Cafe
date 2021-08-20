import React from "react";
import LogoConNav from "../LogoConNav";

const ContactoHeader = () => {
  return (
    <div style={{display:"flex", justifyContent:"center"}}>
      <section style={{backgroundColor:"rgb(255, 188, 62)", paddingBottom:"5%", marginBottom:"7%", borderBottomRightRadius:"100px", borderBottomLeftRadius:"100px", boxShadow:"0px 12px 12px 1px rgb(0 0 0 / 20%)"}}>
        <LogoConNav />
      </section>
    </div>
  );
};

export default ContactoHeader;
