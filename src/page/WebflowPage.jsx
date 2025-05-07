import React from 'react'
import WebflowHero from '../components/Webflow page part/webflow hero section/WebflowHero'
import WebflowService from '../components/Webflow page part/webflow service section/WebflowService'
import WebflowPricing from '../components/Webflow page part/webflow pricing section/WebflowPricing'
import WebflowFAQ from '../components/Webflow page part/WebflowFAQ section/WebflowFAQ'

const WebflowPage = () => {
  return (
    <>
      <WebflowHero />
      <WebflowService />
      <WebflowPricing />
      <WebflowFAQ />
    </>
  )
}

export default WebflowPage
