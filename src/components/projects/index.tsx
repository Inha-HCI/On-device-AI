import React from "react"
import * as ProjectStyle from "./projects.module.css"
import ContentWrapper from "../contentWrapper"

const Projects = () => {
  return (
    <ContentWrapper>
      <h4>Projects</h4>
      <div className={ProjectStyle.projects}>
        <h6 className={ProjectStyle.sectionTitle}>On-going</h6>
        <ul className={ProjectStyle.ongoing}>
          <li>
            산업 특화 Physical AI 파운데이션 모델 개발 및 차세대 융합형 인재양성
            (P1Y1)
            <span className={ProjectStyle.partner}>
              산학협력 · 롯데이노베이트
            </span>
          </li>
          <li>
            가동원전 일차계통 지능형 건전성 진단을 위한 인공지능 학습모델 개발
            <span className={ProjectStyle.partner}>
              산학협력 · 한국원자력연구원
            </span>
          </li>
          <li>
            회전설비 인공지능형 진동 감시 시스템 개발(2단계 2차년도)
            <span className={ProjectStyle.partner}>
              산학협력 · 한국원자력연구원
            </span>
          </li>
          <li>
            (국고-7차년도) ICT-미래자동차 융합 교육연구단
          </li>
          <li>
            미래형자동차 핵심기술 전문인력 양성사업(3단계 1차년도)
          </li>
          <li>
            SW중심대학(P2Y1) 사업단
          </li>
        </ul>
        <h6 className={ProjectStyle.sectionTitle}>Past</h6>
        <ul>
          <li>
            [교비]스마트한 주파수 이용을 위한 스펙트럼 및
            전파기술(3차년도)(교비대응)
          </li>
          <li>청소년 융합창의기술 인재센터</li>
          <li>
            [IITP-Ezbaro] 작업자 및 사회적약자 맞춤형 근골격 안전시스템 구현을
            위한 복합 3D 프린팅 활용 기술 개발
          </li>
          <li>행동패턴 인식형 방향전환 지시등 - 원인수</li>
          <li>
            [IITP-Ezbaro][정부] 스마트한 주파수 이용을 위한 스펙트럼 및
            전파기술(5차년도)
          </li>
          <li>
            [Ezbaro] (정부 및 산업체) 그린 생체모방형 임플란터블 전자칩 및
            U-생체정보처리 플랫폼 융합 기술개발
          </li>
          <li>공과대학 연구수주활동지원(대학ICT연구센터_이상민)</li>
          <li>
            [IITP-Ezbaro][정부] 인공지능을 활용한 콘텐츠 창작 기술 (2차년도)
          </li>
          <li>큐브위성용 국상화 모듈 및 IR 탑재체의 우주환경 검증 연구</li>
          <li>화학작용제 인공지능 탐지/식별 어레이센서 기술개발 (1차년도)</li>
          <li>(교비-1차년도)ICT - 미래자동차 융합 교육연구단</li>
          <li>진동 데이터를 이용한 자동 진단 연구 용역</li>
          <li>
            무인 교통단속 및 교통정보 수집 장치 개발 환경 구축 및 연계 기술 개발
          </li>
          <li>
            Python 기반의 이상 진동 신호 감지를 위한 머신러닝
            지도학습/비지도학습 코드 생성
          </li>
          <li>
            [Ezbaro] 미래 한국형 위성항법시스템을 이용하는 커넥티드 무인이동체
            개발을 위한 민군겸용 가상환경 시뮬레이터 기술
          </li>
          <li>
            취약계층 농작업 지능형 보조시스템 개발 및 실증(시각, 청각, 언어,
            발달 장애인용 농작업 지능형 보조시스템)
          </li>
          <li>
            딥러닝네트워크 적용을 위한 열화상 정상 데이터, 비정상 데이터 기준
            온도 선정 알고리즘 개발
          </li>
          <li>AI를 이용한 AGV 경로 생성 및 충돌 회피 시스템</li>
          <li>ITS 정비서비스 발전방향 수립 연구용역</li>
          <li>미래 자동차용 핵심기술 개발연구</li>
          <li>
            2021 Global IT Challenge(GTC) 종목 개발 및 문제관리 위원회 운영
          </li>
          <li>
            2021 자동차부품 기술개발지원(자율주행 플랫폼 고도화 및 통합 운영
            관리 시스템 개발)
          </li>
          <li>딥러닝 기반의 불량 밸브 검출 시스템 개발</li>
          <li>딥러닝을 이용한 불량 검출 연구 용역</li>
          <li>
            뿌리산업 열처리공정에 최적화된 클라우드 기반의 디지털트윈 CPS 플랫폼
            개발
          </li>
          <li>인공지능을 활용한 대기오염측정망 자료확정 알고리즘 개발</li>
        </ul>
      </div>
    </ContentWrapper>
  )
}

export default Projects
