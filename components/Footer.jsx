import Link from "next/link"
import styled from "@emotion/styled"
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';



const Footer = () => {
    return (
        <StyledFooter>
            <div className="wrapper">
                <ul className="link-wrap">
                    <li><a href="" target="_blank">Alucoについて</a></li>
                    <li><Link href="/contact"><a>サービス</a></Link></li>
                    <li><Link href="/contact"><a>お問い合わせ</a></Link></li>
                </ul>
                <ul className="icon-wrap">
                    <li><a href="" target="_blank"><TwitterIcon className="white" /></a></li>
                    <li><a href="" target="_blank"><FacebookIcon className="white" /></a></li>
                </ul>
            </div>
            <p className="copy">&copy; aluco all rights reserved</p>
        </StyledFooter>
    )
}

export default Footer



const StyledFooter = styled.footer`
    padding: 50px 0;
    text-align: center;
    background: #052936;
    color: #fff;
    .wrapper{
        max-width: 1200px;
        margin: 0 auto;
        ul{
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .link-wrap{
            margin-bottom: 40px;
            li{
                margin: 0 20px;
                a{
                    position: relative;
                    &::after{
                        content: '';
                        position: absolute;
                        bottom: -5px;
                        left: 0;
                        width: 100%;
                        height: 2px;
                        background: #2DB2A4;
                        transform: scale(0, 1);
                        transform-origin: right top;
                        transition: transform .3s;
                    }
                    &:hover{
                        color: #2DB2A4;
                    }
                    &:hover::after{
                        transform-origin: left top;
                        transform: scale(1, 1);
                    }
                }
            }
        }
        .icon-wrap{
            margin-bottom: 60px;
            li{
                margin: 0 20px;
            }
            a{
                display: flex;
                align-items: center;
                justify-content: center;
                width: 40px;
                height: 40px;
                border: 1px solid #fff;
                border-radius: 50%;
                text-align: center;
                .white{
                    color: white;
                    transition: ease-in-out .3s;
                }
                &:hover{
                    border: 1px solid #2DB2A4;
                    .white{
                        color: #2DB2A4;
                    }
                }
            }
        }
    }
    .copy{
        margin-top: 20px;
    }
`;