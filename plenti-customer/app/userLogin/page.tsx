"use client"

import React from 'react'
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
        <ProfileInfo />
    </div>
  )
}

export default page