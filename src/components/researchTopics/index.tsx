import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as ResearchTopicsStyle from "./researchTopics.module.css"
import Media from "../media"
import ContentWrapper from "../contentWrapper"

interface MediaFile {
  extension: string
  name: string
  publicURL: string
}

const ResearchTopics = () => {
  const {
    allFile: { nodes },
  }: { allFile: { nodes: MediaFile[] } } = useStaticQuery(graphql`
    query ResearchMediaQuery {
      allFile(filter: { relativeDirectory: { glob: "researches" } }) {
        nodes {
          name
          extension
          publicURL
        }
      }
    }
  `)

  return (
    <ContentWrapper>
      <h4>Research Topics</h4>
      <p>
        On-Device AI Lab studies the design and use of computer
        technology, focused on the optimizing the interaction between people (users) and
        computers.
      </p>
      <p>We work in the following areas</p>
      <div className={ResearchTopicsStyle.contentWrapper}>
        <div>
          {nodes
            .reverse()
            .filter((node, idx) => idx % 2 === 0)
            .map(node => {
              return (
                <Media
                  src={node.publicURL}
                  video={node.extension === "mp4"}
                  label={node.name}
                  key={node.name}
                />
              )
            })}
        </div>
        <div>
          {nodes
            .filter((node, idx) => idx % 2 !== 0)
            .map(node => {
              return (
                <Media
                  src={node.publicURL}
                  video={node.extension === "mp4"}
                  label={node.name}
                  key={node.name}
                />
              )
            })}
        </div>
      </div>
    </ContentWrapper>
  )
}

export default ResearchTopics

