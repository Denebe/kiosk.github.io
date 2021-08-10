import styled from 'styled-components'

export const SlideSec = styled.div`
color: #fff;
padding: 300px 0;
background: ${({ lightBg }) => (lightBg ? '#fff' : '#101522')};
`;


export const SlideRow = styled.div`

display: flex;
margin: 0 -15px -15px -15px;
flex-wrap: wrap;
align-items: center;
flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
`

export const SlideColumn = styled.div`
margin-bottom: 15px;
padding-right: 15px;
padding-left: 15px;
//flex-grow, flex-shrink, flex-basis를 한번에 쓸 수 있는 축약형 속성.
flex: 1;
max-width: 50%;
flex-basis: 50%;
 
@media screen and (max-width: 768px) {
    max-width: 100%;
    //flex아이템의 초기크기를 지정
    flex-basis: 100%;
    //flex아이템들은 가로방향으로 배치되고, 자신이 가진 내용물의 width만큼 차지
    display: flex;
    //아이템들을 가운데로 정렬
    justify-content: center;

}
`;

export const TextWrapper = styled.div`
max-width: 540px;
padding-top: 0;
padding-bottom: 60px;

@media screen and (max-width: 768px) {
    padding-bottom: 65px;
}
`

export const TopLine = styled.div`
color: ${({ lightTopLine }) => (lightTopLine ? '#a9b3c1' : '#4B59F7')};
font-size: 18px;
//줄 높이
line-height: 16px;
//글자 간격
letter-spacing: 1.4px;
margin-bottom: 16px;
`;

export const Heading = styled.h1`
margin-bottom: 24px;
font-size: 48px;
line-height: 1.1;
color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#1c2237')};
`

export const Subtitle = styled.p`
max-width: 440px;
margin-bottom:35px;
font-size: 18px;
line-height: 24px;
color: ${({ lightTextDesc }) => (lightTextDesc ? '#a9b3c1' : '#1c2237')};
`

export const ImgWrapper = styled.div`
max-width: 555px;
display: flex;
//아이템을 시작점으로 정렬 : 아이템을 끝점으로 정렬
justify-content: ${({ wow }) => (wow ? 'flex-end' : 'flex-start')};
`

export const Img = styled.img`
    padding-right: 0;
    border: 0;
    max-width: 100%;
    //vertical-align은 inline이나 inline-block요소에만 적용
    //middle - 부모 요소 중앙에 위치
    vertical-align: middle;
    //아이템들을 한줄에 원하는 너비만큼 배치
    display: inline-block;
    max-height: 500px;
`