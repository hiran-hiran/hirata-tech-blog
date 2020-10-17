import styled from "@emotion/styled"


const Banner = () => {
    return (
        <StyledDiv>
            {/* <a href="http://aluco.jp/ec-package/" target="_blank"> */}
                <img src="/img/common/banner.jpg" alt="screew" />
            {/* </a> */}
        </StyledDiv>
    )
}

export default Banner


const StyledDiv = styled.div`
    margin-bottom: 60px;
    img{
        width: 100%;
    }
`;
