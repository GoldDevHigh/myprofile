import React from "react";

const Address = () => {
  return (
    <>
      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-map position-absolute"></i>
        <span className="d-block">Address Point</span>26 Sin Ming Lane of Singapore
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-envelope-open position-absolute"></i>
        <span className="d-block">mail me</span>{" "}
        <a href="mailto:chrlschwb77@gmail.com">stuartlee.dev@gmail.com</a>
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-phone-square position-absolute"></i>
        <span className="d-block">call me</span>{" "}
        <a href="Tel: +216 21 184 010">+1 413 376 8769</a>
      </p>
      {/* End .custom-span-contact */}
      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-skype position-absolute"></i>
        <span className="d-block">skype</span>{" "}
        <a href="skype:cid.418bf82b89cdf729?chat">live:.cid.2c016e69ca4ef739</a>
      </p>
      {/* End .custom-span-contact */}
      <p className="open-sans-font custom-span-contact position-relative">
        <i className="bi bi-discord position-absolute"></i>
        <span className="d-block">discord</span>{" "}
        gold_dev_high
      </p>
      
    </>
  );
};

export default Address;
