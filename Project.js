import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from "@fortawesome/free-solid-svg-icons";

const Project = ({ project, onRemovePressed }) => {
    return (
        <div className="card bg-light pb-1 pr-1 mb-1 small">
            <div className="card-body">
                <div className="row">
                    <div className="col-xl-2 col-3">Title:</div>
                    <div className="col-xl-4 col-9">{project.title}</div>
                    <div className="col-xl-2 col-3">Description:</div>
                    <div className="col-xl-4 col-9">{project.description}</div>
                </div>
            </div>
            <div className="text-right">
                <button className="btn btn-danger btn-sm rounded-circle" onClick={() => onRemovePressed(project)}>
                    <FontAwesomeIcon icon={faMinus} />
                </button>
            </div>
        </div>
    );
};

export default Project;
