import React from 'react';
import { MarkerType, Position } from 'reactflow';

export const nodes = [
  // {
  //   id: '1',
  //   type: 'input',
  //   data: {
  //     label: 'Input Node',
  //   },
  //   position: { x: 250, y: 0 },
  // },
  // {
  //   id: '2',
  //   data: {
  //     label: 'Default Node',
  //   },
  //   position: { x: 100, y: 100 },
  // },
  // {
  //   id: '3',
  //   type: 'output',
  //   data: {
  //     label: 'Output Node',
  //   },
  //   position: { x: 400, y: 100 },
  // },
  // {
  //   id: '4',
  //   type: 'custom',
  //   position: { x: 100, y: 200 },
  //   data: {
  //     selects: {
  //       'handle-0': 'smoothstep',
  //       'handle-1': 'smoothstep',
  //       'handle-2': 'smoothstep',
  //       'hand-3': 'bezier',
  //     },
  //   },
  // },
  // {
  //   id: '5',
  //   type: 'default',
  //   data: {
  //     label: 'custom style',
  //   },
  //   className: 'circle',
  //   style: {
  //     background: '#2B6CB0',
  //     color: 'white',
  //   },
  //   position: { x: 400, y: 200 },
  //   sourcePosition: Position.Right,
  //   targetPosition: Position.Left,
  // },
  // {
  //   id: '6',
  //   type: 'output',
  //   style: {
  //     background: '#63B3ED',
  //     color: 'white',
  //     width: 100,
  //   },
  //   data: {
  //     label: 'Node1',
  //   },
  //   position: { x: 400, y: 325 },
  //   sourcePosition: Position.Right,
  //   targetPosition: Position.Left,
  // },
  {
    id: '(group)241421-4241',
    data: { label: '4.2.4.1' },
    position: { x: 20, y: 110 },
    className: 'light',
    style: { backgroundColor: 'rgba(150, 150, 150, 0.2)', width: 200, height: 650 },
  },
  {
    id: '0',
    type: 'default',
    className: 'annotation',
    data: {
      label: (
        <>
          <strong style={{fontSize: "1.2em"}}>🛠온톨로지 비주얼라이저⚒</strong> <br />
          <small>절찬 개발 중🤗</small> <br />
          <strong>스크롤</strong>해서 확대↑축소↓ <br />
          노드에 <strong>우클릭</strong>해서 상세정보📃 <br />
          <a><strong>KDS</strong></a> 클릭시 기준문서📖 하이퍼링크 <br />
        </>
      ),
    },
    draggable: false,
    selectable: false,
    position: { x: 1000, y: -20 },
  },
  // 사용한계상태-처짐-일반 사항
  {
    id: '241421-42411',
    type: 'custom',
    position: { x: 10, y: 40 },
    data: {
      docname: 'KDS 24 14 21',
      rulenum: '4.2.4.1.1',
      rulename: '설계-사용한계상태-처짐-일반 사항-1',
      href: 'https://kcsc.re.kr/StandardCode/Viewer/40145',
      desc: "(참조 대상 없음)"
    },
    parentNode: '(group)241421-4241',
    extent: 'parent' 
  },
  {
    id: '241421-42412',
    type: 'custom',
    position: { x: 20, y: 160 },
    data: {
      docname: 'KDS 24 14 21',
      rulenum: '4.2.4.1.2',
      rulename: '설계-사용한계상태-처짐-일반 사항-2',
      href: 'https://kcsc.re.kr/StandardCode/Viewer/40145',
      desc: "(참조 대상 없음)"
    },
    parentNode: '(group)241421-4241',
    extent: 'parent' 
  },
  {
    id: '241421-42413',
    type: 'custom',
    position: { x: 30, y: 310 },
    data: {
      docname: 'KDS 24 14 21',
      rulenum: '4.2.4.1.3',
      rulename: '설계-사용한계상태-처짐-일반 사항-3',
      href: 'https://kcsc.re.kr/StandardCode/Viewer/40145',
      desc: "(참조 대상 없음)"
    },
    parentNode: '(group)241421-4241',
    extent: 'parent' 
  },
  {
    id: '241421-42414',
    type: 'custom',
    position: { x: 40, y: 460 },
    data: {
      docname: 'KDS 24 14 21',
      rulenum: '4.2.4.1.4',
      rulename: '설계-사용한계상태-처짐-일반 사항-4',
      href: 'https://kcsc.re.kr/StandardCode/Viewer/40145',
      desc: "▪ 소분류 참조\n4.2.4.2\n▪ 소분류 참조\n4.2.4.3"
    },
    parentNode: '(group)241421-4241',
    extent: 'parent' 
  },
  // 사용한계상태-처짐-직접 처짐 계산을 생략하는 경우
  {
    id: '(group)241421-4242',
    data: { label: '4.2.4.2' },
    position: { x: 250, y: 50 },
    className: 'light',
    style: { backgroundColor: 'rgba(150, 150, 150, 0.2)', width: 200, height: 650 },
  },
  {
    id: '241421-42421',
    type: 'custom',
    position: { x: 30, y: 30 },
    data: {
      docname: 'KDS 24 14 21',
      rulenum: '4.2.4.2.1',
      rulename: '설계-사용한계상태-처짐-직접 처짐 계산을 생략하는 경우-1',
      href: 'https://kcsc.re.kr/StandardCode/Viewer/40145',
      desc: "▪ 유사수식 참조\n4.2.4.1.2\n▪ 표 참조\n표4.2-6"
    },
    parentNode: '(group)241421-4242',
    extent: 'parent' 
  },
  {
    id: '241421-table4.2-6',
    type: 'output',
    position: { x: 300, y: 900 },
    data: {
      label: "표4.2-6"
    },
  },
  {
    id: '241421-42422',
    type: 'custom',
    position: { x: 50, y: 180 },
    data: {
      docname: 'KDS 24 14 21',
      rulenum: '4.2.4.2.2',
      rulename: '설계-사용한계상태-처짐-직접 처짐 계산을 생략하는 경우-2',
      href: 'https://kcsc.re.kr/StandardCode/Viewer/40145',
      desc: "▪ 역참조(수식)\n4.2.4.2.1\n▪ 구현 불필요 참조\n4.2.4.3"
    },
    parentNode: '(group)241421-4242',
    extent: 'parent',
  },
  {
    id: '241421-42423',
    type: 'custom',
    position: { x: 10, y: 350 },
    data: {
      docname: 'KDS 24 14 21',
      rulenum: '4.2.4.2.3',
      rulename: '설계-사용한계상태-처짐-직접 처짐 계산을 생략하는 경우-3',
      href: 'https://kcsc.re.kr/StandardCode/Viewer/40145',
      desc: "▪ 역참조(수식)\n4.2.4.2.2"
    },
    parentNode: '(group)241421-4242',
    extent: 'parent',
  },
  {
    id: '241421-42424',
    type: 'custom',
    position: { x: 70, y: 500 },
    data: {
      docname: 'KDS 24 14 21',
      rulenum: '4.2.4.2.4',
      rulename: '설계-사용한계상태-처짐-직접 처짐 계산을 생략하는 경우-4',
      href: 'https://kcsc.re.kr/StandardCode/Viewer/40145',
      desc: "▪ 역참조(수식)\n4.2.4.2.2"
    },
    parentNode: '(group)241421-4242',
    extent: 'parent',
  },
  // 사용한계상태-처짐-직접 처짐 계산에 의한 검증
  {
    id: '(group)241421-4243',
    data: { label: '4.2.4.3' },
    position: { x: 470, y: 100 },
    className: 'light',
    style: { backgroundColor: 'rgba(150, 150, 150, 0.2)', width: 200, height: 650 },
  },
  {
    id: '241421-42431',
    type: 'custom',
    position: { x: 10, y: 30 },
    data: {
      docname: 'KDS 24 14 21',
      rulenum: '4.2.4.3.1',
      rulename: '설계-사용한계상태-처짐-직접 처짐 계산에 의한 검증-1',
      href: 'https://kcsc.re.kr/StandardCode/Viewer/40145',
      desc: "▪ 소분류 참조\n4.2.4.1"
    },
    parentNode: '(group)241421-4243',
    extent: 'parent',
  },
  {
    id: '241421-42432',
    type: 'custom',
    position: { x: 30, y: 180 },
    data: {
      docname: 'KDS 24 14 21',
      rulenum: '4.2.4.3.2',
      rulename: '설계-사용한계상태-처짐-직접 처짐 계산에 의한 검증-2',
      href: 'https://kcsc.re.kr/StandardCode/Viewer/40145',
      desc: "(참조 대상 없음)"
    },
    parentNode: '(group)241421-4243',
    extent: 'parent',
  },
  {
    id: '241421-42433',
    type: 'custom',
    position: { x: 60, y: 350 },
    data: {
      docname: 'KDS 24 14 21',
      rulenum: '4.2.4.3.3',
      rulename: '설계-사용한계상태-처짐-직접 처짐 계산에 의한 검증-3',
      href: 'https://kcsc.re.kr/StandardCode/Viewer/40145',
      desc: "(참조 대상 없음)"
    },
    parentNode: '(group)241421-4243',
    extent: 'parent',
  },
  {
    id: '241421-42434',
    type: 'custom',
    position: { x: 20, y: 520 },
    data: {
      docname: 'KDS 24 14 21',
      rulenum: '4.2.4.3.4',
      rulename: '설계-사용한계상태-처짐-직접 처짐 계산에 의한 검증-4',
      href: 'https://kcsc.re.kr/StandardCode/Viewer/40145',
      desc: "(참조 대상 없음)"
    },
    parentNode: '(group)241421-4243',
    extent: 'parent',
  },
  // 피로한계상태 일반
  {
    id: '241421-4311',
    type: 'custom',
    position: { x: 700, y: 100 },
    data: {
      docname: 'KDS 24 14 21',
      rulenum: '4.3.1.1',
      rulename: '설계-피로한계상태-일반-1',
      href: 'https://kcsc.re.kr/StandardCode/Viewer/40145',
      desc: "(참조 대상 없음)\n<4.3을 수행할 지 결정>"
    },
  },
  {
    id: '241421-4312',
    type: 'custom',
    position: { x: 700, y: 300 },
    data: {
      docname: 'KDS 24 14 21',
      rulenum: '4.3.1.2',
      rulename: '설계-피로한계상태-일반-2',
      href: 'https://kcsc.re.kr/StandardCode/Viewer/40145',
      desc: "(참조 대상 없음)\n<4.3 전체에서 교번응력진폭을 계산하는 방법>"
    },
  },
  {
    id: '241421-4313',
    type: 'custom',
    position: { x: 700, y: 500 },
    data: {
      docname: 'KDS 24 14 21',
      rulenum: '4.3.1.3',
      rulename: '설계-피로한계상태-일반-3',
      href: 'https://kcsc.re.kr/StandardCode/Viewer/40145',
      desc: "▪ 외부 참조\nKDS241221\n▪ 외부 참조\nKDS241211(표4.1-1)\n<4.3 전체에서 교번응력진폭을 계산하는 방법>"
    },
  },
  {
    id: '241421-4314',
    type: 'custom',
    position: { x: 700, y: 700 },
    data: {
      docname: 'KDS 24 14 21',
      rulenum: '4.3.1.4',
      rulename: '설계-피로한계상태-일반-4',
      href: 'https://kcsc.re.kr/StandardCode/Viewer/40145',
      desc: "▪ 외부 참조\nKDS241211(표4.1-1)\n<4.3을 수행할 지 결정>"
    },
  },
  {
    id: '241421-4315',
    type: 'custom',
    position: { x: 700, y: 900 },
    data: {
      docname: 'KDS 24 14 21',
      rulenum: '4.3.1.5',
      rulename: '설계-피로한계상태-일반-5',
      href: 'https://kcsc.re.kr/StandardCode/Viewer/40145',
      desc: "▪ 소분류 참조\n4.3.2\n<4.3을 수행할 지 결정>"
    },
  },
  {
    id: '241421-4316',
    type: 'custom',
    position: { x: 700, y: 1100 },
    data: {
      docname: 'KDS 24 14 21',
      rulenum: '4.3.1.6',
      rulename: '설계-피로한계상태-일반-6',
      href: 'https://kcsc.re.kr/StandardCode/Viewer/40145',
      desc: "(참조 대상 없음)\n<4.3을 수행하기 전에 균열 단면 성질을 사용할 지 결정>"
    },
  },
  // 피로한계상태 철근
  {
    id: '(group)241421-432',
    data: { label: '4.3.2' },
    position: { x: 850, y: 110 },
    className: 'light',
    style: { backgroundColor: 'rgba(150, 150, 150, 0.2)', width: 220, height: 600 },
  },
  {
    id: '241421-4321',
    type: 'custom',
    position: { x: 30, y: 60 },
    data: {
      docname: 'KDS 24 14 21',
      rulenum: '4.3.2.1',
      rulename: '설계-피로한계상태-철근-1',
      href: 'https://kcsc.re.kr/StandardCode/Viewer/40145',
      desc: "▪ 외부 참조\nKDS241211(표4.1-1)"
    },
    parentNode: '(group)241421-432',
    extent: 'parent' 
  },
  {
    id: '241421-4322',
    type: 'custom',
    position: { x: 45, y: 220 },
    data: {
      docname: 'KDS 24 14 21',
      rulenum: '4.3.2.2',
      rulename: '설계-피로한계상태-철근-2',
      href: 'https://kcsc.re.kr/StandardCode/Viewer/40145',
      desc: "▪ 외부 참조\nKDS241211(표4.1-1)"
    },
    parentNode: '(group)241421-432',
    extent: 'parent' 
  },
  {
    id: '241421-4323',
    type: 'custom',
    position: { x: 60, y: 390 },
    data: {
      docname: 'KDS 24 14 21',
      rulenum: '4.3.2.3',
      rulename: '설계-피로한계상태-철근-3',
      href: 'https://kcsc.re.kr/StandardCode/Viewer/40145',
      desc: "▪ 역참조(유사수식)\n4.3.2.1\n▪ 역참조(유사수식)\n4.3.2.2"
    },
    parentNode: '(group)241421-432',
    extent: 'parent' 
  },
  // 피로한계상태-프리스트레싱 긴장재
  {
    id: '241421-4331',
    type: 'custom',
    position: { x: 1100, y: 100 },
    data: {
      docname: 'KDS 24 14 21',
      rulenum: '4.3.3.1',
      rulename: '설계-피로한계상태-프리스트레싱 긴장재-1',
      href: 'https://kcsc.re.kr/StandardCode/Viewer/40145',
      desc: "(참조 대상 없음)"
    },
  },
  {
    id: '241421-4332',
    type: 'custom',
    position: { x: 1100, y: 300 },
    data: {
      docname: 'KDS 24 14 21',
      rulenum: '4.3.3.2',
      rulename: '설계-피로한계상태-프리스트레싱 긴장재-2',
      href: 'https://kcsc.re.kr/StandardCode/Viewer/40145',
      desc: "▪ 역참조(유사수식)\n4.3.3.1"
    },
  },
  // 피로한계상태-철근의 용접이음부 혹은 기계적 이음장치
  {
    id: '241421-4341',
    type: 'custom',
    position: { x: 1300, y: 100 },
    data: {
      docname: 'KDS 24 14 21',
      rulenum: '4.3.4.1',
      rulename: '설계-피로한계상태-철근의 용접이음부 혹은 기계적 이음장치-1',
      href: 'https://kcsc.re.kr/StandardCode/Viewer/40145',
      desc: "▪ 표 참조\n표4.3-1"
    },
  },
  {
    id: '241421-table4.3-1',
    type: 'output',
    position: { x: 1300, y: 500 },
    data: {
      label: "표4.3-1"
    },
  },
  {
    id: '241421-4342',
    type: 'custom',
    position: { x: 1300, y: 300 },
    data: {
      docname: 'KDS 24 14 21',
      rulenum: '4.3.4.2',
      rulename: '설계-피로한계상태-철근의 용접이음부 혹은 기계적 이음장치-2',
      href: 'https://kcsc.re.kr/StandardCode/Viewer/40145',
      desc: "▪ 수식 참조\n4.3.2.1\n▪ 수식 참조\n4.3.2.2"
    },
  },
  // 피로한계상태-내구성 및 피복두께-일반 사항
  {
    id: '241421-4411',
    type: 'custom',
    position: { x: 1500, y: 100 },
    data: {
      docname: 'KDS 24 14 21',
      rulenum: '4.4.1.1',
      rulename: '설계-피로한계상태-내구성 및 피복두께-일반 사항-1',
      href: 'https://kcsc.re.kr/StandardCode/Viewer/40145',
      desc: "(참조 대상 없음)"
    },
  },
  {
    id: '241421-4412',
    type: 'custom',
    position: { x: 1500, y: 300 },
    data: {
      docname: 'KDS 24 14 21',
      rulenum: '4.4.1.2',
      rulename: '설계-피로한계상태-내구성 및 피복두께-일반 사항-2',
      href: 'https://kcsc.re.kr/StandardCode/Viewer/40145',
      desc: "(참조 대상 없음)"
    },
  },
  {
    id: '241421-4413',
    type: 'custom',
    position: { x: 1500, y: 500 },
    data: {
      docname: 'KDS 24 14 21',
      rulenum: '4.4.1.3',
      rulename: '설계-피로한계상태-내구성 및 피복두께-일반 사항-3',
      href: 'https://kcsc.re.kr/StandardCode/Viewer/40145',
      desc: "▪ 구현 불필요 참조\n4.4.2\n▪ 구현 불필요 참조\n3.1.2.3\n▪ 구현 불필요 참조\n3.1.2.4\n<4.4를 수행할 때 일반적인 사항...구현 고민 필요>"
    },
  },
  // TODO 3.1.2.3 노드와 3.1.2.4 노드 추가해야 함... 근데 얘네를 추가하면 얘네가 참조하는 걸 또 추가해야 되는데, 그냥 하지 말자
  {
    id: '241421-4414',
    type: 'custom',
    position: { x: 1700, y: 100 },
    data: {
      docname: 'KDS 24 14 21',
      rulenum: '4.4.1.4',
      rulename: '설계-피로한계상태-내구성 및 피복두께-일반 사항-4',
      href: 'https://kcsc.re.kr/StandardCode/Viewer/40145',
      desc: "▪ 중분류 참조\n4.2.3\n▪ 표 참조\n표4.4-1"
    },
  },
  {
    id: '241421-4415',
    type: 'custom',
    position: { x: 1700, y: 300 },
    data: {
      docname: 'KDS 24 14 21',
      rulenum: '4.4.1.5',
      rulename: '설계-피로한계상태-내구성 및 피복두께-일반 사항-5',
      href: 'https://kcsc.re.kr/StandardCode/Viewer/40145',
      desc: "(참조 대상 없음)"
    },
  },
  {
    id: '241421-4416',
    type: 'custom',
    position: { x: 1700, y: 500 },
    data: {
      docname: 'KDS 24 14 21',
      rulenum: '4.4.1.6',
      rulename: '설계-피로한계상태-내구성 및 피복두께-일반 사항-6',
      href: 'https://kcsc.re.kr/StandardCode/Viewer/40145',
      desc: "(참조 대상 없음)\n<4.4 전체 예외 사항 정의>"
    },
  },
  {
    id: '241421-table4.4-1',
    type: 'output',
    position: { x: 1700, y: 700 },
    data: {
      label: "표4.4-1"
    },
  },
  // 피로한계상태-환경 조건-1
  {
    id: '241421-4421',
    type: 'custom',
    position: { x: 1900, y: 100 },
    data: {
      docname: 'KDS 24 14 21',
      rulenum: '4.4.2.1',
      rulename: '설계-피로한계상태-내구성 및 피복두께-환경 조건-1',
      href: 'https://kcsc.re.kr/StandardCode/Viewer/40145',
      desc: "(참조 대상 없음)"
    },
  },
  {
    id: '241421-4422',
    type: 'custom',
    position: { x: 1900, y: 300 },
    data: {
      docname: 'KDS 24 14 21',
      rulenum: '4.4.2.2',
      rulename: '설계-피로한계상태-내구성 및 피복두께-환경 조건-2',
      href: 'https://kcsc.re.kr/StandardCode/Viewer/40145',
      desc: "(참조 대상 없음)"
    },
  },
  {
    id: '241421-4423',
    type: 'custom',
    position: { x: 1900, y: 500 },
    data: {
      docname: 'KDS 24 14 21',
      rulenum: '4.4.2.3',
      rulename: '설계-피로한계상태-내구성 및 피복두께-환경 조건-3',
      href: 'https://kcsc.re.kr/StandardCode/Viewer/40145',
      desc: "(참조 대상 없음)"
    },
  },
  // 설계-피로한계상태-내구성을 위한 요구사항
  {
    id: '241421-4431',
    type: 'custom',
    position: { x: 2100, y: 100 },
    data: {
      docname: 'KDS 24 14 21',
      rulenum: '4.4.3.1',
      rulename: '설계-피로한계상태-내구성을 위한 요구사항-1',
      href: 'https://kcsc.re.kr/StandardCode/Viewer/40145',
      desc: "(참조 대상 없음)<(판단)환경 조건에 대해 구조 부재를 보호하기 위한 조치가 취해졌는가?>"
    },
  },

  // KDS241221
  {
    id: '(group)241221',
    data: { label: 'KDS 24 12 21' },
    position: { x: 900, y: 850 },
    className: 'light',
    style: { backgroundColor: 'rgba(229, 238, 254, 0.4)', width: 400, height: 300 },
  },
  {
    id: '241221-table4.1-1',
    type: 'output',
    position: { x: 50, y: 60 },
    data: {
      label: "표4.1-1",
      desc: "KDS241221-표4.1-1"
    },
    parentNode: '(group)241221',
    extent: 'parent' 
  },
];

// ===== Edges =====

export const edges = [
  // { id: 'e1-2', source: '1', target: '2', label: 'this is an edge label', type:'smoothstep', markerEnd: {type: MarkerType.ArrowClosed}, },
  {
    id: '241421-42414~(group)241421-4242',
    source: '241421-42414',
    target: '(group)241421-4242',
    label: '소분류 참조',
    type:'smoothstep',
    markerEnd: {type: MarkerType.ArrowClosed}, animated:true
  },
  {
    id: '241421-42414~(group)241421-4243',
    source: '241421-42414',
    target: '(group)241421-4243',
    label: '소분류 참조',
    type:'smoothstep',
    markerEnd: {type: MarkerType.ArrowClosed}, animated:true
  },
  {
    id: '241421-42421~241421-42412',
    source: '241421-42421',
    target: '241421-42412',
    label: '유사수식 참조',
    type:'smoothstep',
    markerEnd: {type: MarkerType.ArrowClosed}, animated:true
  },
  {
    id: '241421-42421~241421-42413',
    source: '241421-42421',
    target: '241421-42413',
    label: '유사수식 참조',
    type:'smoothstep',
    markerEnd: {type: MarkerType.ArrowClosed}, animated:true
  },
  {
    id: '241421-42421~241421-table4.2-6',
    source: '241421-42421',
    target: '241421-table4.2-6',
    label: '표 참조',
    type:'smoothstep',
    markerEnd: {type: MarkerType.ArrowClosed}, animated:true
  },
  {
    id: '241421-42422~241421-42421',
    source: '241421-42422',
    target: '241421-42421',
    label: '역참조(수식)',
    type:'smoothstep',
    markerEnd: {type: MarkerType.ArrowClosed}, animated:true
  },
  {
    id: '241421-42422~241421-4243',
    source: '241421-42422',
    target: '241421-4243',
    label: '구현 불필요 참조',
    type:'smoothstep',
    markerEnd: {type: MarkerType.ArrowClosed}, animated:true
  },
  {
    id: '241421-42423~241421-42422',
    source: '241421-42423',
    target: '241421-42422',
    label: '역참조(수식)',
    type:'smoothstep',
    markerEnd: {type: MarkerType.ArrowClosed}, animated:true
  },
  {
    id: '241421-42424~241421-42422',
    source: '241421-42424',
    target: '241421-42422',
    label: '역참조(수식)',
    type:'smoothstep',
    markerEnd: {type: MarkerType.ArrowClosed}, animated:true
  },

  // 소분류 참조 (구현예정정)
  // {
  //   id: '241421-42431~241421-42422',
  //   source: '241421-42424',
  //   target: '241421-42422',
  //   label: '역참조(수식)',
  //   type:'smoothstep',
  //   markerEnd: {type: MarkerType.ArrowClosed}, animated:true
  // },

  // 외부 참조 (외부 전체 참조)
  {
    id: '241421-4313~241221',
    source: '241421-4313',
    target: '(group)241221',
    label: '외부 참조',
    type:'simplebezier',
    markerEnd: {type: MarkerType.ArrowClosed}, animated:true
  },

  // 외부에 있는 표 참조
  {
    id: '241421-4313~241221-table4.1-1',
    source: '241421-4313',
    target: '241221-table4.1-1',
    label: '외부 참조',
    type:'simplebezier',
    markerEnd: {type: MarkerType.ArrowClosed}, animated:true
  },
  {
    id: '241421-4314~241221-table4.1-1',
    source: '241421-4314',
    target: '241221-table4.1-1',
    label: '외부 참조',
    type:'simplebezier',
    markerEnd: {type: MarkerType.ArrowClosed}, animated:true
  },

  {
    id: '241421-4415~(group)241421-432',
    source: '241421-42414',
    target: '(group)241421-432',
    label: '소분류 참조',
    type:'smoothstep',
    markerEnd: {type: MarkerType.ArrowClosed}, animated:true
  },

  // 외부에 있는 표 참조
  {
    id: '241421-4321~241221-table4.1-1',
    source: '241421-4321',
    target: '241221-table4.1-1',
    label: '외부 참조',
    type:'simplebezier',
    markerEnd: {type: MarkerType.ArrowClosed}, animated:true
  },
  {
    id: '241421-4322~241221-table4.1-1',
    source: '241421-4322',
    target: '241221-table4.1-1',
    label: '외부 참조',
    type:'simplebezier',
    markerEnd: {type: MarkerType.ArrowClosed}, animated:true
  },

  {
    id: '241421-4323~241421-4321',
    source: '241421-4323',
    target: '241421-4321',
    label: '역참조(유사수식)',
    type:'smoothstep',
    markerEnd: {type: MarkerType.ArrowClosed}, animated:true
  },
  {
    id: '241421-4323~241421-4322',
    source: '241421-4323',
    target: '241421-4322',
    label: '역참조(유사수식)',
    type:'smoothstep',
    markerEnd: {type: MarkerType.ArrowClosed}, animated:true
  },

  {
    id: '241421-4332~241421-4331',
    source: '241421-4332',
    target: '241421-4331',
    label: '역참조(유사수식)',
    type:'smoothstep',
    markerEnd: {type: MarkerType.ArrowClosed}, animated:true
  },
  {
    id: '241421-4341~241421-table4.3-1',
    source: '241421-4341',
    target: '241421-table4.3-1',
    label: '표 참조',
    type:'smoothstep',
    markerEnd: {type: MarkerType.ArrowClosed}, animated:true
  },
  {
    id: '241421-4342~241421-4321',
    source: '241421-4342',
    target: '241421-4321',
    label: '수식 참조',
    type:'smoothstep',
    markerEnd: {type: MarkerType.ArrowClosed}, animated:true
  },
  {
    id: '241421-4342~241421-4322',
    source: '241421-4342',
    target: '241421-4322',
    label: '수식 참조',
    type:'smoothstep',
    markerEnd: {type: MarkerType.ArrowClosed}, animated:true
  },

  {
    id: '241421-4413~241421-442',
    source: '241421-4413',
    target: '241421-442',
    label: '구현 불필요 참조',
    type:'smoothstep',
    markerEnd: {type: MarkerType.ArrowClosed}, animated:true
  },
  {
    id: '241421-4413~241421-3123',
    source: '241421-4413',
    target: '241421-3123',
    label: '구현 불필요 참조',
    type:'smoothstep',
    markerEnd: {type: MarkerType.ArrowClosed}, animated:true
  },
  {
    id: '241421-4413~241421-3124',
    source: '241421-4413',
    target: '241421-3124',
    label: '구현 불필요 참조',
    type:'smoothstep',
    markerEnd: {type: MarkerType.ArrowClosed}, animated:true
  },
  // 중분류 참조 구현해야 함! (Group 노드만 잘 넣으면 될 듯)
  // {
  //   id: '241421-4414~241421-423',
  //   source: '241421-4342',
  //   target: '241421-423',
  //   label: '중분류 참조',
  //   type:'smoothstep',
  //   markerEnd: {type: MarkerType.ArrowClosed}, animated:true
  // },
  {
    id: '241421-4414~241421-table4.4-1',
    source: '241421-4414',
    target: '241421-table4.4-1',
    label: '표 참조',
    type:'smoothstep',
    markerEnd: {type: MarkerType.ArrowClosed}, animated:true
  },
  

  // { id: 'e1-3', source: '1', target: '3', animated: true },
  // {
  //   id: 'e4-5',
  //   source: '4',
  //   target: '5',
  //   type: 'smoothstep',
  //   sourceHandle: 'handle-0',
  //   data: {
  //     selectIndex: 0,
  //   },
  //   markerEnd: {
  //     type: MarkerType.ArrowClosed,
  //   },
  // },
  // {
  //   id: 'e4-6',
  //   source: '4',
  //   target: '6',
  //   type: 'smoothstep',
  //   sourceHandle: 'handle-1',
  //   data: {
  //     selectIndex: 1,
  //   },
  //   markerEnd: {
  //     type: MarkerType.ArrowClosed,
  //   },
  // },
];
