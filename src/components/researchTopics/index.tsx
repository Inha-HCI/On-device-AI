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

const topicOrder = [
  "Physical AI",
  "LLMs & Multimodal AI",
  "XR & Edge AI",
  "AI-based Anomaly Detection",
]

const getTopicOrder = (name: string) => {
  const index = topicOrder.indexOf(name)
  return index === -1 ? topicOrder.length : index
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

  const orderedTopics = [...nodes].sort(
    (a, b) =>
      getTopicOrder(a.name) - getTopicOrder(b.name) ||
      a.name.localeCompare(b.name)
  )

  return (
    <ContentWrapper>
      <h4>Research Topics</h4>
      <p>
        Human–Computer Interaction (HCI) studies the design and use of computer
        technology, focused on the interfaces between people (users) and
        computers.
      </p>
      <p>We work in the following areas</p>
      <div className={ResearchTopicsStyle.contentWrapper}>
        {orderedTopics.map(node => (
          <Media
            src={node.publicURL}
            video={node.extension === "mp4"}
            label={node.name}
            key={node.publicURL}
          />
        ))}
      </div>
    </ContentWrapper>
  )
}

export default ResearchTopics
