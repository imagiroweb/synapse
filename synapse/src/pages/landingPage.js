import React from 'react';
import { Link, graphql } from "gatsby"
import SEO from '../components/seo';
import Layout from '../components/layout';
import '../assets/css/landingPage.css';
import { useWindowSize } from '../utils/useWindowsHook';

const LandingPage = ({data}) => {
    const size = useWindowSize();
    const nomadeScreen = size < 1024;
    const { partnersgroup } = data.prismicSynapse.data;

    const renderPartnersLinks = () => {
        return partnersgroup.map((item) => (
            <li key={item.logospartners.alt}>
              <img src={item.logospartners.fluid.src} alt={item.logospartners.alt}/>
            </li>
        ))
    }
    const renderPictoLink = () => (
      <Link className="picto-link" to={data.prismicSynapse.data.demolink.url}>Request a demo</Link>
    )
    
    return (
        <Layout>
            <SEO title="synapse landing page" />
            <article className="first-bloc">
              <div className="wrapper">
                <section>
                  <div className="easy-access" dangerouslySetInnerHTML={{ __html: data.prismicSynapse.data.textsection.html }} />
                  {renderPictoLink()}
                  {!nomadeScreen &&
                    <img src={data.prismicSynapse.data.imagesection.url} alt={data.prismicSynapse.data.imagesection.alt} width={data.prismicSynapse.data.imagesection.dimensions.width} height={data.prismicSynapse.data.imagesection.dimensions.height}/>
                  }
                </section>
               </div>
            </article>
            <div className="wrapper">
            <ul className="partners-bloc">{renderPartnersLinks()}</ul>
            <article className="second-bloc">
              <section>
                <div dangerouslySetInnerHTML={{ __html: data.prismicSynapse.data.textsection1.html }} />
                {renderPictoLink()}
                <img src={data.prismicSynapse.data.illustration.url} alt={data.prismicSynapse.data.illustration.alt}/>
              </section>
            </article>
            <article className="third-bloc">
              <section>
                {nomadeScreen ?
                (<img src={data.prismicSynapse.data.logoauth.thumbnails.mobile.fluid.src} alt='' />)
                :
                (<img src={data.prismicSynapse.data.logoauth.fluid.src} alt='' />)
                }
                <div dangerouslySetInnerHTML={{ __html: data.prismicSynapse.data.article.html }} />
              </section>
            </article>
            </div>
            <article className="form-bloc">
              <div className="wrapper">
              <div dangerouslySetInnerHTML={{ __html: data.prismicSynapse.data.entete.html }} />
                <form>
                  <input type="text" placeholder="First name" required/>
                  <input type="text" placeholder="Last name" required/>
                  <input type="text" placeholder="Company name" required/>
                  <input type="email" placeholder="Email address" required/>
                  <textarea placeholder="message" />
                  <button type="submit" title="send">Submit</button>
                </form>
              </div>
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
          dimensions {
            height
            width
          }
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
        logoauth {
          thumbnails {
            mobile {
              alt
              fluid {
                src
              }
            }
          }
          dimensions {
            height
            width
          }
          fluid {
            src
          }
        }
      }
    }
  }
`

export default LandingPage;
