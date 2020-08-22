import React from "react"
import { graphlql, Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <div>
      <div className="hero"/>
      <div className="preview_container">
        {console.log(data)}
      {
        data.allMarkdownRemark.edges.map(({node}) => (
          
          <div className="preview_inner" key={node.id}>
            <BlogLink to={node.fields.slug}>
              <BlogTitle>{node.frontmatter.title}</BlogTitle>
              <p>{node.frontmatter.message}</p>
              <p>{node.frontmatter.description}</p>
              <p>Timestamp: {node.frontmatter.date}</p>
            </BlogLink>
          </div>
        ))
      }
      </div>
    </div>
  </Layout>
)

const BlogLink = styled(Link)`
      text-decoration: none;
      color: #000;
      
      &:hover{
        color: #ed1c24;
      }
`

const BlogTitle = styled.h3`
      margin-bottom: 20px;
      font-family:Share Tech Mono;
`
export default IndexPage
export const query = graphql`
  query{
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            description
            message
            title
            date
          }
          fields{
            slug
          }
          excerpt
        }
      }
      totalCount
    }
  }
 `   