import { useStaticQuery, graphql } from 'gatsby';

const useCategoriesList = () => {
  const { allMdx } = useStaticQuery(
    graphql`
      query CategoriesListQuery {
        allMdx(filter: { frontmatter: { draft: { ne: true } } }) {
          group(field: frontmatter___category) {
            fieldValue
            totalCount
          }
        }
      }
    `,
  );

  return allMdx.group;
};

export default useCategoriesList;
