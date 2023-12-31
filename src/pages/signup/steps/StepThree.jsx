import {useFormik} from "formik";
import {commonQuestionsSchema} from "../../../utils/validationSchemas/authSchema";
import {downCart} from "../../../utils/SvgIcons";
import Select, {components} from "react-select";
import makeAnimated from "react-select/animated";
import {useDispatch} from "react-redux";
import {
    getSubjects,
    registerUser,
    getStates,
    getInstruments,
    getPets,
    getLanguages
} from "../../../redux/thunks/Thunks";
import {useEffect, useState} from "react";
import {toast} from "react-toastify";
import Toaster from "../../../utils/Toaster";
import {Link} from "react-router-dom";
import VerificationEmail from "../verification-email/VerificationEmail";
import Success from "../../../institute/components/success/Success";
const animatedComponents = makeAnimated();

const StepThree = ({formKeys, setFormKeys, setIsElder, step, setFormSuccess}) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const dispatch = useDispatch();
    const [subjects, setSubjects] = useState([]);
    const [states, setStates] = useState([]);
    const [instruments, setInstruments] = useState([]);
    const [pets, setPets] = useState([]);
    const [languages, setLanguages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [formSent, setFormSent] = useState(false);

    const { values, handleBlur, touched, handleChange, errors, handleSubmit, setFieldValue } =
        useFormik({
            initialValues: formKeys,
            validationSchema: commonQuestionsSchema,
            onSubmit: (values) => {
                console.log("values", values)
                setLoading(true);
                setFormKeys({...formKeys, ...values});
                dispatch(registerUser({values: values, user: user}));
                dispatch(registerUser(values, user)).then((response) => {
                    setLoading(false);
                    if(response?.payload.message === "Please enter a valid institute"){
                        toast.error("Something went wrong, Please try again.");
                    }
                    if(response?.payload.message === "The email has already been taken."){
                        toast.error("Email is already taken.");
                        setTimeout(() => {
                            step(0);
                        }, 2000);
                    }
                    else{
                        setFormSent(true);
                        setFormSuccess(true);
                        toast.success("Verification email sent.");
                    }
                });
            },
        });

    const Placeholder = props => {
        return <components.Placeholder {...props} />;
    };
    useEffect(() => {
        dispatch(getSubjects()).then((response) => {
            setSubjects(response?.payload)
        });
        dispatch(getStates()).then((response) => {
            setStates(response?.payload.data)
        });
        dispatch(getInstruments()).then((response) => {
            setInstruments(response?.payload.data)
        });
        dispatch(getPets()).then((response) => {
            setPets(response?.payload.data)
        });
        dispatch(getLanguages()).then((response) => {
            setLanguages(response?.payload.data)
        });
    }, [])

     const CaretDownIcon = () => {
        return downCart();
    };
    const DropdownIndicator = props => {
        return (
            <components.DropdownIndicator {...props}>
                <CaretDownIcon />
            </components.DropdownIndicator>
        );
    };
    const handlePrevious = () => {
        step(step => step - 1)
    }

    return(
        <>
            {
                // formSent && user?.isInstitute ? "success wala" : formSent && !user?.isInstitute ? "vertification email wala" : "pora page" 
                formSent && user?.isInstitute ? <Success /> : formSent && !user?.isInstitute ? <VerificationEmail /> : 
                <form onSubmit={handleSubmit}  className="registration-process-steps">
                        <div className="signup__form" >
                            <div className="signup__form-one d__flex d__flex-h-between gap-2">
                                <div className="form__group full__field">
                                    <label>Where did you grow up? *</label>
                                    <input
                                        type="text"
                                        name="where_you_grow_up"
                                        placeholder="Enter answer here"
                                        value={values.where_did_you_grow_up}
                                        onChange={(e) => handleChange(e)}
                                        onBlur={handleBlur}
                                    />
                                    <p className="error-msg">{errors.where_you_grow_up && touched.where_you_grow_up ? errors.where_you_grow_up : null}</p>
                                </div>
                                <div className="form__group full__field">
                                    <label>What states have you lived in? *</label>
                                    <Select
                                        closeMenuOnSelect={false}
                                        components={{animatedComponents, Placeholder , DropdownIndicator}}
                                        placeholder={"Select your states"}
                                        isMulti
                                        options={states}
                                        className="basic-multi-select"
                                        hideSelectedOptions={false}
                                        onChange={(e) => setFieldValue("state_ids", e.map((selectedValue) => selectedValue.value)) }
                                    />
                                    <input
                                        type="text"
                                        name="state_ids"
                                        placeholder="Select Your Institute"
                                        value={values.state_ids}
                                        onChange={handleChange}
                                        className="hidden"
                                        onBlur={handleBlur}
                                    />
                                    <p className="error-msg">{errors.state_ids && touched.state_ids ? errors.state_ids : null}</p>
                                </div>
                                <div className="form__group full__field">
                                    <label>What was your career? *</label>
                                    <input
                                        type="text"
                                        name="career"
                                        placeholder="Enter answer here"
                                        value={values.career}
                                        onChange={(e) => setFieldValue("career", e.target.value)}
                                        onBlur={handleBlur}
                                    />
                                    <p className="error-msg">{errors.career && touched.career ? errors.career : null}</p>
                                </div>
                                <div className="form__group full__field">
                                    <label>Favorite Subject in school? *</label>
                                    <Select
                                        closeMenuOnSelect={false}
                                        components={{animatedComponents, Placeholder , DropdownIndicator}}
                                        placeholder={"Select favorite subject"}
                                        isMulti
                                        options={subjects}
                                        className="basic-multi-select"
                                        hideSelectedOptions={false}
                                        onChange={(e) => setFieldValue("subject_ids", e.map((selectedValue) => selectedValue.value)) }
                                    />
                                    <input
                                        type="text"
                                        name="subject_ids"
                                        placeholder="Select Your Institute"
                                        value={values.subject_ids}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className="hidden"
                                    />
                                    <p className="error-msg">{errors.subject_ids && touched.subject_ids ? errors.subject_ids : null}</p>
                                </div>
                                <div className="form__group full__field">
                                    <label>Do you play a musical instrument? *</label>
                                    <Select
                                        closeMenuOnSelect={false}
                                        components={{animatedComponents, Placeholder , DropdownIndicator}}
                                        placeholder={"Select musical instrument"}
                                        isMulti
                                        options={instruments}
                                        className="basic-multi-select"
                                        hideSelectedOptions={false}
                                        onChange={(e) => setFieldValue("musical_instrument_ids", e.map((selectedValue) => selectedValue.value)) }
                                    />
                                    <input
                                        type="text"
                                        name="musical_instrument_ids"
                                        placeholder="Select Your Institute"
                                        value={values.musical_instrument_ids}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className="hidden"
                                    />
                                    <p className="error-msg">{errors.musical_instrument_ids && touched.musical_instrument_ids ? errors.musical_instrument_ids : null}</p>
                                </div>
                                <div className="form__group full__field">
                                    <label>Do you like dogs, cats or fish? *</label>
                                    <Select
                                        closeMenuOnSelect={false}
                                        components={{animatedComponents, Placeholder , DropdownIndicator}}
                                        placeholder={"Select what you like"}
                                        isMulti
                                        options={pets}
                                        className="basic-multi-select"
                                        hideSelectedOptions={false}
                                        onChange={(e) => setFieldValue("pet_ids", e.map((selectedValue) => selectedValue.value)) }
                                    />
                                    <input
                                        type="text"
                                        name="pet_ids"
                                        placeholder="Select Your Institute"
                                        value={values.pet_ids}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className="hidden"
                                    />
                                    <p className="error-msg">{errors.pet_ids && touched.pet_ids ? errors.pet_ids : null}</p>
                                </div>
                                <div className="form__group full__field">
                                    <label>Do you like summer or winter better? *</label>
                                    <select
                                        className="form__item"
                                        name="season"
                                        value={values.season}
                                        onChange={(e) => {handleChange(e)}}
                                    >
                                        <option>Select Season</option>
                                        <option value="summer">summer</option>
                                        <option value="winter">winter</option>
                                    </select>
                                    <p className="error-msg">{errors.season && touched.season ? errors.season : null}</p>
                                </div>
                                <div className="form__group full__field">
                                    <label>Do you speak any languages? *</label>
                                    <Select
                                        closeMenuOnSelect={false}
                                        components={{animatedComponents, Placeholder , DropdownIndicator}}
                                        placeholder={"Select Language"}
                                        isMulti
                                        options={languages}
                                        className="basic-multi-select"
                                        hideSelectedOptions={false}onChange={(e) => setFieldValue("language_ids", e.map((selectedValue) => selectedValue.value)) }

                                    />
                                    <input
                                        type="text"
                                        name="language_ids"
                                        placeholder="Select Your Institute"
                                        value={values.language_ids}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className="hidden"
                                    />
                                    <p className="error-msg">{errors.language_ids && touched.language_ids ? errors.language_ids : null}</p>
                                </div>
                                <div className="form__group full__field">
                                    <label>Have you lived outside of the US? *</label>
                                    <div className="d__flex">
                                        <div className="custom__radio-btn d__flex">
                                            <input
                                                type="radio"
                                                id="check_1"
                                                name="is_outside_united_states"
                                                defaultChecked
                                                value={values.is_outside_united_states ? "" : values.is_outside_united_states}
                                            />
                                            <label htmlFor="check_1">Yes </label>
                                        </div>
                                        <div className="custom__radio-btn  d__flex">
                                            <input
                                                type="radio"
                                                id="check_2"
                                                name="is_outside_united_states"
                                                value={values.is_outside_united_states}
                                            />
                                            <label htmlFor="check_2">No </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form__group full__field">
                                    <label>Do you like to travel? *</label>
                                    <div className="d__flex">
                                        <div className="custom__radio-btn d__flex">
                                            <input type="radio" id="check_3" name="is_like_travel" defaultChecked />
                                            <label htmlFor="check_3">Yes </label>
                                        </div>
                                        <div className="custom__radio-btn  d__flex">
                                            <input type="radio" id="check_4" name="is_like_travel" />
                                            <label htmlFor="check_4">No </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form__group full__field">
                                    <label>Were you ever in the military? *</label>
                                    <div className="d__flex">
                                        <div className="custom__radio-btn d__flex">
                                            <input type="radio" id="check_5" name="military" defaultChecked />
                                            <label htmlFor="check_5">Yes </label>
                                        </div>
                                        <div className="custom__radio-btn  d__flex">
                                            <input type="radio" id="check_6" name="military" />
                                            <label htmlFor="check_6">No </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form__group full__field mt-4 signup__btn">
                                    <button type="submit" className={`signup__next-btn full__field ${loading ? "disabled" : ""}`}>
                                        {
                                            loading ? "Processing..." : "Sign Up"
                                        }
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="signup__form-submit">
                            <div className="submit__btn-container d__flex d__flex-h-between">
                                <Link to="/" className="signup__cancel-btn">Cancel</Link>
                                {
                                    user && user?.isInstitute ?
                                        ""
                                    :
                                    <p>
                                        Already have an account?<Link to="/login">Log in</Link>
                                    </p>
                                }
                                <button type="button" onClick={handlePrevious} className="signup__previous-btn">Previous</button>
                            </div>
                        </div>
                </form>
            }
            <Toaster />
        </>
    )
}

export default StepThree