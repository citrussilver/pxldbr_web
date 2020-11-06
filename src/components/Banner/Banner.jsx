import React from 'react';
import Video from '../../videos/video.webm';
import {BannerContainer, BannerBg, AnimatedBg, BannerContent, BannerH1, BannerP} from './BannerElements';

const Banner = () => {
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

            </BannerContent>
        </BannerContainer>
    )
}

export default Banner;
