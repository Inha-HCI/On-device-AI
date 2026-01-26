import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import * as FooterStyle from "./footer.module.css"
import FooterLogoImg from "../../assets/images/footer_logo.png"

interface FooterProps {
  site: {
    siteMetadata: {
      labInfomation: {
        address: string
        tel: string
      }
    }
  }
}

const Footer = () => {
  const { site } = useStaticQuery<FooterProps>(graphql`
    query {
      site {
        siteMetadata {
          labInfomation {
            address
          }
        }
      }
    }
  `)

  return (
    <footer className={FooterStyle.footerWrapper}>
      <div className={FooterStyle.innerWrapper}>
        <a href="https://www.inha.ac.kr">
          <img src={FooterLogoImg} className={FooterStyle.logo} />
        </a>
        <div className={FooterStyle.footerContent}>
          <span>{site.siteMetadata.labInfomation.address}</span>
          <span>
            Copyright © {new Date().getFullYear()} On-Device AI Laboratory, Inha
            University
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
