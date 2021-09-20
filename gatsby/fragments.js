import { graphql } from 'gatsby';

export const postFragment = graphql`
  fragment post on Mdx {
    id
    body
    excerpt(pruneLength: 300)
    fields {
      slug
      tagSlugs
      categorySlug
    }
    frontmatter {
      date
      description
      tags
      template
      title
      socialImage {
        publicURL
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      headings {
        depth
        value
      }
      tableOfContents
    }
  }
`;

export const techFragment = graphql`
  fragment tech on AirtableEdge {
    node {
      id
      data {
        Description_tc {
          childMdx {
            body
          }
        }
        Link
        Image {
          url
        }
        Name_tc
        Category
        Platform
        CTA
        ExtraLink
        Order
      }
    }
  }
`;
