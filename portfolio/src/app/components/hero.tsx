import { useState, useEffect } from 'react';

interface LinkData {
    txt: string;
    img: string;
  }
  
  interface Props {
    data: LinkData[];
  }

const Hero: React.FC<Props> = ({data}) => {
    useEffect(() => {
        console.log('hello');
    }, [])
    return (
        <div className="hero">
        <div className="hero-container">
          <div className="hero-subheader">
            Software Engineer by day. Founder by night.
          </div>
          <div className="hero-header">
            I create high-quality code that will empower your users
          </div>
          <div className="hero-btn-section">
            <div className="hero-btn">Make it happen</div>
          </div>
          <div className="hero-links">
            {data && data.heroLinks}
            <div className="hero-link">
              <div className="hero-link-icon">
                <img
                  src="/Icons/Vectors-Wrapper_1.svg"
                  loading="lazy"
                  width={20}
                  height="20.001371383666992"
                  alt=""
                  className="vectors-wrapper-2"
                />
              </div>
              <div className="hero-link-txt">LinkedIn</div>
            </div>
            <div className="hero-link">
              <img
                src="/Icons/Vectors-Wrapper_2.svg"
                loading="lazy"
                width={20}
                height={20}
                alt=""
                className="vectors-wrapper-3"
              />
              <div className="hero-link-txt">GitHub</div>
            </div>
            <div className="hero-link">
              <div className="hero-link-icon">
                <img
                  src="/Icons/Vectors-Wrapper_3.svg"
                  loading="lazy"
                  width="14.218221664428711"
                  height="19.52094078063965"
                  alt=""
                  className="vectors-wrapper-4"
                />
              </div>
              <div className="hero-link-txt">Resume</div>
            </div>
          </div>
        </div>
      </div>
    )
}


  export default Hero;