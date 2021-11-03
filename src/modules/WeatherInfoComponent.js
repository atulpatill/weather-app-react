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
const WeatherInfoContainer = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

const InfoContainer = styled.div`
  display: flex;
  margin: 5px 10px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const InfoIcon = styled.img`
  width: 36px;
  height: 36px;
`;

const InfoLabel = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin: 15px;
  & span {
    font-size: 12px;
    text-transform: capitalize;
  }
`;


const WeatherInfoComponent= () =>{
  return(
    <>
    <InfoContainer>
    <InfoIcon />
    <InfoLabel>
      
    </InfoLabel> 

    </InfoContainer>
    

    </>
  )
}



const WeatherComponents =()=> {
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
       <WeatherInfoContainer>
         <WeatherInfoComponent />
         <WeatherInfoComponent />
         <WeatherInfoComponent />
         <WeatherInfoComponent />

       </WeatherInfoContainer>
       </>
    )
}

export default WeatherComponents
