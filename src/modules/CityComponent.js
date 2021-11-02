import React from 'react'
import styled from 'styled-components'


const WeatherLogo = styled.img `
width: 140px;
height: 140px;
margin: 40px auto;
`

const ChooseCityLabel = styled.span`
color: black;
margin: 10px auto;
font-size: 18px;
font-weight: bold;
`
function CityComponent() {
    return (
      <>
        <WeatherLogo  src="/Icons/perfect-day.svg"/>
        <ChooseCityLabel>Find Weather of your city</ChooseCityLabel>
      </>
    )
}

export default CityComponent
