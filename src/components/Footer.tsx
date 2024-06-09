import Link from "next/link";
import styled from "@emotion/styled";
import NextImage from "next/image";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="wrapper">
        <ul className="link-wrap">
          <li>
            <Link href="/contact">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <ul className="icon-wrap">
          <li>
            <a href="https://twitter.com/hinozomu" target="_blank">
              <NextImage
                src="/img/icons/twitter-icon.svg"
                width={15}
                height={15}
                alt="カテゴリ"
              />
            </a>
          </li>
          {/* <li><a href="" target="_blank"><FacebookIcon className="white" /></a></li> */}
        </ul>
      </div>
      <p className="copy">&copy; All rights reserved</p>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  padding: 50px 0;
  text-align: center;
  background: #052936;
  color: #fff;
  margin-left: -30px;
  width: 100vw;
  .wrapper {
    max-width: 1200px;
    margin: 0 auto;
    ul {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .link-wrap {
      margin-bottom: 40px;
      li {
        margin: 0 20px;
        a {
          position: relative;
          &::after {
            content: "";
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 100%;
            height: 2px;
            background: #2db2a4;
            transform: scale(0, 1);
            transform-origin: right top;
            transition: transform 0.3s;
          }
          &:hover {
            color: #2db2a4;
          }
          &:hover::after {
            transform-origin: left top;
            transform: scale(1, 1);
          }
        }
      }
    }
    .icon-wrap {
      margin-bottom: 60px;
      li {
        margin: 0 20px;
      }
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border: 1px solid #fff;
        border-radius: 50%;
        text-align: center;
        .white {
          color: white;
          transition: ease-in-out 0.3s;
        }
        &:hover {
          border: 1px solid #2db2a4;
          .white {
            color: #2db2a4;
          }
        }
      }
    }
  }
  .copy {
    margin-top: 20px;
  }

  @media screen and (max-width: 768px) {
    margin-left: -15px;
    padding: 30px 0;
    .wrapper {
      .icon-wrap {
        margin-bottom: 30px;
      }
    }
  }
`;
