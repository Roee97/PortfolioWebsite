import React, {useCallback, useMemo} from 'react'
import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'
import { loadFull } from 'tsparticles'
import { Engine } from 'tsparticles-engine/types/engine'
import { transpileModule } from 'typescript'

export default function ParticlesComponent() {
    const options = useMemo(() => {
        return {
            particles: {
                move: {
                    enable: true
                }
            }
        };
    }, [])

    const particlesInit = useCallback((engine: Engine): Promise<void> => loadSlim(engine) , [])

    return <Particles init={particlesInit} options={options} />
}
