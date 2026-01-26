import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import * as StudentInfoStyle from "./studentInfo.module.css"
import StudentProfile from "../studentProfile"
import ContentWrapper from "../contentWrapper"

// 1. Defined Interfaces
interface Profile {
  id: string
  name: string
  email: string
  degree: string
  company: string
  interested: string[]
  type: string
  priority: number
  homepage: string
  github: string
  group: string  // Ensure this exists in your JSON/Markdown data
}

interface Image {
  name: string
  publicURL: string
  childImageSharp: {
    fixed: {
      aspectRatio: number
    }
  }
}

const StudentInfo = () => {
  // 2. The GraphQL Query
  const {
    profiles: { profiles },
    images: { images },
  }: {
    profiles: { profiles: { node: Profile }[] }
    images: { images: Image[] }
  } = useStaticQuery(graphql`
    query StudentQuery {
      profiles: allProfileJson {
        profiles: edges {
          node {
            id
            name
            email
            degree
            company
            interested
            type
            priority
            homepage
            github
            group
          }
        }
      }
      images: allFile(
        filter: { relativeDirectory: { glob: "members/students/image" } }
      ) {
        images: nodes {
          name
          publicURL
          childImageSharp {
            fixed {
              aspectRatio
            }
          }
        }
      }
    }
  `)

  // 3. Define the Group Categories
  const groups = [
    "Ph.D. Students",
    "Intergrated PhD Students",
    "M.S. Students",
    "Undergraduated students",
    "Alumni",
  ]

  // 4. Render Logic
  return (
    <ContentWrapper>
      {groups.map(group => {
        // STEP A: Filter the students for this specific category AND the 'OnDevice' group
        const groupMembers = profiles
          .filter(student => 
            student.node.type === group && 
            student.node.group === "OnDevice"
          )
          .sort((a, b) => (a.node.priority > b.node.priority ? 1 : -1))

        // STEP B: If this group is empty, render NOTHING (return null)
        if (groupMembers.length === 0) {
          return null
        }

        // STEP C: If we have members, render the Header and the List
        return (
          <div key={group}>
            <h3>{group}</h3>
            <div className={StudentInfoStyle.group}>
              {groupMembers.map((student) => {
                // Find the matching image for the student
                const image = images.find(
                  img => img.name === student.node.name
                )
                
                return (
                  <StudentProfile
                    // Use optional chaining or fallback to avoid crashes if image is missing
                    imgSrc={image?.publicURL || ""}
                    imgRatio={image?.childImageSharp?.fixed?.aspectRatio || 1}
                    email={student.node.email}
                    name={student.node.name}
                    company={student.node.company}
                    degree={student.node.degree}
                    interested={student.node.interested}
                    key={student.node.name + student.node.type}
                    homepage={student.node.homepage}
                    github={student.node.github}
                  />
                )
              })}
            </div>
          </div>
        )
      })}
    </ContentWrapper>
  )
}

export default StudentInfo
