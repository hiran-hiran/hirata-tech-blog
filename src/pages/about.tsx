import { InferGetStaticPropsType, NextPage } from "next";
import { Layout } from "../components/Layout";
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
      <div className="leading-[2]">
        <p>大阪のSESで自社サービス開発してます。</p>
        <p>Next.js, TypeScript, GraphQLあたりを使っています。</p>
        <p>ちょっとだけデザイナーしてましたので、たまにデザインもやります。</p>
        <p>このブログはNext.js(SSG), microCMSで構築しました。</p>
      </div>
    </Layout>
  );
};

export default about;
