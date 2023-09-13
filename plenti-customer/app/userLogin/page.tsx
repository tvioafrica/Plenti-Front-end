"use client"

import React from 'react'
import Brands from '../Components/loginflow/Brands'
import OtpInput from '../Components/loginflow/Otpinput'
import ProfileInfo from '../Components/loginflow/ProfileInfo'
import Registerform from '../Components/loginflow/Registerform'

const page = () => {
  const handleOtpSubmit = (otp: string) => {
    console.log('OTP Submitted:', otp);

  };
  return (
    <div>
        {/* <Registerform /> */}
        {/* <OtpInput onOtpSubmit={handleOtpSubmit} /> */}
        {/* <ProfileInfo /> */}
        <Brands />
    </div>
  )
}

export default page