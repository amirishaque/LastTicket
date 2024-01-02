import * as Yup from "yup";
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const signupSchema = Yup.object().shape({
    first_name: Yup.string().min(2, "Minimum two characters are required.").required("Please enter your first name."),
    email: Yup.string().email('Invalid email address.').required("Please enter your email."),
    dob: Yup.string().required("Select your date of birth."),
    institute_id: Yup.string().required("Select your institute."),
    password: Yup.string().required().min(8, "Minimum 8 characters are required.").required("Please enter password."),
    password_confirmation: Yup.string().required("Please re-enter password.").oneOf([Yup.ref("password"), null], "Password must match."),
    phone_no: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
});
export const emailSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Please enter your email.")
});
export const elderSchema = Yup.object().shape({
    first_name: Yup.string().min(2, "Minimum two characters are required.").required("Please enter your first name."),
    last_name: Yup.string().min(2, "Minimum two characters are required.").required("Please enter your last name."),
    email: Yup.string().email('Invalid email address.').required("Please enter your email."),
    dob: Yup.string().required("Select your date of birth."),
    institute_id: Yup.string().required("Select your institute."),
    phone_no: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required("Please enter your number."),
    password: Yup.string().required().min(8, "Minimum 8 characters are required.").required("Please enter password."),
    password_confirmation: Yup.string().required("Please re-enter password.").oneOf([Yup.ref("password"), null], "Password must match."),
    avatar: Yup.mixed().required('Please attach your photo.'),
    gender: Yup.string().required("Please select your gender."),
    about: Yup.string().required("Please write a little about yourself."),
    hear_about_us_from: Yup.string().required("This field is required."),
});

export const commonQuestionsSchema = Yup.object().shape({
    where_you_grow_up: Yup.string().required("This field is required."),
    career: Yup.string().required("Please write about your career."),
    season: Yup.string().required("Please select at least one season."),
    state_ids: Yup.array().min(1, "Please select at least one state.").required("This field is required."),
    subject_ids: Yup.array().min(1, "Please select at least one subject.").required("This field is required."),
    musical_instrument_ids: Yup.array().min(1, "Please select at least one Instrument.").required("This field is required."),
    pet_ids: Yup.array().min(1, "Please select at least one pet.").required("This field is required."),
    language_ids: Yup.array().min(1, "Please select at least one language.").required("This field is required."),
});

export const loginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address.').required("Please enter your email."),
    password: Yup.string().required("Please enter password."),
});

export const resetPassSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address.').required("Please enter your email."),
    password: Yup.string().required("Please enter password."),
    password_confirmation: Yup.string().required("Please re-enter password.").oneOf([Yup.ref("password"), null], "Password must match."),
});

export const studentProfileSchema = Yup.object().shape({
    first_name: Yup.string().min(2, "Minimum two characters are required.").required("Please enter your first name."),
    dob: Yup.string().required("Select your date of birth."),
    email: Yup.string().email('Invalid email address.').required("Please enter your email."),
    institute_id: Yup.string().required("Select your institute."),
    current_password: Yup.string(),
    password: Yup.string().min(8, "Minimum 8 characters are required."),
    password_confirmation: Yup.string().oneOf([Yup.ref("password"), null], "Password must match."),
});
export const elderProfileSchema = Yup.object().shape({
    first_name: Yup.string().min(2, "Minimum two characters are required.").required("Please enter your first name."),
    last_name: Yup.string().min(2, "Minimum two characters are required.").required("Please enter your last name."),
    email: Yup.string().email('Invalid email address.').required("Please enter your email."),
    dob: Yup.string().required("Select your date of birth."),
    address: Yup.string().required("Please enter your physical address."),
    about: Yup.string().required("Please write a little about yourself."),
    phone_no: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required("Please enter your number."),
    institute_id: Yup.string().required("Select your institute."),
    current_password: Yup.string().required().min(8, "Minimum 8 characters are required.").required("Please enter password."),
    password: Yup.string().required().min(8, "Minimum 8 characters are required.").required("Please enter password."),
    password_confirmation: Yup.string().required("Please re-enter password.").oneOf([Yup.ref("password"), null], "Password must match."),
});