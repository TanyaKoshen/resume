import React, {useRef} from 'react';
import DownLoad from "../../shared/UI/button/DownLoad";
import cl from './Home.module.css'
import {BsDownload} from "react-icons/bs";
import myResume from '../../shared/assets/TatianaPeretyatkoResume.pdf'
import useResponsive from "../../shared/hooks/useResponsive";
const Home = () => {
const [isMobile, isTablet] = useResponsive();
    const downloadLinkRef = useRef<HTMLAnchorElement | null>(null)

    const handleDownloadClick = () => {
        if (downloadLinkRef.current) {
            downloadLinkRef.current.click();
        }
    };

    return (
        <div className={!isMobile? cl.home: `${cl.home} ${cl.mobile}`}>

            <div className={cl['btn-link-container']}>
                <div>
                    <DownLoad onClick={handleDownloadClick}>
                        <BsDownload/>{' '}Download CV
                    </DownLoad>
                </div>
                <a className={cl['a-link']}
                   ref={downloadLinkRef}
                   href={myResume}
                   download="TatianaPeretyatkoResume.pdf"
                   style={{visibility: 'hidden'}}
                >Download TatianaPeretyatkoResume.pdf</a>
            </div>
            {(!isTablet && !isMobile) && <div className={cl.moto}>
                <h3><i>Innovate. Code. Create</i></h3>
            </div>}

        </div>
    );
};

export default Home;
