import Button from '@mui/material/Button'
import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'

const goUpOutScreenAnimation = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 1;
    transform: translateY(-100vh);
  }
`

const UpOutComponent = styled.div`
  animation-name: ${goUpOutScreenAnimation};
  animation-duration: 3s;
`

const goUpInScreenAnimation = keyframes`
    0% {
      opacity: 1;
      transform: translateY(100vh)

    }
    100% {
      opacity: 1;
      transform: translateY(0vh)
    }
`
const UpInComponent = styled.div`
  animation-name: ${goUpInScreenAnimation};
  animation-duration: 2s
`

interface UpSwitchAnimationProps {
  preAnimationChild: React.ReactNode
  duringAnimationChild?: React.ReactNode
  postAnimationChild: React.ReactNode
}

export default function UpSwitchAnimation ({ preAnimationChild, postAnimationChild, duringAnimationChild }: UpSwitchAnimationProps) {
  const [upState, setUpState] = useState(false)
  const [startUpAnimation, setStartUpAnimation] = useState(false)

  const delaySetStateUp = () => {
    setStartUpAnimation(true)
    setTimeout(() => {
      setUpState(true)
    }, 1500)
  }

  return (
    <>
    {startUpAnimation
      ? (upState
          ? <UpInComponent>
            {postAnimationChild}
        </UpInComponent>
          : <UpOutComponent>
            {duringAnimationChild ?? preAnimationChild}
            </UpOutComponent>
        )
      : <>
                {preAnimationChild}
                <Button onClick={() => delaySetStateUp()}>Press Me!</Button>
            </>}
            </>
  )
}
