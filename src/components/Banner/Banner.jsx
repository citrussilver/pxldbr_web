import React, {useState} from 'react';
import Video from '../../videos/video.webm';
import {BannerContainer, BannerBg, AnimatedBg, BannerContent, BannerH1, BannerP, BannerBtnWrapper, PlainPointer, SparkPointer} from './BannerElements';
import {Button} from '../ButtonElement';

const BannerSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <BannerContainer>
            <BannerBg>
                <AnimatedBg autoPlay loop muted src={Video} type='video/webm' />
            </BannerBg>
            <BannerContent>
                <BannerH1>Dive into pixional world</BannerH1>
                <BannerP>
                    フィクションナルの世界に飛び込む
                </BannerP>
                <BannerBtnWrapper>
                    <Button to='follow' onMouseEnter={onHover} onMouseLeave={onHover}>
                        Discover {hover ? <SparkPointer/> : <PlainPointer /> }
                    </Button>
                </BannerBtnWrapper>
            </BannerContent>
        </BannerContainer>
    )
}

export default BannerSection;
