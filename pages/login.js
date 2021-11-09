import React from 'react'
import tw from 'tailwind-styled-components';


const Login = () => {
    return (
        <Wrapper>
            <UberLogo src='https://i.ibb.co/ZMhy8ws/uber-logo.jpg' />
            <Title>Login in to access your account</Title>
            <HeadImage src="https://i.ibb.co/CsV9RYZ/login-image.png" />
            <SignInButton>
                Sign in with Google
            </SignInButton>
        </Wrapper>
    )
}

export default Login

const Wrapper = tw.div`
flex flex-col h-screen bg-gray-200 w-scrren p-4
`

const SignInButton = tw.button`
bg-black text-white text-center py-4 mt-8 self-center w-full rounded-full text-2xl
`

const UberLogo = tw.img`
h-20 w-auto object-contain self-start
`

const Title = tw.div`
text-4xl pt-4 text-gray-500
`

const HeadImage = tw.img`
object-contain w-full
`
