import React from 'react';

const StdBtn = props => (
    <div>
        <form id={props.formId}>
            <div id={props.id + "wrapper"}>
                <input type="submit" value={props.value} id={props.id} className="button" onClick={props.handle} />
            </div>
        </form>
    </div>
);

export default StdBtn;