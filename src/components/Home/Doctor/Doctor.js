import React from 'react';
import img from '../../../images/doctor.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';


const Doctor = ({doctor}) => {
    return (
        <div className="col-md-4 text-center">
            <img className="img-fluid mb-3" src={`https://agile-temple-59192.herokuapp.com/${doctor.img}`} alt="" />
            <h4>Dr. Coudi</h4>
            <p> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt} /> +880-188-934789</p>
        </div>
    );
};

export default Doctor;