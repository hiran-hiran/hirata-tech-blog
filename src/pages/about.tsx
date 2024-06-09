import { InferGetStaticPropsType, NextPage } from "next";
import styled from "@emotion/styled";
import Layout from "../components/Layout";
import { getCategories } from "../lib/api";

export const getStaticProps = async () => {
  const categories = await getCategories();
  return { props: { categories } };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const about: NextPage<Props> = ({ categories }) => {
  console.log({ categories });
  return (
    <Layout categories={categories}>
      <StyledDiv>
        <p>大阪のSESで自社サービス開発してます。</p>
        <p>Next.js, TypeScript, GraphQLあたりを使っています。</p>
        <p>ちょっとだけデザイナーしてましたので、たまにデザインもやります。</p>
        <p>このブログはNext.js(SSG), microCMSで構築しました。</p>
      </StyledDiv>
    </Layout>
  );
};

export default about;

const StyledDiv = styled.div`
  line-height: 2;
`;
