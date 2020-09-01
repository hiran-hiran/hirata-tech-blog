import Link from "next/link"
import styled from "@emotion/styled"
import SearchIcon from '@material-ui/icons/Search'
import Logo from "../public/img/common/logo.svg"



const Header = () => {
    return (
        <StyledHeader>
            <div className="wrapper">
                <div className="logo"><Link href="/">
                    <a><Logo /></a></Link>
                </div>
                <div className="nav-form-wrap">
                    <ul className="navlists">
                        <li><Link href="/about"><a>Alucoについて</a></Link></li>
                        <li><Link href="/service"><a>サービス</a></Link></li>
                        <li><Link href="/contact"><a>お問い合わせ</a></Link></li>
                    </ul>
                    <div className="form">
                        <form action="">
                            <input type="text" placeholder="Search..." />
                            <button><SearchIcon className="green" /></button>
                        </form>
                    </div>
                </div>
            </div>
        </StyledHeader>
    )
}
export default Header



const StyledHeader = styled.header`
    .green{
        color: #2DB2A4;
    }
    width: 100%;
    padding: 20px 0;
    /* border-bottom: 1px solid #ccc; */
    background-color: #fff;
    z-index: 100;
    .wrapper{
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .logo{
        font-size:30px;
        font-weight: bold;
    }
    .nav-form-wrap{
        display: flex;
        .form{
            margin-left: 40px;
            form{
                position: relative;
            }
            input{
                /* height: 40px; */
                padding: 12px 10px 12px 40px;
                display: block;
                box-shadow: 0 0 6px rgba(0,0,0,0.3);
                border-radius: 10px;
                font-size: 18px;
            }
            button{
                position: absolute;
                top: 50%;
                left: 10px;
                transform: translateY(-50%);
                svg{
                    width: 30px;
                    height: 30px;
                }
            }
        }
    }
    .navlists{
        flex: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        /* max-width: 400px; */
        font-weight: 600;
        color: #052936;
        li{
            margin-left: 40px;
        }
    }
`;