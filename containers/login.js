import { useRef, useState } from 'react'
import { Login } from '../components'
import { LoginData } from '../fixtures/LoginPage'

export default function LoginContainer() {
    const submitButtonRef = useRef(null)
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        rememberMe: false
    })
    const isValid = formData.email === "" || formData.password === ""

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSignIn = async (event) => {
        event.preventDefault()
        submitButtonRef.current.innerText = LoginData.submitLoading
        // try {
        //     await signInWithEmailAndPassword(auth, formData.email, formData.password)
        //     navigate(ROUTES.CHOSE_PROFILES)
        // } catch (error) {
        //     console.log("sign in error: " + error)
        // }
    }

    return (
        <Login>
            <Login.Container>
                <Login.Form onSubmit={handleSignIn} method={"POST"}>
                    <Login.Title>{LoginData.title}</Login.Title>
                    <Login.Input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        value={formData.email}
                        placeholder={LoginData.emailInputHolder} />
                    <Login.Input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        value={formData.password}
                        placeholder={LoginData.passwordInputHolder} />
                    <Login.Submit
                        type={"submit"}
                        disabled={isValid}
                        ref={submitButtonRef}>
                        {LoginData.submit}
                    </Login.Submit>

                    <Login.Break>{LoginData.break}</Login.Break>

                    <Login.SocialContainer>
                        <Login.Facebook />
                        <Login.Apple />
                        <Login.Google />
                    </Login.SocialContainer>
                    <Login.RegisterLable>
                        <Login.RegisterButton URL={'/register'}>{LoginData.registerButton} </Login.RegisterButton>
                        <Login.RegisterText>{LoginData.registerText}</Login.RegisterText>
                    </Login.RegisterLable>
                </Login.Form>
                <Login.SliderContaier>
                    <Login.SliderImages />
                </Login.SliderContaier>
            </Login.Container>
        </Login>
    )
}
