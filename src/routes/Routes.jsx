import React from 'react'
import { Route, Routes } from 'react-router'
import RootLayout from '../layout/RootLayout'
import Home from '../page/Home'
import AboutPage from '../page/AboutPage'
import ProjectPage from '../page/ProjectPage'
import ServicePage from '../page/ServicePage'
import ContactPage from '../page/ContactPage'
import CustomCodePage from '../page/CustomCodePage'
import WebflowPage from '../page/WebflowPage'

const Routess = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<RootLayout />}>
            <Route index element={<Home />}></Route>
            <Route path='/about' element={<AboutPage />}></Route>
            <Route path='/project' element={<ProjectPage />}></Route>
            <Route path='/service' element={<ServicePage />}></Route>
            <Route path='/customCode' element={<CustomCodePage />}></Route>
            <Route path='/webflow' element={<WebflowPage />}></Route>
            <Route path='/contact' element={<ContactPage />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default Routess
