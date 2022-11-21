import { useRef, useState } from 'react'
import { Form } from '../components'
import { LoginData } from '../fixtures/LoginPage'

export default function FormContainer() {
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
        <Form>
            <Form.Container>
                <Form.Paper onSubmit={handleSignIn} method={"POST"}>
                    <Form.Title>{LoginData.title}</Form.Title>
                    <Form.Input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        value={formData.email}
                        placeholder={LoginData.emailInputHolder} />
                    <Form.Input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        value={formData.password}
                        placeholder={LoginData.passwordInputHolder} />
                    <Form.Submit
                        type={"submit"}
                        disabled={isValid}
                        ref={submitButtonRef}>
                        {LoginData.submit}
                    </Form.Submit>

                    <Form.Break>{LoginData.break}</Form.Break>

                    <Form.SocialContainer>
                        <Form.Facebook />
                        <Form.Apple />
                        <Form.Google />
                    </Form.SocialContainer>
                    <Form.RegisterLable>
                        <Form.RegisterButton>{LoginData.registerButton} </Form.RegisterButton>
                        <Form.RegisterText>{LoginData.registerText}</Form.RegisterText>
                    </Form.RegisterLable>
                </Form.Paper>
                <Form.SliderContaier>
                    <Form.SliderImages />
                </Form.SliderContaier>
            </Form.Container>
        </Form>
    )
}
