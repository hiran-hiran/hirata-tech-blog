import { InferGetStaticPropsType, NextPage } from "next";
import Form from "../components/Forms/Form";
import styled from "@emotion/styled";
import Layout from "../components/Layout";
import { getCategories } from "../lib/api";

export const getStaticProps = async () => {
  const categories = await getCategories();
  return { props: { categories } };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const contact: NextPage<Props> = ({ categories }) => {
  return (
    <Layout categories={categories}>
      <StyledForm>
        <Form />
      </StyledForm>
    </Layout>
  );
};

export default contact;

const StyledForm = styled.form`
  width: 100%;
  margin: 0 auto;
  padding: 30px;
  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;
