import {useFormik} from "formik";
import {elderSchema, signupSchema} from "../../../utils/validationSchemas/authSchema";
import {addImageIcon, closeEye, openEye} from "../../../utils/SvgIcons";
import PreviewPhoto from "../../../utils/PreviewPhoto";
import avatar from "../../../assets/images/user__icon.jpg";
import Select, {components} from "react-select";
import {useEffect, useRef, useState} from "react";
import makeAnimated from "react-select/animated";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getInstitutes} from "../../../redux/thunks/Thunks";
const animatedComponents = makeAnimated();

const StepOne = ({formKeys, setFormKeys, step, isElder, setIsElder}) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const [isOpen, setIsOpen] = useState(false);
    const [institutes, setInstitutes] = useState(null);
    const dispatch = useDispatch();
    const [instituteName, setInstituteName] = useState("");
    const [isRevealPwd, setIsRevealPwd] = useState(false);
    const [isRevealPwdConfirm, setIsRevealPwdConfirm] = useState(false);

    const ref = useRef();
    const { values, handleBlur, touched, handleChange, handleReset, errors, handleSubmit, setFieldValue } =
        useFormik({
            initialValues: formKeys,
            validationSchema: isElder ? elderSchema : signupSchema,
            onSubmit: (values) => {
                // delete values.yourValueName;
                setFormKeys({...formKeys, ...values});
                // console.log("STEP ONE:", values);
                step(step => step + 1);
            },
        });
    const handleRole = (e) => {
        e.target.value === "2" ? setIsElder(true) : setIsElder(false);
        dispatch(getInstitutes({"role_type": e.target.value === 1 ? 1 : 2})).then((response) => {
            const newArr = Object.keys(response?.payload.data).map(key => {
                return response?.payload.data[key];
            })
            // console.log("actuall", newArr);
            setInstitutes([newArr]);
        })
    }
    const Placeholder = props => {
        return <components.Placeholder {...props} />;
    };
    useEffect(() => {
        setIsElder(user?.isInstitute && user?.role_type === 2 ? true : false)
    }, [])
    const handleInstitute = (e) => {
        // console.log(e)
        setInstituteName(e.label);
        setFieldValue('institute_id', e.value);
    }
    useEffect(() => {
        dispatch(getInstitutes({"role_type": 1})).then((response) => {
            const newArr = Object.keys(response?.payload.data).map(key => {
                return response?.payload.data[key];
            })
            // console.log("actuall", newArr);
            setInstitutes([newArr]);
        })
    }, []);
    useEffect(() => {
		const handleClickOutside = (event) => {
		  if (ref.current && !ref.current.contains(event.target)) {
			setIsOpen(false);
		  }
		};
	
		document.addEventListener('mousedown', handleClickOutside);
	
		return () => {
		  document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [ref]);
    const handleCancel = () => {
        handleReset();
        step(0)
    }
    return(
        <>
            <form onSubmit={handleSubmit} className="registration-process-steps full-height">
                <div className="signup__form" >
                    <div className="signup__form-one d__flex d__flex-h-between gap-2">
                        {
                            user && user.isInstitute ?
                            "" :
                                <div className="form__group full__field">
                                    <label>I am *</label>
                                    <select
                                        className="form__item"
                                        name="role_type"
                                        value={values.role_type}
                                        onChange={(e) => {handleRole(e); handleReset(e); handleChange(e)}}
                                        onBlur={handleBlur}
                                    >
                                        <option value="1">Child</option>
                                        <option value="2">Elder</option>
                                    </select>
                                </div>
                        }
                        
                        {
                            isElder ?
                                <div className="form__group full__field profile__picture">
                                    <label>Profile Picture *</label>
                                    <div className="profile__picture-img">
                                        {values.avatar ? <PreviewPhoto file={values.avatar} /> : <img src={avatar} alt="#" /> }
                                        <label className="upload__img" htmlFor="file">
                                            <input
                                                id="file"
                                                name="avatar"
                                                type="file"
                                                accept='image/*'
                                                hidden
                                                onChange={(e) => {
                                                    setFieldValue("avatar", e.target.files[0]);
                                                    // console.log("here we go:", e.target.files[0])
                                                }}
                                                onBlur={handleBlur}
                                            />
                                            {addImageIcon()}
                                        </label>
                                        <p className="error-msg">{errors.avatar && touched.avatar ? errors.avatar : null}</p>

                                    </div>
                                </div>
                            : ""
                        }

                        <div className={`form__group full__field ${isElder ? "half__field" : "full__field"}`}>
                            <label>First Name *</label>
                            <input
                                type="text"
                                name="first_name"
                                placeholder="Enter your first name"
                                value={values.first_name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <p className="error-msg">{errors.first_name && touched.first_name ? errors.first_name : null}</p>
                        </div>
                        {
                            isElder ?
                                <div className="form__group half__field">
                                    <label>Last Name *</label>
                                    <input
                                        type="text"
                                        name="last_name"
                                        placeholder="Enter your Last name"
                                        value={values.last_name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <p className="error-msg">{errors.last_name && touched.last_name ? errors.last_name : null}</p>
                                </div>
                            : ""
                        }
                        <div className="form__group half__field">
                            <label>Email *</label>
                            <input
                                type="text"
                                name="email"
                                placeholder="Enter your email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <p className="error-msg">{errors.email && touched.email ? errors.email : null}</p>
                        </div>
                        <div className="form__group half__field">
                            <label>Phone Number {isElder ? "*" : ""}</label>
                            <input
                                type="tel"
                                name="phone_no"
                                placeholder="Enter your number"
                                value={values.phone_no}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <p className="error-msg">{errors.phone_no && touched.phone_no ? errors.phone_no : null}</p>
                        </div>
                        {
                            isElder ?
                                <>
                                    <div className="form__group full__field">
                                        <label>Select Gender *</label>
                                        <select
                                            className="form__item"
                                            name="gender"
                                            value={values.gender}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        >
                                            <option>Select Gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Other</option>
                                        </select>
                                        <p className="error-msg">{errors.gender && touched.gender ? errors.gender : null}</p>
                                    </div>
                                    <div className="form__group full__field">
                                        <label>Tell About Yourself</label>
                                        <input
                                            type="text"
                                            name="about"
                                            placeholder="Enter your bio"
                                            value={values.about}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        <p className="error-msg">{errors.about && touched.about ? errors.about : null}</p>
                                    </div>
                                </>
                                : ""
                        }
                        <div className="form__group half__field">
                            <label htmlFor="user-birth">Date of Birth *</label>                            
                            <input
                                type="date"
                                name="dob"
                                value={values.dob}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <p className="error-msg">{errors.dob && touched.dob ? errors.dob : null}</p>
                        </div>
                        <div className="form__group half__field">
                            <label>Select Your Institute *</label>
                            <div className="form__box" ref={ref}>
                                <input
                                    type="text"
                                    name="institute_id"
                                    placeholder="Select Your Institute"
                                    value={values.institute_id}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="hidden"
                                />
                                <input
                                    type="text"
                                    name="institute_id"
                                    placeholder="Select Your Institute"
                                    value={instituteName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="capitalize"
                                />
                                <p className="error-msg">{errors.institute_id && touched.institute_id ? errors.institute_id : null}</p>
                                
                                {isOpen &&
                                    <div className="form__box-select">
                                        <Select
                                            closeMenuOnSelect={false}
                                            components={{ animatedComponents, Placeholder }}
                                            placeholder={"Search"}
                                            menuIsOpen
                                            options={institutes ? institutes[0] : "No records found."}
                                            className="search__select"
                                            hideSelectedOptions={false}
                                            onChange={(e) => {handleInstitute(e)} }
                                        />
                                    </div>
                                }
                            </div>

                        </div>
                        <div className="form__group half__field">
                            <label>Password *</label>
                            <input
                                type={isRevealPwd ? "text" : "password"}
                                name="password"
                                className="login-email"
                                placeholder="Enter your password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <span className="hideShowPassword" onClick={() => setIsRevealPwd(prevState => !prevState)}>
                                {isRevealPwd ? closeEye() : openEye()}
                            </span>
                            <p className="error-msg">{errors.password && touched.password ? errors.password : null}</p>
                        </div>
                        <div className="form__group half__field">
                            <label>Confirm Password *</label>
                            <input
                                type={isRevealPwdConfirm ? "text" : "password"}
                                name="password_confirmation"
                                className="login-email"
                                value={values.password_confirmation}
                                placeholder="Re-enter your password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <span className="hideShowPassword" onClick={() => setIsRevealPwdConfirm(prevState => !prevState)}>
                                {isRevealPwdConfirm ? closeEye() : openEye()}
                            </span>
                            <p className="error-msg">{errors.password_confirmation && touched.password_confirmation ? errors.password_confirmation : null}</p>
                        </div>
                        {
                        isElder ?
                            <div className="form__group full__field">
                                <label>Where did you hear about us?</label>
                                <input
                                    type="text"
                                    name="hear_about_us_from"
                                    placeholder="Enter here"
                                    value={values.hear_about_us_from}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <p className="error-msg">{errors.hear_about_us_from && touched.hear_about_us_from ? errors.hear_about_us_from : null}</p>
                            </div>
                            : ""
                        }

                    </div>
                </div>
                <div className="signup__form-submit">
                    <div className="submit__btn-container d__flex d__flex-h-between">
                        {
                            <Link to={user && user?.isInstitute ? "/institute-dashboard" : "/login"} className="signup__cancel-btn">Cancel</Link>
                        }
                        {
                            user && user?.isInstitute ?
                                ""
                            :
                            <p>
                                Already have an account?<Link to="/login">Log in</Link>
                            </p>
                        }
                        
                        <button type="submit" className="signup__next-btn">Next</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default StepOne