import React from "react";
import { Field, reduxForm } from "redux-form";

import { renderInputField, renderTextArea } from "../form/render";
import { required } from "../form/validate";
import Icon from "../ui/icon";


const Form = (props) => {

    const { handleSubmit, pristine, submitting, reset } = props;

    return (
        <form onSubmit={handleSubmit}>
            <Field name="title" type="text" component={renderInputField} label="Title" validate={required} />
            <Field name="body" component={renderTextArea} label="Body" rows={10} validate={required} />
            <div className="row">
                <div className="col text-center">
                    <button type="submit" className="btn btn-outline-success mx-2" disabled={pristine || submitting}>
                        <Icon icon="save" />
                    </button>
                    <button type="button" className="btn btn-outline-dark mx-2" disabled={pristine || submitting} onClick={reset}>
                        <Icon icon="sync" />
                    </button>
                </div>
            </div>
        </form>
    );
};


export default reduxForm({
    form: "post",
})(Form);