import Link from "next/link"
import styled from "@emotion/styled"



const Header = () => {
    return (
        <StyledHeader>
            <div className="logo"><Link href="/"><a>Aluco blog</a></Link></div>
            <ul className="navlists">
                <li><Link href="/about"><a>About</a></Link></li>
                <li><Link href="/contact"><a>Contact</a></Link></li>
            </ul>
        </StyledHeader>
    )
}
export default Header



const StyledHeader = styled.header`
    /* position: fixed; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;

    .logo{
        font-size:30px;
        font-weight: bold;
    }
    .navlists{
        flex: 1;
        display: flex;
        justify-content: space-between;
        max-width: 300px;
    }
`;