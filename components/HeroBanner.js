import Image from "next/image";
import styled from "styled-components";
import {device, scrollToReport} from "~/config/utils";

const HeroContainer = styled.div`
  min-height: calc(100vh - 222px);
  position: relative;

  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);

    @media ${device.tablet} {
      background-color: rgba(0, 0, 0, 0.2);
      min-height: calc(100vh - 245px);
    }
  }

  img {
    &[alt="hero"] {
      object-fit: cover;
      object-position: center center;
    }
  }
`;
const HeroContent = styled.div`
  color: white;
  z-index: 2;
  line-height: 1;
  width: 100%;
  max-width: 800px;
  position: absolute;
  padding: 10px;
  top: 50%;
  right: 50%;
  transform: translate(50%, -70%);

  @media ${device.tablet} {
    top: 50%;
    right: 100%;
    transform: translate(100%, -60%);
  }

  @media ${device.laptop} {
    top: 50%;
    right: 60%;
    transform: translate(50%, -60%);
  }
`;

const HeroTitle = styled.div`
  text-align: left;
  text-transform: uppercase;
  font-weight: 400;
  margin-bottom: 20px;
  font-size: 55px;

  @media ${device.tablet} {
    font-size: 85px;
    margin-bottom: 40px;
  }
`;

const HeroScrollContainer = styled.div`
  position: absolute;
  bottom: 20px;
  right: 50%;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateX(50%);

  @media ${device.tablet} {
    bottom: 15px;
  }
`;

const HeroScrollImage = styled.div`
  margin-bottom: 20px;
  cursor: pointer;

  @media ${device.tablet} {
    height: 70px;
    width: 70px;
  }

  &:hover {
    path {
      fill: white;
      transition: all 0.5s ease-in;
    }
  }
  svg {
    path {
      transition: all 0.5s ease-in;
    }
  }
`;

const HeroDesc = styled.div`
  font-size: 25px;

  @media ${device.tablet} {
    font-size: 36px;
  }
`;

const HeroBanner = ({ title, desc, img }) => {

  return (
    <HeroContainer>
      <Image priority={true} src={img} alt="hero" layout="fill" />
      <HeroContent>
        <HeroTitle>{title}</HeroTitle>
        {desc && <HeroDesc>{desc}</HeroDesc>}
      </HeroContent>
      <HeroScrollContainer>
        <HeroScrollImage onClick={() => scrollToReport()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="70"
            viewBox="0 0 70 70"
          >
            <g id="right-arrow" transform="translate(70) rotate(90)">
              <g id="Group_642" data-name="Group 642">
                <g id="Group_641" data-name="Group 641">
                  <g id="Group_649" data-name="Group 649">
                    <path
                      id="Path_540"
                      data-name="Path 540"
                      d="M35,0A35,35,0,1,0,70,35,35,35,0,0,0,35,0Zm0,65.625A30.625,30.625,0,1,1,65.625,35,30.625,30.625,0,0,1,35,65.625Z"
                      fill="#7EFF33"
                    />
                    <path
                      id="Path_541"
                      data-name="Path 541"
                      d="M199.087,116.8l-2.447,2.444,12.671,12.638-12.653,12.655,2.447,2.444,13.868-13.869a1.732,1.732,0,0,0,0-2.444Z"
                      transform="translate(-167.729 -96.881)"
                      fill="#7EFF33"
                    />
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </HeroScrollImage>
      </HeroScrollContainer>
    </HeroContainer>
  );
};

export default HeroBanner;
