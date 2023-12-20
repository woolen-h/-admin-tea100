import { React } from 'react';
import { Image } from 'react-bootstrap';
import "./Profile.css";

function Profile(props) {
    return (
        <div className="d-flex">
            <div className="profile_img">
                <Image src='img/profile-default.svg'/>
            </div>
            <div className="profile_text">
                <p>
                    <strong>administrator</strong><br />
                    product manager, designer, front-end, back-end
                </p>
            </div>
        </div>
    );
}

export default Profile;