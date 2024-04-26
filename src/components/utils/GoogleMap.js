import React from "react";

const GoogleMap = () => {
  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2136.5297663068673!2d78.52608618812083!3d17.418400204464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDI1JzA4LjQiTiA3OMKwMzEnMzUuOSJF!5e0!3m2!1sen!2sin!4v1714120876360!5m2!1sen!2sin"
        width="500"
        title="maps"
        height="600"
        style={{ border: 0, borderRadius: 5 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
};

export default GoogleMap;
