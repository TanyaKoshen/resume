import React, {useRef, useState} from 'react';
import Button from "../../shared/UI/button/Button";
import cl from './Home.module.css'
import {BsDownload} from "react-icons/bs";

const Home = () => {
    const [user, setUser] = useState(false)

    const downloadLinkRef = useRef<HTMLAnchorElement | null>(null)

    const handleDownloadClick = () => {
        if (downloadLinkRef.current) {
            downloadLinkRef.current.click();
        }
    };
    return (
        <div className={cl.home}>
            <div className={cl['btn-link-container']}>
                <div>
                    {user && <Button onClick={()=>console.log('click')}>Create your CV</Button>}
                    <Button onClick={handleDownloadClick}>
                        <BsDownload/>{' '}Download CV
                    </Button>
                </div>

                <a className={cl['a-link']}
                   ref={downloadLinkRef}
                   href=''
                   download={'../../shared/assets/TatianaPeretyatkoResume__.pdf'}
                ></a>
            </div>

        </div>
    );
};

export default Home;
