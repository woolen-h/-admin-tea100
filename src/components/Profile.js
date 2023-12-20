import { React } from 'react';
import { FiCoffee } from "react-icons/fi";
import "./Profile.scss";

function Profile(props) {
    return (
        <div className="d-flex align-items-center">
            <div className="profile_box">
                <FiCoffee className='profile_img'/>
            </div>
            <div className="profile_text">
                <p className='m-0'>
                    <strong>administrator</strong><br />
                    product manager, designer, front-end, back-end
                </p>
            </div>
        </div>
    );
}

export default Profile;