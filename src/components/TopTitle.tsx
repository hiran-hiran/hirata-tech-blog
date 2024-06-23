export const TopTitle = () => {
  return (
    <div>
      <div className="tri left"></div>
      <div className="tri right"></div>
      <div className="inner">
        <div className="text-wrap">
          <h1>自分のためのblog</h1>
          <p>
            コーダーからキラキラフロントエンドになるための修行
            <br />
            忘れやすいので、自分用にまとめていこうと思います。
          </p>
        </div>
        <div className="img-wrap">
          <img src="/img/common/ossan.png" alt="" />
        </div>
      </div>
    </div>
  );
};

// const StyledSection = styled.section`
//   position: relative;
//   max-width: 1200px;
//   margin: 20px auto;
//   background: #2db2a4;
//   box-shadow: 10px 10px #052936;
//   color: #fff;
//   .tri {
//     position: absolute;
//     width: 0;
//     height: 0;
//     z-index: 10;
//     border-style: solid;
//     /* border-width: 0 30px 30px 30px; */
//     border-width: 0 40px 40px 40px;

//     border-color: transparent transparent #ffffff transparent;
//     &::after {
//       content: "";
//       position: absolute;
//       top: 40px;
//       left: -60px;
//       width: 120px;
//       height: 1px;
//       background-color: #999;
//       z-index: 11;
//       box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
//     }
//     &.left {
//       left: -26px;
//       top: -6px;
//       transform: rotate(-45deg);
//     }
//     &.right {
//       right: -36px;
//       bottom: -16px;
//       transform: rotate(135deg);
//       border-width: 0 40px 40px 40px;
//     }
//   }
//   .inner {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     padding: 20px 80px;
//     h1 {
//       font-size: 40px;
//       margin-bottom: 30px;
//       letter-spacing: 1px;
//       .small {
//         font-size: 34px;
//       }
//     }
//     p {
//       line-height: 1.6;
//       font-weight: 400;
//     }
//     .img-wrap {
//       flex-basis: 200px;
//       img {
//         width: 100%;
//       }
//     }
//   }
// `;
