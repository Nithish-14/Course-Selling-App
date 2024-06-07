
import {Signup} from '@repo/ui/signup'

import axios from 'axios'


const SignupPage = () => {
    return (
        <Signup onClick={async (email, password) => {
            const response = await axios.post("/api/signup", {
                email,
                password
            })
        }} />
    )
}

export default SignupPage