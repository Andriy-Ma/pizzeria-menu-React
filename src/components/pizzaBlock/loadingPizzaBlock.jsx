import React from 'react'
import ContentLoader from "react-content-loader";

function LoadingPizzaBlock() {
  return (
    <ContentLoader 
    className='pizza-block'
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="134" cy="123" r="120" /> 
    <rect x="0" y="269" rx="6" ry="6" width="280" height="31" /> 
    <rect x="0" y="310" rx="10" ry="10" width="280" height="84" /> 
    <rect x="0" y="415" rx="3" ry="3" width="104" height="30" /> 
    <rect x="137" y="404" rx="20" ry="20" width="145" height="47" />
  </ContentLoader>
  )
}

export default LoadingPizzaBlock