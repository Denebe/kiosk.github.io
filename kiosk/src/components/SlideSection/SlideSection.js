import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Button } from '../../globalStyle'
import useScrollHook from '../../Hooks/useScrollHook'
import { Heading, Img, ImgWrapper, SlideColumn, SlideRow, SlideSec, Subtitle, TextWrapper, TopLine } from './SlideSection.elements'

const SlideSection = (
    {
        direction,
        duration,
        delay,
        lightBg,
        primary,
        imgStart,
        lightTopLine,
        topLine,
        lightTextDesc,
        buttonLabel,
        description,
        headline,
        lightText,
        img,
        alt,
        wow
    }) => {

        const animatedItem = useScrollHook(direction, duration, delay);

    return (
        <>
            <SlideSec lightBg={lightBg}>
                <Container>
                    <SlideRow primary={primary} imgStart={imgStart} {...animatedItem}>
                        <SlideColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={lightTopLine}>
                                    {topLine}
                                </TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                                <Link to='/sign-up'>
                                    <Button big fontBig>
                                        {buttonLabel}
                                    </Button>
                                </Link>
                            </TextWrapper>
                        </SlideColumn>
                        <SlideColumn>
                            <ImgWrapper wow={wow}>
                                <Img src={img} alt={alt} />
                            </ImgWrapper>
                        </SlideColumn>
                    </SlideRow>
                </Container>
            </SlideSec>

        </>
    )
}

export default SlideSection


