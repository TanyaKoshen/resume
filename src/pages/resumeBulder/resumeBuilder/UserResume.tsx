import React from 'react';
import {Link, Outlet, useNavigate} from 'react-router-dom';
import Button from '../../../shared/UI/buttonMain/Button';

const UserResume = () => {
    const navigate = useNavigate();
    const path = window.location.pathname

    return (
        <div>
            {path === '/create'
            ?
            <div>
                <h4>Would you like to create your resume?</h4>
                <Button onClick={() => navigate('/create/register')}>Create an account</Button>
                <h4>Already registered?</h4>
                <Button onClick={() => navigate('/create/login')}>Login</Button>
            </div>
            :
            <Outlet/>
        }


        </div>
    );
};

export default UserResume;
