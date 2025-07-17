import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const TestDrive = (props) => {
  return (
    <>
      <div className="test-drive-test-drive">
        <div className="test-drive-max-width">
          <div className="test-drive-container">
            <div className="test-drive-header">
              <div className="test-drive-title">
                <span className="test-drive-text1">
                  {props.text ?? (
                    <Fragment>
                      <span className="test-drive-text5">
                        DISCOVER THE FUTURE OF DRIVING WITH THE LEPAS MODEL.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="test-drive-content">
                <span className="test-drive-text2">
                  {props.text1 ?? (
                    <Fragment>
                      <span className="test-drive-text6">
                        The LEPAS L8 transforms travel with its sleek design and
                        advanced technology. Experience a perfect mix of style
                        and innovation, turning every drive into an adventure.
                      </span>
                    </Fragment>
                  )}
                </span>
                <button type="button" className="test-drive-button">
                  <span className="test-drive-text3">
                    {props.text2 ?? (
                      <Fragment>
                        <span className="test-drive-text4">EXPLORE</span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
            </div>
            <div className="test-drive-thumbnail">
              <img
                alt={props.imageAlt}
                src={props.imageSrc}
                className="test-drive-image"
              />
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .test-drive-test-drive {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .test-drive-max-width {
            gap: 80px;
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            max-width: 1600px;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            padding-top: var(--dl-layout-space-sixunits);
            padding-left: var(--dl-layout-space-fourunits);
            padding-right: var(--dl-layout-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-sixunits);
          }
          .test-drive-container {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .test-drive-header {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .test-drive-title {
            gap: 16px;
            flex: 1;
            width: auto;
            display: flex;
            flex-wrap: wrap;
            align-self: stretch;
            align-items: center;
            flex-direction: row;
          }
          .test-drive-text1 {
            color: rgb(12, 9, 2);
            height: auto;
            font-size: 48px;
            align-self: stretch;
            text-align: left;
            font-family: 'Arimo';
            font-weight: 700;
            line-height: 120%;
            letter-spacing: 0.01em;
          }
          .test-drive-content {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            overflow: visible;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .test-drive-text2 {
            color: rgb(12, 9, 2);
            width: auto;
            height: auto;
            font-size: 18px;
            min-width: auto;
            align-self: stretch;
            font-style: normal;
            text-align: left;
            font-family: 'Open Sans';
            font-weight: 400px;
            line-height: 160%;
            font-stretch: normal;
            letter-spacing: 0em;
          }
          .test-drive-button {
            height: 44px;
            display: flex;
            max-width: var(--dl-layout-size-xxlarge);
            min-width: var(--dl-layout-size-large);
            align-self: flex-start;
            box-sizing: content-box;
            align-items: center;
            padding-top: 0px;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            padding-left: 10px 24px;
            border-radius: 6px;
            padding-right: 10px 24px;
            padding-bottom: 0px;
            justify-content: center;
          }
          .test-drive-text3 {
            color: rgba(12, 9, 2, 1);
            height: auto;
            font-size: 18px;
            align-self: center;
            font-style: normal;
            text-align: left;
            font-family: 'Arimo';
            font-weight: 500;
            font-stretch: normal;
            letter-spacing: 0em;
            text-transform: none;
            text-decoration: none;
          }
          .test-drive-thumbnail {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-self: stretch;
            align-items: flex-start;
            border-radius: 40px;
          }
          .test-drive-image {
            width: 100%;
            height: 100%;
            display: block;
            align-self: stretch;
          }
          .test-drive-text4 {
            display: inline-block;
          }
          .test-drive-text5 {
            display: inline-block;
          }
          .test-drive-text6 {
            display: inline-block;
          }
          @media (max-width: 1600px) {
            .test-drive-header {
              align-items: center;
            }
            .test-drive-text1 {
              font-family: Arimo;
            }
          }
          @media (max-width: 1200px) {
            .test-drive-container {
              gap: var(--dl-layout-space-twounits);
            }
            .test-drive-header {
              gap: var(--dl-layout-space-twounits);
              align-items: flex-start;
            }
            .test-drive-text1 {
              font-family: Arimo;
            }
            .test-drive-thumbnail {
              border-radius: 32px;
            }
          }
          @media (max-width: 991px) {
            .test-drive-max-width {
              padding-top: var(--dl-layout-space-fiveunits);
              padding-left: var(--dl-layout-space-threeunits);
              padding-right: var(--dl-layout-space-threeunits);
              padding-bottom: var(--dl-layout-space-fiveunits);
            }
            .test-drive-header {
              align-items: center;
            }
            .test-drive-text1 {
              color: rgb(12, 9, 2);
              font-size: 40px;
              font-family: Arimo;
              font-weight: 700;
              line-height: 120%;
              letter-spacing: 0.01em;
            }
            .test-drive-button {
              align-self: stretch;
              padding-top: 0px;
              padding-bottom: 0px;
            }
          }
          @media (max-width: 767px) {
            .test-drive-max-width {
              padding-top: var(--dl-layout-space-fourunits);
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
              padding-bottom: var(--dl-layout-space-fourunits);
            }
            .test-drive-header {
              gap: var(--dl-layout-space-oneandhalfunits);
              align-self: flex-start;
              flex-direction: column;
            }
            .test-drive-title {
              justify-content: center;
            }
            .test-drive-text1 {
              font-size: 32px;
              text-align: left;
            }
            .test-drive-content {
              gap: var(--dl-layout-space-unit);
              align-self: center;
              align-items: center;
              justify-content: flex-start;
            }
            .test-drive-text2 {
              font-size: 16px;
              text-align: left;
            }
            .test-drive-button {
              width: 100%;
              height: 40px;
              max-width: var(--dl-layout-size-large);
              min-width: var(--dl-layout-size-medium);
              align-self: flex-start;
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .test-drive-text3 {
              font-size: 16px;
            }
            .test-drive-thumbnail {
              border-radius: 24px;
            }
          }
          @media (max-width: 479px) {
            .test-drive-max-width {
              padding-top: var(--dl-layout-space-threeunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .test-drive-text1 {
              font-size: 26px;
            }
            .test-drive-content {
              gap: var(--dl-layout-space-unit);
            }
            .test-drive-text3 {
              font-style: normal;
              font-family: Arimo;
              font-weight: 400;
            }
          }
        `}
      </style>
    </>
  )
}

TestDrive.defaultProps = {
  text2: undefined,
  text: undefined,
  text1: undefined,
  imageSrc: '/external/placeholderimage8209-f2m7-1500w.png',
  imageAlt: 'PlaceholderImage8209',
}

TestDrive.propTypes = {
  text2: PropTypes.element,
  text: PropTypes.element,
  text1: PropTypes.element,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default TestDrive
