import React, { useState } from "react";
import { connect } from "react-redux";
import { createProject } from "./actions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const NewProjectForm = ({ projects=[], onCreatePressed }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    return (
        <div className="border rounded bg-light p-3 m-2">
            <input className="form-control form-control-sm mb-2" type="text" placeholder="Project Title" value={title} onChange={e => setTitle(e.target.value)} />
            <textarea className="form-control form-control-sm mb-2" placeholder="Project Description" rows="3" value={description} onChange={e => setDescription(e.target.value)} />
            <div className="text-right">
                <button className="btn btn-success btn-sm rounded-circle" disabled={title === '' || description === ''} onClick={() => {
                    onCreatePressed({ title, description });
                    setTitle('');
                    setDescription('');
                }}>
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    projects: state.projects,
});

const mapDispatchToProps = dispatch => ({
    onCreatePressed: project => dispatch(createProject(project)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewProjectForm);