import React from 'react'
import { graphql } from 'gatsby'
import HyvorTalk from 'hyvor-talk-react'
import Header from '../components/header'
import './blog-post.css'

export default ({data}) =>{
    const post = data.markdownRemark;

    return (
        <React.Fragment>
        <Header siteTitle={`breached`}/>
        <div className="blog_page_container">
            <div className="blog_page_inner">
            <h1>{post.frontmatter.title}</h1>
            <p>{post.frontmatter.date}</p>
            <div dangerouslySetInnerHTML={{ __html: post.html}}></div>
            <HyvorTalk.Embed websiteId={1715} id={post.frontmatter.title} />
            </div>
            <footer style={{background: `#000`}}>
                <div className="footer_inner" style={{maxWidth: `960px`, margin: `auto`, padding: `1rem 0`}}>
                    <span>© {new Date().getFullYear()}, Built with</span>
                    {` `}
                    <a className="white" href="https://breached.blog">Gatsby</a>
                </div>
          </footer>
        </div>
        </React.Fragment>
    )
}

export const query = graphql`
    query($slug: String!){
        markdownRemark(fields: {slug: {eq: $slug}}){
            html
            frontmatter{
                title
                date
            }
        }
    }
`
