import React, {useRef, useState} from 'react';
import Button from "../../shared/UI/button/Button";
import cl from './Home.module.css'

const Home = () => {
    const [user, setUser] = useState(true)

    const downloadLinkRef = useRef<HTMLAnchorElement | null>(null)

    const handleDownloadClick = () => {
        // Trigger a click event on the hidden anchor element
        if (downloadLinkRef.current) {
            downloadLinkRef.current.click();
        }
    };
    return (
        <div >
            {user && <Button onClick={()=>console.log('click')}>Create you CV</Button>}

            <Button onClick={handleDownloadClick}>Download CV</Button>
            <a
                ref={downloadLinkRef}
                href=''
                download={'public/assets/TatianaPeretyatkoResume__.pdf'}
            ></a>
        </div>
    );
};

export default Home;
