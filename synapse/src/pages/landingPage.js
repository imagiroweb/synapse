import React from 'react';
import { Link, graphql } from "gatsby"
import Layout from '../components/layout';
import SEO from '../components/seo';

const LandingPage = ({data}) => {
    console.log("LandingPage -> data", data)
    return (
        <Layout>
            <SEO title="new landing page" />
            <section>
                <article>
                    <h2>{data.prismicTemplate.data.title.text}</h2>
                    {data.prismicTemplate.data.desc.text}
                </article>
            </section>
            <nav>
                <Link to='/page-2/'>page 2</Link>
                <Link to='/'>home</Link>
            </nav>
        </Layout>
    );
}

export const templateQuery = graphql`
query MyQuery {
    prismicTemplate {
      id
      data {
        desc {
          html
          text
          raw
        }
        title {
          text
        }
      }
    }
  }
`

export default LandingPage;