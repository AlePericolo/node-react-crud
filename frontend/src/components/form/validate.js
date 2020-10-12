import moment from "moment";

const required = value => value ? undefined : "error.form.required";
const email = value => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? undefined : "error.form.email";

const minLength = len => value => value && value.length >= len ? undefined : "error.form.minlength";
const minLength10 = minLength(10);
const minLength5 = minLength(5);

const equalValues = field => (value, allValues) => allValues[field] && value == allValues[field] ? undefined : 'error.form.equalValues';
const equalPassword = equalValues('password');

const date = format => value => value && moment(value, format).isValid() ? undefined : "error.form.dateIta"
const dateIta = date('DD-MM-YYYY');

export {
    required,
    email,
    minLength10,
    minLength5,
    equalPassword,
    dateIta,
}