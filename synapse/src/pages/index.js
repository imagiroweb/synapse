import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <article className="wrapper">
      <h1>Présentation de la landing page pour synapse Medicine</h1>
      <section>
        <ul>
          <li>Create a landing page with the following framework => Gatsbyjs. <input type="checkbox" checked /></li>
          <li>Integrate Prismic CMS and create slices for the different sections of the website. <input type="checkbox" checked /></li>
          <li>Follow the Web Graphic Designer layout guidelines provided in this Figma file. <input type="checkbox" checked /></li>
          <li>Optimize the page structure to meet SEO best practices. <input type="checkbox" checked /></li>
          <li>Host your project on Github and make this project accessible for us jean-paolo@synapse-medicine.com <input type="checkbox" checked /></li>
          <li>Meet the deadline. You will have 7 days upon receipt of this google doc. <input type="checkbox" checked /></li>
        </ul>
      </section>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <p>Je n'avais jamais utilisé Gatsby et prismic. J'ai trouvé ce framework plutôt simple d'utilisation.<br /> Lié à un redux saga , un scss et styled-components on peut le rendre bien plus complet</p>
      <p>Prismic est très ressemblant à contentfull dans sa conception et son utilisation, bien que plus simple pour l'utilisateur final, ce qu'on attend d'un outil comme celui-ci</p>
      <p>toutefois, et je pense que ça vient de la version gratuite, j'ai trouvé quelques limites à son utilisation.</p>
      <p>Notamment pour l'utilisation des liens impossibles à mettre en place pour les images</p>
      <strong><Link to="/landingPage/">Voir la landing page</Link></strong>
    </article>
  </Layout>
)


export default IndexPage
