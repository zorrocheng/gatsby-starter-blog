import React from 'react'
import Link from 'gatsby-link'
import { Container } from 'react-responsive-grid'

import { rhythm, scale } from '../utils/typography'
import Footer from './footer'

const ListLink = props =>
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    const siteTitle = this.props.data.site.siteMetadata.title
    // console.log (this.props.data.site.siteMetadata.title)

    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            // ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
            display: `inline`,
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            {siteTitle}
          </Link>
        </h1>

      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: 'Montserrat, sans-serif',
            marginTop: 0,
            marginBottom: rhythm(-1),
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            {siteTitle}
          </Link>
        </h3>
      )
    }
    return (

      <Container
        style={{
          maxWidth: rhythm(35),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {header}

        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/contact/">Contact</ListLink>
          <ListLink to="/about/">About</ListLink>
        </ul>

        {children()}

        <Footer />

        {/* This is the header in local file */}
        {/* <h2 style={{marginTop: '0'}}>Demo Example List</h2>
        <p>This is a complied list of different Gatsby Blog Example</p>
        <ul>
          <li>
            <a href="http://wp-instagram.surge.sh/">
              Instagram Layout with Wordpress Content
            </a>
          </li>
          <li>
            <a href="http://example-4.surge.sh/">
              List Layout with local Markdown files
            </a>
          </li>
          <li>
            <a href="http://cf-blog.surge.sh/">
              List Layout with Contentful content
            </a>
          </li>
        </ul> */}
      </Container>
    )
  }
}

export const Layoutquery = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default Template
