import React from 'react'
import styled from 'styled-components'

const WeatherCondition = styled.div `

`;
const Condition = styled.span `
margin: 20px auto;
text-transform: capitalize;
font-size: 14px;
& span {
  font-size: 28px;
}
`;

const WeatherLogo = styled.img `
width: 140px;
height: 140px;
margin: 40px auto;
`;

const Location = styled.span`
margin: 15px auto;
text-transform: capitalize;
font-size: 28px;
font-weight: bold;`;

const WeatherInfoLabel = styled.span `
margin: 20px 25px 10px;
text-transform: capitalize;
text-align: start;
width: 90%;
font-weight: bold;
font-size: 14px;
`







function WeatherComponents() {
    return (
       <>
       <WeatherCondition>
           <Condition>
               <span>30C</span> | Cloudy
           </Condition>
         <WeatherLogo src="/Icons/perfect-day.svg"/>
       </WeatherCondition>
       <Location>London , GB</Location>
       <WeatherInfoLabel>WeatherInfo</WeatherInfoLabel>
       </>
    )
}

export default WeatherComponents
