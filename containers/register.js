import { useRouter } from 'next/router'
import { useRef, useState } from 'react'
import { Register } from '../components'
import { RegisterData } from '../fixtures/RegisterPage'

export default function RegisterContainer() {
    const submitButtonRef = useRef(null)
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        rePassword: "",
        rememberMe: false
    })
    const isValid = formData.email === "" || formData.password === "" || formData.rePassword === ""


    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSignIn = async (event) => {
        event.preventDefault()
        submitButtonRef.current.innerText = RegisterData.submitLoading

        setTimeout(() => {
            router.push("/")
        }, 2000)
        // try {
        //     await signInWithEmailAndPassword(auth, formData.email, formData.password)
        //     navigate(ROUTES.CHOSE_PROFILES)
        // } catch (error) {
        //     console.log("sign in error: " + error)
        // }
    }

    return (
        <Register>
            <Register.Container>
                <Register.Form onSubmit={handleSignIn} method={"POST"}>
                    <Register.Title>{RegisterData.title}</Register.Title>
                    <Register.Input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        value={formData.email}
                        placeholder={RegisterData.emailInputHolder} />
                    <Register.Input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        value={formData.password}
                        placeholder={RegisterData.passwordInputHolder} />
                    <Register.Input
                        type="password"
                        name="rePassword"
                        onChange={handleChange}
                        value={formData.rePassword}
                        placeholder={RegisterData.rePasswordInputHolder} />
                    <Register.Submit
                        type={"submit"}
                        disabled={isValid}
                        ref={submitButtonRef}>
                        {RegisterData.submit}
                    </Register.Submit>

                    <Register.LoginLable>
                        <Register.LoginButton URL={'/login'}>{RegisterData.loginButton} </Register.LoginButton>
                        <Register.LoginText>{RegisterData.loginText}</Register.LoginText>
                    </Register.LoginLable>
                </Register.Form>
                <Register.SliderContaier>
                    <Register.SliderImages />
                </Register.SliderContaier>
            </Register.Container>
        </Register>
    )
}
