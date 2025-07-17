import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Hero = (props) => {
  return (
    <>
      <div className="hero-hero">
        <img alt={props.imageAlt} src={props.imageSrc} className="hero-image" />
        <div className="hero-max-width">
          <div className="hero-content">
            <span className="hero-text1">
              {props.text ?? (
                <Fragment>
                  <span className="hero-text2">
                    <span>
                      COLORFUL LIFE,
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>MASTERFUL DRIVE</span>
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .hero-hero {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-self: center;
            align-items: center;
            flex-direction: column;
          }
          .hero-image {
            width: 100%;
            height: auto;
            object-fit: cover;
          }
          .hero-max-width {
            gap: 80px;
            width: 100%;
            display: flex;
            z-index: 1;
            overflow: hidden;
            max-width: 1600px;
            align-items: flex-end;
            flex-shrink: 0;
            padding-top: var(--dl-layout-space-sixunits);
            padding-left: var(--dl-layout-space-fourunits);
            padding-right: var(--dl-layout-space-fourunits);
            padding-bottom: var(--dl-layout-space-sixunits);
            justify-content: center;
          }
          .hero-content {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            justify-content: center;
          }
          .hero-text1 {
            color: rgba(12, 9, 2, 1);
            height: auto;
            font-size: 48px;
            text-align: center;
            font-family: Arimo;
            font-weight: 700;
            line-height: 120.00000476837158%;
            letter-spacing: 0.01em;
          }
          .hero-text2 {
            color: rgba(12, 9, 2, 1);
            height: auto;
            display: inline-block;
            font-size: 48px;
            text-align: center;
            font-family: Arimo;
            font-weight: 700;
            line-height: 120.00000476837158%;
            letter-spacing: 0.01em;
          }
          @media (max-width: 1200px) {
            .hero-hero {
              height: 100%;
            }
            .hero-max-width {
              height: 100%;
            }
            .hero-content {
              max-width: 1600px;
              padding-left: var(--dl-layout-space-fourunits);
              padding-right: var(--dl-layout-space-fourunits);
            }
          }
          @media (max-width: 991px) {
            .hero-max-width {
              height: 100%;
              padding-top: var(--dl-layout-space-fiveunits);
              padding-left: var(--dl-layout-space-threeunits);
              padding-right: var(--dl-layout-space-threeunits);
              padding-bottom: var(--dl-layout-space-fourunits);
            }
            .hero-content {
              padding-left: var(--dl-layout-space-threeunits);
              padding-right: var(--dl-layout-space-threeunits);
            }
            .hero-text1 {
              font-size: 40px;
            }
            .hero-text2 {
              font-size: 40px;
            }
          }
          @media (max-width: 767px) {
            .hero-max-width {
              height: auto;
              padding-top: var(--dl-layout-space-fourunits);
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
              padding-bottom: var(--dl-layout-space-fourunits);
            }
            .hero-content {
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
            }
            .hero-text1 {
              font-size: 32px;
            }
            .hero-text2 {
              font-size: 32px;
            }
          }
          @media (max-width: 479px) {
            .hero-hero {
              height: 100%;
              position: relative;
              align-self: flex-start;
            }
            .hero-max-width {
              height: 100%;
              padding: var(--dl-layout-space-threeunits);
              position: static;
              padding-top: var(--dl-layout-space-oneandhalfunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
            }
            .hero-content {
              flex-wrap: wrap;
              align-self: flex-start;
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
            }
            .hero-text1 {
              color: rgb(12, 9, 2);
              height: 100%;
              font-size: 24px;
              min-height: 100%;
              line-height: 120%;
            }
            .hero-text2 {
              color: rgb(12, 9, 2);
              height: 100%;
              font-size: 24px;
              min-height: 100%;
              line-height: 120%;
            }
          }
        `}
      </style>
    </>
  )
}

Hero.defaultProps = {
  text: undefined,
  imageAlt: 'image',
  imageSrc: '/images/image-hero-1500w.png',
}

Hero.propTypes = {
  text: PropTypes.element,
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default Hero
