import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import React, { useState, useEffect } from 'react';
import styled, {keyframes} from "styled-components";

interface UpSwitchAnimationProps {
    upperChild: React.ReactNode
    lowerChild: React.ReactNode
    duringAnimationUpperChild: React.ReactNode,
    duringAnimationLowerChild: React.ReactNode,
    initialComponent: 'upper' | 'lower'
}

export default function VerticalSwitchAnimation({upperChild, lowerChild, duringAnimationUpperChild, duringAnimationLowerChild, initialComponent}: UpSwitchAnimationProps) {
    const [upState, setUpState] = useState(false)
    const [startInAnimation, setStartInAnimation] = useState(false)
    const [animationActive, setAnimationActive] = useState(false)
    const [isUp, setIsUp] = useState(initialComponent == 'upper')
    const [postAnimation, setPostAnimation] = useState<React.ReactNode>(<></>) // what will be displayed after user will press button
    const [currentComponent, setCurrentComponent] = useState<React.ReactNode>(<></>) // what will

    // useEffect(() => {
    //     setPostAnimation(isUp ? lowerChild : upperChild) // set what should be displayed after animation button has been pressed
    //     setCurrentComponent(isUp ? upperChild : lowerChild) // the current component user wants to see
    // }, [])

    useEffect(() => {
        setPostAnimation(isUp ? lowerChild : upperChild) // set what should be displayed after animation button has been pressed
        setCurrentComponent(isUp ? upperChild : lowerChild) // the current component user wants to see
    }, [isUp])

    // when animation ends, reset value
    useEffect(() => {
        if(!animationActive) {
            setStartInAnimation(false)
        }
    })

  const delaySetStateUp = () => {
    setAnimationActive(true)
    setTimeout(() => {
      setUpState(true)
      setStartInAnimation(true)
    //   setAnimationActive(false)
    }, 1500)
    setTimeout(() => {
        setIsUp(!isUp)
      }, 3500)
      setTimeout(() => {
        setAnimationActive(false)
      }, 3500)
  }

  const OutScreenAnimation = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 1;
    transform: translateY(${isUp ? '-100' : '100'}vh);
  }
`;

const OutComponent = styled.div`
  animation-name: ${OutScreenAnimation};
  animation-duration: 2.2s;
`;

// if current state is up -> arrive from below
// if current state is dowen -> arrive from above
const InScreenAnimation = keyframes`
    0% {
      opacity: 1;
      transform: translateY(${isUp ? '100vh' : '-100vh'})

    }
    100% {
      opacity: 1;
      transform: translateY(${isUp ? '3vh' : ''})
    }
`;
const InComponent = styled.div`
  animation-name: ${InScreenAnimation};
  animation-duration: 2s
`;

  return (
    <Box sx={{display:'flex', justifyContent: 'center', flexDirection: 'column'}}>
        {(!isUp && !animationActive) && <Button onClick={() => delaySetStateUp()}>Press Me!</Button>}
    {animationActive ? ( startInAnimation ? 
        <InComponent>
            {isUp ? (duringAnimationLowerChild || lowerChild) : (duringAnimationUpperChild || upperChild)}
        </InComponent> : 
            <OutComponent>
                {isUp ? (duringAnimationUpperChild || upperChild) : (duringAnimationLowerChild || lowerChild)}
            </OutComponent>
            ) : 
                <>
                {isUp ? upperChild : lowerChild}
                {isUp && <Button onClick={() => delaySetStateUp()}>Press Me!</Button>}
            </>}
        </Box>
  )
}