import React from 'react'
import {WaveContainer, Wave} from './AnimateBgElements'

const AnimateBg = () => {
    return (
      <WaveContainer>
        <Wave
          animation={'1'}
          zIndex={1000}
          interval={'7s'}
          opacity={1}
          delay={'0s'}
          bottom={0}
        />
        <Wave
          animation={'2'}
          zIndex={999}
          interval={'3.5s'}
          opacity={0.5}
          delay={'-5s'}
          bottom={'10px'}
        />
        <Wave
          animation={'1'}
          zIndex={998}
          interval={'7s'}
          opacity={0.2}
          delay={'-2s'}
          bottom={15}
        />
        <Wave
          animation={'2'}
          zIndex={997}
          interval={'3.5s'}
          opacity={0.7}
          delay={'-5s'}
          bottom={'10px'}
        />
      </WaveContainer>
    );
}

export default AnimateBg
