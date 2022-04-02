import React, { useEffect } from 'react'
import { StyledLogo } from './StyleComponent'

type Props = {}

const Logo = (props: Props) => {
  useEffect(() => {
    var svg = document.getElementsByTagName("svg")[0];
    var bbox = svg.getBBox();

    svg.setAttribute("viewBox", (bbox.x - 10) + " " + (bbox.y - 10) + " " + (bbox.width + 20) + " " + (bbox.height + 20));
    svg.setAttribute("width", (bbox.width + 20) + "px");
    svg.setAttribute("height", (bbox.height + 20) + "px");
  }, []);
  return (

    <StyledLogo>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" style={{ padding: "10px" }}>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="rgba(67,86,205,1)" />
            <stop offset="100%" stop-color="rgba(0,212,255,1)" />
          </linearGradient>
        </defs>
        <path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" d="M93.5228 81.1569C81.3557 81.1569 71.4924 91.0203 71.4924 103.187V104.729H50.8032V103.187C50.8032 79.594 69.9294 60.4678 93.5228 60.4678V81.1569Z" fill="url(#gradient)" />
        <path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" d="M110.928 104.729V103.188H131.618V104.729C131.618 128.323 112.491 147.449 88.8979 147.449V126.76C101.065 126.76 110.928 116.896 110.928 104.729Z" fill="url(#gradient)" />
        <path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" d="M92.7513 50V90.8542L128.21 70.8125L92.7513 50ZM89.6702 157.917L89.6703 117.063L54.2119 137.104L89.6702 157.917Z" fill="#5cdbd3" />
      </svg>
      <h2>SwitchIt!</h2>
    </StyledLogo>
  )
}

export default Logo