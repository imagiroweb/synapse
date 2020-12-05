import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import '../assets/css/global.css';
import './footer.css';
import pictoSubmit from '../images/landing-page/picto-link.png';

const Footer = () => {
    const data = useStaticQuery(graphql`
        query footer {
            prismicFooter {
                uid
                data {
                  links {
                    blocmenu {
                      html
                    }
                  }
                  logofooter {
                    alt
                    fluid {
                      src
                    }
                  }
                  copyright {
                    text
                  }
                  label {
                    html
                  }
                  legalmentions {
                    html
                  }
                  sociallinks {
                    socialpicto {
                      alt
                      fluid {
                        src
                      }
                    }
                  }
                }
              }
        }
    `);
    const renderBlocMenu = () => {
      const blocMenu = data.prismicFooter.data.links;
      return blocMenu.map((bloc) => (
        <li dangerouslySetInnerHTML={{ __html: bloc.blocmenu.html }} />
      ))
    }
    const renderSocialLinks = () => {
      const socialLink = data.prismicFooter.data.sociallinks;
      return socialLink.map((image) => (
        <Link to="/">
          <img src={image.socialpicto.fluid.src} alt={image.socialpicto.alt} />
        </Link>
      ))
    }

    const handleSubmit = () => {
      console.log('toto')
    }
    
    return (
        <footer>

           <section className="wrapper menu-footer-bloc">
               <img src={data.prismicFooter.data.logofooter.fluid.src} alt={data.prismicFooter.data.logofooter.alt} />
               <ul className="bloc-menu">{renderBlocMenu()}</ul>
           </section>
           <hr />
           <section className=" wrapper newsletter-footer-bloc">
             <div dangerouslySetInnerHTML={{ __html: data.prismicFooter.data.label.html }} />
             <div className="email-bloc">
              <input type="email" placeholder="Email-adress" />
              <button className="submit-button"  onClick={handleSubmit} arial-label="submit">
                <img src={pictoSubmit} alt='submit email' />
              </button>
             </div>
             <div className="social-link-bloc">
               {renderSocialLinks()}
             </div>
           </section>
           <hr />
           <section className=" wrapper legal-mentions-bloc">
             <span>{data.prismicFooter.data.copyright.text}</span>
             <div className="legal-mentions" dangerouslySetInnerHTML={{ __html: data.prismicFooter.data.legalmentions.html }} />

           </section>
        </footer>
    )
}

export default Footer;