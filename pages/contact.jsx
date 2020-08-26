import React from 'react'
import Form from '../components/Forms/Form'
import styled from "@emotion/styled"



const contact = () => {
    return (
        <StyledForm>
            <Form />
        </StyledForm>
    )
}

export default contact

const StyledForm = styled.form`
    width: 400px;
    margin: 0 auto;

`;