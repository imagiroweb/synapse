import React from 'react';
import { Link, graphql } from "gatsby"
import SEO from '../components/seo';
import Layout from '../components/layout';

const LandingPage = ({data}) => {
    const { partnersgroup } = data.prismicSynapse.data;
    const renderPictoLinks = () => {
        return partnersgroup.map((item) => (
            <li key={item.logospartners.alt}><img src={item.logospartners.fluid.src} alt={item.logospartners.alt}/></li>
        ))
    }
    
    return (
        <Layout>
            <SEO title="synapse landing page" />
            <article>
               <section dangerouslySetInnerHTML={{ __html: data.prismicSynapse.data.textsection.html }} />
               <Link to={data.prismicSynapse.data.demolink.url}>Request a demo</Link>
               <img src={data.prismicSynapse.data.imagesection.url} alt={data.prismicSynapse.data.imagesection.alt}/>
            </article>
            <ul>{renderPictoLinks()}</ul>
            <article>
              <section dangerouslySetInnerHTML={{ __html: data.prismicSynapse.data.textsection1.html }} />
              <img src={data.prismicSynapse.data.illustration.url} alt={data.prismicSynapse.data.illustration.alt}/>
            </article>
            <article>
              <section dangerouslySetInnerHTML={{ __html: data.prismicSynapse.data.citation.html }} />
              <section dangerouslySetInnerHTML={{ __html: data.prismicSynapse.data.article.html }} />
            </article>
            <article>
              <section dangerouslySetInnerHTML={{ __html: data.prismicSynapse.data.entete.html }} />
              <form>
                <input type="text" placeholder="First name" />
                <input type="text" placeholder="Last name" />
                <input type="text" placeholder="Company name" />
                <input type="text" placeholder="Email address" />
                <textarea placeholder="message" />
                <button type="submit" title="send">Submit</button>
              </form>
            </article>
        </Layout>
    );
}

export const templateQuery = graphql`
query LandingQuery {
  prismicSynapse {
    uid
    data {
      article {
        text
        html
      }
      demolink {
        url
      }
      entete {
        text
        html
      }
      illustration {
        alt
        url
      }
      imagesection {
        alt
        url
      }
      citation {
        html
      }
      linkdemo {
        url
      }
      partnersgroup {
        logospartners {
          alt
          fluid {
            src
          }
        }
      }
      textsection {
        text
        html
      }
      textsection1 {
        text
        html
      }
    }
  }
  }
`

export default LandingPage;