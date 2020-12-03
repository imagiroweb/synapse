import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import './footer.css';

const Footer = () => {
    const footerQuery = useStaticQuery(graphql`
        query footer {
            prismicFooter {
            uid
            data {
                copyright {
                text
                }
                legalmentions {
                linkmentions {
                    id
                    url
                    link_type
                    target
                }
                }
                logofooter {
                alt
                url
                }
                menufooter {
                menulink {
                    url
                    uid
                    target
                }
                }
                newsletterzone {
                text
                }
                sociallinks {
                socialmedia {
                    uid
                    url
                    target
                    id
                }
                }
            }
            }
        }
    `);
    return (
        <footer>
            <img src={footerQuery.prismicFooter.data.logofooter.url} alt={footerQuery.prismicFooter.data.logofooter.alt} />
        </footer>
    )
}

export default Footer;