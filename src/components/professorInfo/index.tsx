import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as ProfessorInfoStyle from "./professorInfo.module.css"

const ProfessorInfo = () => {
  return (
    <div className={ProfessorInfoStyle.ProfessorInfoWrapper}>
      <div className={ProfessorInfoStyle.innerWrapper}>
        <h1 className={ProfessorInfoStyle.title}>Professor</h1>
        <div className={ProfessorInfoStyle.summary}>
          <StaticImage
            className={ProfessorInfoStyle.pic}
            src="../../assets/members/professor.png"
            alt="jangwoo kwon"
            quality={100}
            aspectRatio={3 / 4}
          />
          <div className={ProfessorInfoStyle.info}>
            <div className={ProfessorInfoStyle.profile}>
              <span>권장우 (Jangwoo Kwon)</span>
              <span>Professor at INHA University</span>
              <span>E-mail: jwkwon@inha.ac.kr</span>
              <span>Office: 하이테크관 1313호</span>
            </div>
            <div className={ProfessorInfoStyle.academicBackground}>
              <h6>Academic Background</h6>
              <span>
                <span>1986.3~1990.2</span>인하대학교 전자공학 공학사
              </span>
              <span>
                <span>1990.3~1992.2</span>인하대학교 대학원 정보공학 공학석사
              </span>
              <span>
                <span>1992.3~1996.8</span>인하대학교 대학원 정보공학 공학박사
              </span>
            </div>
            <div className={ProfessorInfoStyle.career}>
              <h6>Career</h6>
              <span>
                <span>1996~1998</span>특허청 사무관
              </span>
              <span>
                <span>1998~2009</span>동명대학교 부교수
              </span>
              <span>
                <span>2005~2006</span>정보통신연구진흥원 전문위원
              </span>
              <span>
                <span>2006~2009</span>정보통신연구진흥원 인력양성단장
              </span>
              <span>
                <span>2009~2012</span>정보통신산업진흥원 인재양성단장
              </span>
              <span>
                <span>2012~</span>인하대학교 교수
              </span>
              <span>
                <span>2023~</span>인하대학교 SW중심대학사업단장
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProfessorInfo
