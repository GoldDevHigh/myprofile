import React from "react";

const Address = () => {
  return (
    <>
      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-map position-absolute"></i>
        <span className="d-block">Address Point</span>7131 Sands Lane Anderson CA,
        United States Of America 96007.
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-envelope-open position-absolute"></i>
        <span className="d-block">mail me</span>{" "}
        <a href="mailto:chrlschwb77@gmail.com">chrlschwb77@gmail.com</a>
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-phone-square position-absolute"></i>
        <span className="d-block">call me</span>{" "}
        <a href="Tel: +216 21 184 010">+1 5307107475</a>
      </p>
      {/* End .custom-span-contact */}
      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-skype position-absolute"></i>
        <span className="d-block">skype</span>{" "}
        <a href="skype:cid.418bf82b89cdf729?chat">live:.cid.418bf82b89cdf729</a>
      </p>
      {/* End .custom-span-contact */}
      <p className="open-sans-font custom-span-contact position-relative">
        <i className="bi bi-discord position-absolute"></i>
        <span className="d-block">discord</span>{" "}
        Chaos77#4726
      </p>
      
    </>
  );
};

export default Address;
