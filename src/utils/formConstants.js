// elder=>1, student=>2
const user = JSON.parse(localStorage.getItem("user"));
const token = JSON.parse(localStorage.getItem("token"));
export const SignupFormFields = () => {
    return {
        role_type: user?.isInstitute && user?.role_type === 1 ? "1" : user?.isInstitute && user?.role_type === 2 ? "2" : "1",
        first_name: "",
        last_name: "",
        email: "",
        phone_no: "",
        dob: "",
        institute_id: "",
        password: "",
        password_confirmation: "",
        gender: "",
        about: "",
        avatar: "",
        hear_about_us_from: "",
        where_you_grow_up: "",
        career: "",
        season: "",
        is_outside_united_states: 1,
        is_like_travel: 1,
        is_military: 1,
        pet_ids: [],
        musical_instrument_ids: [],
        subject_ids: [],
        state_ids: [],
        language_ids: [],
        interest_ids: [],
        other_interests: [],
        is_added_by_institute: "0",
    }
}

export const LoginFormFields = () => {
    return {
        email: "",
        password: "",
    }
}

export const addLetterFields = () => {
    return {
        date: "",
        time: "",
        status: "2",
        penpal_id: "",
        penpal_to_id: "",
        sender_id: "",
    }
}