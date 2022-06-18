import { gql, request } from "graphql-request";

const graphqlApi = process.env.NEXT_PUBLIC_GRAPHQL_API;

export const getAllCategories = async () => {
  const query = gql`
  query MyQuery {
    categories0 {
      name
      slug
      image {
        url
      }
      categories1 {
        name
        slug
        image {
          url
        }
        categories2 {
          name
          slug
          image {
            url
          }
        }
      }
    }
  }
  `;

  const result = await request(graphqlApi, query);

  return result.categories0;
}

export const getPromosDiscounts = async () => {
  const query = gql`
    query GetPromosDiscounts() {
      promosDiscounts(first: 3) {
        name,
        image {
          url
        },
        destination
      }
    }
  `;

  const result = await request(graphqlApi, query);

  return result.promosDiscounts;
}

export const getProducts = async () => {
  const query = gql`
    query MyQuery {
      products {
        comments
        discount
        manufacturer {
          name
        }
        image {
          url
        }
        monthlyPay {
          monthlyPrice
          months
        }
        name
        price
        slug
        quantity
        subtitle
        varieties {
          name
          images {
            url
          }
          type
        }
        warrantyPeriod
        delivery
        category {
          ... on Category1 {
            name
            slug
          }
          ... on Category2 {
            name
            slug
          }
        }
      }
    }
  `;

  const result = await request(graphqlApi,query);
  return result?.products;
}

export const getBrands = async () => {
  const query = gql`
    query GetBrands() {
      manufacturers(first: 14) {
        name
        slug
        logo {
          url
        }
      }
    }
  `;

  const result = await request(graphqlApi, query);
  return result.manufacturers;
}

export const getNews = async () => {
  const query = gql`
    query GetNews() {
      moreNews(first: 8) {
        title
        slug
        excerpt
        createdAt
        text {
          html
        }
        image {
          url
        }
      }
    }
  `;

  const result = await request(graphqlApi, query);
  return result?.moreNews;
}

export const getPorductsOfCatgory1 = async categorySlug => {
  const query = gql`
    query GetProductsOfCategory1($categorySlug: String!) {
      category1(where: {slug: $categorySlug}) {
        products {
          comments
          discount
          manufacturer {
            name
          }
          image {
            url
          }
          monthlyPay {
            monthlyPrice
            months
          }
          name
          price
          slug
          quantity
          subtitle
          varieties {
            name
            images {
              url
            }
            type
          }
          warrantyPeriod
          delivery
          category {
            ... on Category1 {
              name
              slug
            }
            ... on Category2 {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlApi, query, { categorySlug });
  
  return result?.category1?.products;
}