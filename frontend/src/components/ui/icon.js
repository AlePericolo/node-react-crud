import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHome, faNewspaper, faEye, faPen, faTrash, faPlus, faSave, faSync, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

library.add(faHome, faNewspaper, faEye, faPen, faTrash, faPlus, faSave, faSync, faArrowLeft);
const Icon = (props) => {
    return (
        <FontAwesomeIcon icon={props.icon} />
    )
}

export default Icon