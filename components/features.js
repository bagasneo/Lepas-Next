import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Features = (props) => {
  return (
    <>
      <div className="features-features">
        <div className="features-max-width">
          <div className="features-container">
            <div className="features-section-title">
              <span className="features-text10">
                {props.text ?? (
                  <Fragment>
                    <span className="features-text15">
                      <span>
                        EXPERIENCE
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span>THE FUTURE</span>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="features-row">
              <div className="features-card1">
                <div className="features-thumbnail1">
                  <img
                    alt={props.imageAlt}
                    src={props.imageSrc}
                    className="features-image1"
                  />
                </div>
                <div className="features-content1">
                  <span className="features-title1">
                    {props.title ?? (
                      <Fragment>
                        <span className="features-text18">
                          Exciting Journeys Begin Here
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <span className="features-description1">
                    {props.description ?? (
                      <Fragment>
                        <span className="features-text11">
                          Experience extraordinary journeys filled with
                          remarkable moments that inspire you every step of the
                          way.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
              <div className="features-card2">
                <div className="features-thumbnail2">
                  <img
                    alt={props.imageAlt1}
                    src={props.imageSrc1}
                    className="features-image2"
                  />
                </div>
                <div className="features-content2">
                  <span className="features-title2">
                    {props.title1 ?? (
                      <Fragment>
                        <span className="features-text12">
                          Transforming Travel into Art
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <span className="features-description2">
                    {props.description1 ?? (
                      <Fragment>
                        <span className="features-text19">
                          Transforming travel into a masterpiece with Lepas
                          vehicles, where every journey becomes a work of art
                          that inspires and captivates.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
              <div className="features-card3">
                <div className="features-thumbnail3">
                  <img
                    alt={props.imageAlt2}
                    src={props.imageSrc2}
                    className="features-image3"
                  />
                </div>
                <div className="features-content3">
                  <span className="features-title3">
                    {props.title2 ?? (
                      <Fragment>
                        <span className="features-text13">
                          Embrace Vibrant Living
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <span className="features-description3">
                    {props.description2 ?? (
                      <Fragment>
                        <span className="features-text14">
                          Embrace a vibrant lifestyle with Lepas vehicles that
                          elevate your adventures and ignite your passion for
                          exploration.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="features-content4">
              <div className="features-slider-dots">
                <img
                  alt={props.dotAlt}
                  src={props.dotSrc}
                  className="features-dot1"
                />
                <img
                  alt={props.dotAlt1}
                  src={props.dotSrc1}
                  className="features-dot2"
                />
              </div>
              <button className="features-slider-buttons">
                <div className="features-slider-arrow1">
                  <img
                    alt={props.arrowbackAlt}
                    src={props.arrowbackSrc}
                    className="features-arrowback"
                  />
                </div>
                <div className="features-slider-arrow2">
                  <img
                    alt={props.arrowforwardAlt}
                    src={props.arrowforwardSrc}
                    className="features-arrowforward"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .features-features {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            justify-content: center;
          }
          .features-max-width {
            gap: 112px;
            width: 100%;
            height: auto;
            display: flex;
            overflow: visible;
            max-width: 1600px;
            align-self: stretch;
            align-items: center;
            padding-top: var(--dl-layout-space-sixunits);
            padding-left: var(--dl-layout-space-fourunits);
            padding-right: var(--dl-layout-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-sixunits);
            background-color: rgba(255, 255, 255, 1);
          }
          .features-container {
            gap: var(--dl-layout-space-fourunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .features-section-title {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .features-text10 {
            color: rgb(12, 9, 2);
            height: auto;
            font-size: 48px;
            align-self: stretch;
            text-align: center;
            font-family: 'Arimo';
            font-weight: 700;
            line-height: 120%;
            letter-spacing: 0.01em;
          }
          .features-row {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: grid;
            grid-template-rows: 1fr;
            grid-template-columns: 1fr 1fr 1fr;
          }
          .features-card1 {
            width: auto;
            height: auto;
            display: flex;
            overflow: hidden;
            box-sizing: content-box;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(218, 218, 217, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 32px;
            flex-direction: column;
          }
          .features-thumbnail1 {
            width: auto;
            height: 400px;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-end;
            border-radius: 32px;
            flex-direction: column;
            justify-content: center;
          }
          .features-image1 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .features-content1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: auto;
            height: auto;
            display: flex;
            padding: var(--dl-layout-space-twounits);
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .features-title1 {
            color: rgb(12, 9, 2);
            height: auto;
            font-size: 24px;
            align-self: stretch;
            text-align: center;
            font-family: 'Arimo';
            font-weight: 700;
            line-height: 120%;
            letter-spacing: 0.01em;
          }
          .features-description1 {
            color: rgb(12, 9, 2);
            height: auto;
            font-size: 18px;
            align-self: stretch;
            font-style: normal;
            text-align: center;
            font-family: 'Open Sans';
            font-weight: 400px;
            line-height: 160%;
            font-stretch: normal;
            letter-spacing: 0em;
          }
          .features-card2 {
            width: auto;
            height: auto;
            display: flex;
            overflow: hidden;
            box-sizing: content-box;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(218, 218, 217, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 32px;
            flex-direction: column;
          }
          .features-thumbnail2 {
            width: 100%;
            height: 400px;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-end;
            border-radius: 32px;
            flex-direction: column;
            justify-content: center;
          }
          .features-image2 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .features-content2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: auto;
            height: auto;
            display: flex;
            padding: var(--dl-layout-space-twounits);
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .features-title2 {
            color: rgb(12, 9, 2);
            height: auto;
            font-size: 24px;
            align-self: stretch;
            text-align: center;
            font-family: 'Arimo';
            font-weight: 700;
            line-height: 120%;
            letter-spacing: 0.01em;
          }
          .features-description2 {
            color: rgb(12, 9, 2);
            height: auto;
            font-size: 18px;
            align-self: stretch;
            font-style: normal;
            text-align: center;
            font-family: 'Open Sans';
            font-weight: 400px;
            line-height: 160%;
            font-stretch: normal;
            letter-spacing: 0em;
          }
          .features-card3 {
            width: auto;
            height: auto;
            display: flex;
            overflow: hidden;
            box-sizing: content-box;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(218, 218, 217, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 32px;
            flex-direction: column;
          }
          .features-thumbnail3 {
            width: 100%;
            height: 400px;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-end;
            border-radius: 32px;
            flex-direction: column;
            justify-content: center;
          }
          .features-image3 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .features-content3 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: auto;
            height: auto;
            display: flex;
            padding: var(--dl-layout-space-twounits);
            flex-grow: 1;
            align-self: center;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .features-title3 {
            color: rgb(12, 9, 2);
            height: auto;
            font-size: 24px;
            align-self: stretch;
            text-align: center;
            font-family: 'Arimo';
            font-weight: 700;
            line-height: 120%;
            letter-spacing: 0.01em;
          }
          .features-description3 {
            color: rgb(12, 9, 2);
            height: auto;
            font-size: 18px;
            align-self: stretch;
            font-style: normal;
            text-align: center;
            font-family: 'Open Sans';
            font-weight: 400px;
            line-height: 160%;
            font-stretch: normal;
            letter-spacing: 0em;
          }
          .features-content4 {
            gap: 40px;
            display: none;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .features-slider-dots {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .features-dot1 {
            width: 8px;
            height: 8px;
          }
          .features-dot2 {
            width: 8px;
            height: 8px;
            opacity: 0.2;
          }
          .features-slider-buttons {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .features-slider-arrow1 {
            gap: 8px;
            display: flex;
            padding: 12px;
            align-items: center;
            border-color: rgba(133, 132, 128, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 4px;
            justify-content: center;
            background-color: rgba(255, 255, 255, 1);
          }
          .features-arrowback {
            width: 24px;
            height: 24px;
          }
          .features-slider-arrow2 {
            gap: 8px;
            display: flex;
            padding: 12px;
            align-items: center;
            border-color: rgba(133, 132, 128, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 4px;
            justify-content: center;
            background-color: rgba(255, 255, 255, 1);
          }
          .features-arrowforward {
            width: 24px;
            height: 24px;
          }
          .features-text11 {
            display: inline-block;
          }
          .features-text12 {
            display: inline-block;
          }
          .features-text13 {
            display: inline-block;
          }
          .features-text14 {
            display: inline-block;
          }
          .features-text15 {
            color: rgb(12, 9, 2);
            height: auto;
            display: inline-block;
            font-size: 48px;
            align-self: stretch;
            text-align: center;
            font-family: 'Arimo';
            font-weight: 700;
            line-height: 120%;
            letter-spacing: 0.01em;
          }
          .features-text18 {
            display: inline-block;
          }
          .features-text19 {
            display: inline-block;
          }
          @media (max-width: 1600px) {
            .features-max-width {
              padding-left: var(--dl-layout-space-fourunits);
            }
            .features-text10 {
              font-family: Arimo;
            }
            .features-text15 {
              font-family: Arimo;
            }
          }
          @media (max-width: 1200px) {
            .features-max-width {
              padding-right: var(--dl-layout-space-fourunits);
            }
            .features-container {
              gap: var(--dl-layout-space-threeunits);
            }
            .features-text10 {
              font-family: Arimo;
            }
            .features-row {
              gap: var(--dl-layout-space-twounits);
            }
            .features-thumbnail1 {
              height: 300px;
            }
            .features-image1 {
              height: 100%;
            }
            .features-thumbnail2 {
              height: 300px;
            }
            .features-thumbnail3 {
              height: 300px;
            }
            .features-title3 {
              font-size: 24px;
            }
            .features-text15 {
              font-family: Arimo;
            }
          }
          @media (max-width: 991px) {
            .features-max-width {
              padding-top: var(--dl-layout-space-fiveunits);
              padding-left: var(--dl-layout-space-threeunits);
              padding-right: var(--dl-layout-space-threeunits);
              padding-bottom: var(--dl-layout-space-fiveunits);
            }
            .features-text10 {
              color: rgb(12, 9, 2);
              font-size: 40px;
              font-family: Arimo;
              font-weight: 700;
              line-height: 120%;
              letter-spacing: 0.01em;
            }
            .features-row {
              grid-template-columns: 1fr 1fr;
            }
            .features-thumbnail1 {
              height: 300px;
            }
            .features-thumbnail2 {
              height: 300px;
            }
            .features-card3 {
              display: none;
            }
            .features-thumbnail3 {
              height: 200px;
            }
            .features-content4 {
              display: flex;
            }
            .features-slider-dots {
              gap: var(--dl-layout-space-unit);
            }
            .features-slider-buttons {
              gap: var(--dl-layout-space-unit);
            }
            .features-slider-arrow1 {
              width: 44px;
              height: 44px;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: 0px;
            }
            .features-slider-arrow2 {
              width: 44px;
              height: 44px;
            }
            .features-text15 {
              color: rgb(12, 9, 2);
              font-size: 40px;
              font-family: Arimo;
              font-weight: 700;
              line-height: 120%;
              letter-spacing: 0.01em;
            }
          }
          @media (max-width: 767px) {
            .features-max-width {
              padding-top: var(--dl-layout-space-fourunits);
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
              padding-bottom: var(--dl-layout-space-fourunits);
            }
            .features-container {
              gap: var(--dl-layout-space-twounits);
            }
            .features-text10 {
              font-size: 32px;
              text-align: center;
            }
            .features-content1 {
              gap: var(--dl-layout-space-unit);
              padding: var(--dl-layout-space-oneandhalfunits);
            }
            .features-title1 {
              font-size: 20px;
            }
            .features-description1 {
              font-size: 16px;
            }
            .features-content2 {
              gap: var(--dl-layout-space-unit);
            }
            .features-title2 {
              font-size: 20px;
            }
            .features-description2 {
              font-size: 16px;
            }
            .features-content3 {
              gap: var(--dl-layout-space-unit);
            }
            .features-title3 {
              font-size: 20px;
            }
            .features-description3 {
              font-size: 16px;
            }
            .features-slider-dots {
              gap: var(--dl-layout-space-halfunit);
            }
            .features-slider-buttons {
              gap: var(--dl-layout-space-unit);
            }
            .features-slider-arrow1 {
              width: 40px;
              height: 40px;
            }
            .features-slider-arrow2 {
              width: 40px;
              height: 40px;
            }
            .features-text15 {
              font-size: 32px;
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .features-max-width {
              padding-top: var(--dl-layout-space-threeunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .features-container {
              gap: var(--dl-layout-space-twounits);
            }
            .features-text10 {
              font-size: 26px;
            }
            .features-row {
              grid-template-columns: 1fr;
            }
            .features-content1 {
              gap: var(--dl-layout-space-unit);
            }
            .features-card2 {
              display: none;
            }
            .features-content2 {
              gap: var(--dl-layout-space-unit);
            }
            .features-content3 {
              gap: var(--dl-layout-space-unit);
            }
            .features-text15 {
              font-size: 26px;
            }
          }
        `}
      </style>
    </>
  )
}

Features.defaultProps = {
  dotAlt: 'Dot8300',
  description: undefined,
  imageAlt: 'image',
  imageSrc2: '/images/image-feature2-400h.png',
  title1: undefined,
  arrowforwardAlt: 'arrowforwardI8300',
  title2: undefined,
  description2: undefined,
  arrowforwardSrc: '/external/arrowforwardi8300-0i9.svg',
  imageAlt1: 'image',
  dotAlt1: 'Dot8300',
  text: undefined,
  imageSrc1: '/images/image-feature1-400h.png',
  imageSrc: '/images/image-feature3-400h.png',
  imageAlt2: 'image',
  title: undefined,
  dotSrc1: '/external/dot8300-t30a-200h.png',
  description1: undefined,
  arrowbackAlt: 'arrowbackI8300',
  arrowbackSrc: '/external/arrowbacki8300-n9fp.svg',
  dotSrc: '/external/dot8300-n1nwa-200h.png',
}

Features.propTypes = {
  dotAlt: PropTypes.string,
  description: PropTypes.element,
  imageAlt: PropTypes.string,
  imageSrc2: PropTypes.string,
  title1: PropTypes.element,
  arrowforwardAlt: PropTypes.string,
  title2: PropTypes.element,
  description2: PropTypes.element,
  arrowforwardSrc: PropTypes.string,
  imageAlt1: PropTypes.string,
  dotAlt1: PropTypes.string,
  text: PropTypes.element,
  imageSrc1: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt2: PropTypes.string,
  title: PropTypes.element,
  dotSrc1: PropTypes.string,
  description1: PropTypes.element,
  arrowbackAlt: PropTypes.string,
  arrowbackSrc: PropTypes.string,
  dotSrc: PropTypes.string,
}

export default Features
