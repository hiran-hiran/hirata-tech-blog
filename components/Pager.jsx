import React from 'react'
import styled from "@emotion/styled"
import Link from "next/link"

const Pager = ({page}) => {
    return (
        <StyledDiv>
            <ul>
                <li><a className="is-active">1</a></li>
                <li><a>2</a></li>
                <li><a>3</a></li>
                <li><a>4</a></li>
                <li><a>5</a></li>
                <li><a>25</a></li>
            </ul>
        </StyledDiv>
    )
}

export default Pager


const StyledDiv = styled.div`
margin: 50px auto;
font-size: 20px;
ul{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    li{
        a{
            display: block;
            width: 40px;
            line-height: 40px;
            border: 1px solid #052936;
            margin: 0 10px;
            border-radius: 5px;
            color: #052936;
            box-shadow: 1px 1px 3px rgba(0,0,0,0.5);
            &.is-active{
                background: #052936;
                color: #fff;
                box-shadow: none;
            }
        }
    }
}
`;