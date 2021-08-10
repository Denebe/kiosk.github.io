import React from 'react'
import { Button } from '../../globalStyle'
import { HeroContainer, Video, HeroBtn } from './HeroSection.elements';
const HeroSection = () => {
    return (
        <HeroContainer>
            <Video src="https://github.com/arori/media/blob/master/video_autoplay/origin.mp4?raw=true" autoPlay muted loop/>
            <h1>VENDIT KIOSK</h1>
            <p>What are you waiting for?</p>
            <HeroBtn>
                <Button fontBig>
                    제품 더 알아보기
                </Button>
            </HeroBtn>
        </HeroContainer>
    )
}

export default HeroSection
