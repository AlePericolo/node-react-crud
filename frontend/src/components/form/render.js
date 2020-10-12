import React from "react";

const renderInputField = ({ input, label, placeholder, type, required, renderInline, meta: { touched, error } }) => {

    const renderField = () => {
        return (
            <>
                <input {...input} id={input.name} type={type} className="form-control" required={required} placeholder={placeholder} />
                {touched && error && <div className="text-danger border-top border-danger w-100 mt-1">{error}</div>}
            </>
        )
    }

    return (
        <div className={`form-group ${renderInline ? 'row' : ''}`} >
            {label && <label htmlFor={input.name} className={renderInline ? 'col-12 col-lg-3' : ''}>{label}</label>}
            {renderInline ?
                <div className="col-12 col-lg-9">{renderField()}</div>
                :
                renderField()
            }
        </div >
    );
}

const renderTextArea = ({ input, label, placeholder, rows, type, required, renderInline, meta: { touched, error } }) => {

    const renderField = () => {
        return (
            <>
                <textarea {...input} id={input.name} type={type} className="form-control" rows={rows} required={required} placeholder={placeholder} />
                {touched && error && <div className="text-danger border-top border-danger w-100 mt-1">{error}</div>}
            </>
        )
    }

    return (
        <div className={`form-group ${renderInline ? 'row' : ''}`} >
            {label && <label htmlFor={input.name} className={renderInline ? 'col-12 col-lg-3' : ''}>{label}</label>}
            {renderInline ?
                <div className="col-12 col-lg-9">{renderField()}</div>
                :
                renderField()
            }
        </div >
    );
}

export {
    renderInputField,
    renderTextArea
};