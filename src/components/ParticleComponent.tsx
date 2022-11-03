import React, { useCallback, useMemo } from 'react'
import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'
import { Engine } from 'tsparticles-engine/types/engine'

export default function ParticlesComponent () {
  const options = useMemo(() => {
    return {
      particles: {
        move: {
          enable: true
        }
      }
    }
  }, [])

  const particlesInit = useCallback(async (engine: Engine): Promise<void> => await loadSlim(engine), [])

  return <Particles init={particlesInit} options={options} />
}
