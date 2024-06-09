import Link from "next/link";
import styled from "@emotion/styled";
// import Logo from "../public/img/common/logo01.svg";
import NextImage from "next/image";

const Header = () => {
  return (
    <StyledHeader>
      <div className="wrapper">
        <div className="logo">
          <Link href="/">
            <NextImage
              src="/img/common/logo01.svg"
              width={120}
              height={50}
              alt="ロゴ"
            />
          </Link>
        </div>
        <div className="nav-form-wrap">
          <ul className="navlists">
            <li>
              <Link href="/about">about</Link>
            </li>
            {/* <li><Link href="/service"><a>サービス</a></Link></li> */}
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <div className="form">
            <form action="">
              <input type="text" placeholder="Search..." />
              <button>{/* <SearchIcon className="green" /> */}</button>
            </form>
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};
export default Header;

const StyledHeader = styled.header`
  .green {
    color: #2db2a4;
  }
  width: 100%;
  max-width: 1200px;
  margin: auto;
  padding: 20px 0;
  /* border-bottom: 1px solid #ccc; */
  background-color: #fff;
  z-index: 100;
  .wrapper {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    font-size: 30px;
    font-weight: bold;
    svg {
      width: 125px;
      height: 60px;
      .cls-1 {
        color: #052936;
        fill: #052936;
      }
    }
  }
  .nav-form-wrap {
    display: flex;
    .form {
      display: none;
      margin-left: 40px;
      form {
        position: relative;
      }
      input {
        /* height: 40px; */
        padding: 12px 10px 12px 40px;
        display: block;
        border-radius: 10px;
        font-size: 18px;
        transition: ease-in-out 0.3s;
        &:focus {
          box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
          transform: scale(1.01);
        }
      }
      button {
        position: absolute;
        top: 50%;
        left: 10px;
        transform: translateY(-50%);
        svg {
          width: 30px;
          height: 30px;
        }
      }
    }
  }
  .navlists {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* max-width: 400px; */
    font-weight: 600;
    color: #052936;
    li {
      margin-left: 40px;
      a {
        position: relative;
        &::after {
          content: "";
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 100%;
          height: 2px;
          background: #052936;
          transform: scale(0, 1);
          transform-origin: right top;
          transition: transform 0.3s;
        }
        &:hover::after {
          transform-origin: left top;
          transform: scale(1, 1);
        }
      }
    }
  }
`;
