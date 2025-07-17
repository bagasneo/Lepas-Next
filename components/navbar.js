import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Navbar = (props) => {
  return (
    <>
      <div className={`navbar-navbar ${props.rootClassName} `}>
        <div className="navbar-max-width">
          <div className="navbar-container">
            <div className="navbar-button-icon1">
              <img
                alt={props.combinedShapeAlt}
                src={props.combinedShapeSrc}
                className="navbar-combined-shape"
              />
              <span className="navbar-text1">
                {props.text ?? (
                  <Fragment>
                    <span className="navbar-text4">Menu</span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="navbar-lepas">
              <img
                alt={props.vectorAlt}
                src={props.vectorSrc}
                className="navbar-vector1"
              />
              <img
                alt={props.vectorAlt1}
                src={props.vectorSrc1}
                className="navbar-vector2"
              />
              <img
                alt={props.vectorAlt2}
                src={props.vectorSrc2}
                className="navbar-vector3"
              />
              <img
                alt={props.vectorAlt3}
                src={props.vectorSrc3}
                className="navbar-vector4"
              />
              <img
                alt={props.vectorAlt4}
                src={props.vectorSrc4}
                className="navbar-vector5"
              />
              <img
                alt={props.vectorAlt5}
                src={props.vectorSrc5}
                className="navbar-vector6"
              />
            </div>
            <div className="navbar-button-icon2">
              <img
                alt={props.imageAlt}
                src={props.imageSrc}
                className="navbar-image"
              />
            </div>
            <button className="navbar-button">
              <span className="navbar-text2">
                {props.text1 ?? (
                  <Fragment>
                    <span className="navbar-text3">TEST DRIVE</span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .navbar-navbar {
            width: 100%;
            height: 80px;
            display: flex;
            z-index: 1;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: row;
            justify-content: center;
            background-color: rgba(255, 255, 255, 1);
          }
          .navbar-max-width {
            width: 100%;
            display: flex;
            max-width: 1600px;
            align-items: center;
            padding-left: var(--dl-layout-space-fourunits);
            padding-right: var(--dl-layout-space-fourunits);
            flex-direction: row;
            justify-content: center;
          }
          .navbar-container {
            gap: 622px;
            display: flex;
            position: relative;
            flex-grow: 1;
            align-items: center;
            justify-content: space-between;
          }
          .navbar-button-icon1 {
            gap: 12px;
            height: 48px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
          }
          .navbar-combined-shape {
            width: 20px;
            height: 20px;
          }
          .navbar-text1 {
            color: rgba(12, 9, 2, 1);
            height: auto;
            font-size: 18px;
            font-style: normal;
            text-align: left;
            font-family: Arial;
            font-weight: 400;
            line-height: 1.15;
            font-stretch: normal;
            letter-spacing: 0em;
            text-transform: none;
            text-decoration: none;
          }
          .navbar-lepas {
            top: 0px;
            left: 0px;
            right: 0px;
            width: var(--dl-layout-size-large);
            bottom: 0px;
            height: 100%;
            margin: auto;
            display: flex;
            position: absolute;
            align-items: center;
            flex-shrink: 1;
            justify-content: center;
          }
          .navbar-vector1 {
            top: 0px;
            left: 0.0000020104080249438994px;
            width: 24px;
            bottom: 0px;
            height: 20px;
            margin: auto;
            position: absolute;
          }
          .navbar-vector2 {
            top: 0px;
            left: 28.55940818786621px;
            width: 24px;
            bottom: 0px;
            height: 20px;
            margin: auto;
            position: absolute;
          }
          .navbar-vector3 {
            top: 0px;
            left: 59.351192474365234px;
            width: 25px;
            bottom: 0px;
            height: 20px;
            margin: auto;
            position: absolute;
          }
          .navbar-vector4 {
            top: 0px;
            left: 118.48248291015625px;
            width: 24px;
            bottom: 0px;
            height: 20px;
            margin: auto;
            position: absolute;
          }
          .navbar-vector5 {
            top: 0px;
            left: 85.59847259521484px;
            width: 29px;
            bottom: 0px;
            height: 20px;
            margin: auto;
            position: absolute;
          }
          .navbar-vector6 {
            top: 0px;
            left: 35.539669036865234px;
            width: 17px;
            bottom: 0px;
            height: 4px;
            margin: auto;
            position: absolute;
          }
          .navbar-button-icon2 {
            gap: 12px;
            height: 48px;
            display: none;
            align-items: center;
            flex-shrink: 0;
          }
          .navbar-image {
            width: auto;
            object-fit: cover;
          }
          .navbar-button {
            gap: 8px;
            height: 44px;
            display: flex;
            align-self: center;
            box-sizing: content-box;
            align-items: center;
            padding-top: 0px;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            padding-left: var(--dl-layout-space-oneandhalfunits);
            border-radius: 6px;
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: row;
            padding-bottom: 0px;
            justify-content: center;
            background-color: var(--dl-color-theme-secondary1);
          }
          .navbar-text2 {
            color: #0c0902;
            font-size: 14px;
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
          .navbar-text3 {
            display: inline-block;
          }
          .navbar-text4 {
            display: inline-block;
          }
          .navbarroot-class-name {
            top: 0px;
            left: 0px;
            position: absolute;
          }
          @media (max-width: 1600px) {
            .navbar-navbar {
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .navbar-text1 {
              font-family: Open Sans;
            }
            .navbar-image {
              width: auto;
              height: auto;
            }
          }
          @media (max-width: 1200px) {
            .navbar-navbar {
              top: 0px;
              left: 0px;
              z-index: 1;
              position: absolute;
            }
            .navbar-max-width {
              max-width: 1600px;
            }
            .navbar-button-icon1 {
              animation-name: none;
              animation-delay: 0s;
              animation-duration: 300ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease;
            }
            .navbar-text1 {
              line-height: 1;
            }
          }
          @media (max-width: 991px) {
            .navbar-max-width {
              padding-left: var(--dl-layout-space-threeunits);
              padding-right: var(--dl-layout-space-threeunits);
            }
            .navbar-container {
              width: 100%;
              align-self: center;
              align-items: center;
            }
            .navbar-lepas {
              top: 0px;
              left: 0px;
              right: 0px;
              scale: 0.8;
              bottom: 0px;
              height: auto;
              margin: auto;
              align-items: center;
            }
            .navbar-vector1 {
              top: 0px;
              bottom: 0px;
              margin: auto;
            }
            .navbar-vector2 {
              top: 0px;
              bottom: 0px;
              margin: auto;
            }
            .navbar-vector3 {
              top: 0px;
              bottom: 0px;
              margin: auto;
            }
            .navbar-vector4 {
              top: 0px;
              bottom: 0px;
              margin: auto;
            }
            .navbar-vector5 {
              top: 0px;
              bottom: 0px;
              margin: auto;
            }
            .navbar-vector6 {
              top: 0px;
              bottom: 0px;
              margin: auto;
            }
            .navbar-button {
              width: auto;
              height: 44px;
              align-self: center;
              align-items: center;
              padding-top: 0px;
              padding-bottom: 0px;
              justify-content: flex-end;
            }
            .navbar-text2 {
              width: var(--dl-layout-size-medium);
              display: flex;
              justify-content: center;
            }
          }
          @media (max-width: 767px) {
            .navbar-max-width {
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
            }
            .navbar-container {
              gap: 0;
              width: 100%;
              height: auto;
              align-self: center;
              align-items: center;
              justify-content: space-between;
            }
            .navbar-text1 {
              font-size: 16px;
            }
            .navbar-lepas {
              top: 0px;
              left: 0px;
              right: 0px;
              scale: 0.6;
              bottom: 0px;
              margin: auto;
              position: absolute;
            }
            .navbar-button {
              width: auto;
              height: 40px;
              align-self: center;
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              justify-content: flex-start;
            }
          }
          @media (max-width: 479px) {
            .navbar-max-width {
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
            }
            .navbar-text1 {
              display: none;
            }
            .navbar-lepas {
              top: 0px;
              left: 0px;
              right: 0px;
              bottom: 0px;
              margin: auto;
              position: absolute;
              justify-content: flex-start;
            }
            .navbar-button-icon2 {
              display: flex;
            }
            .navbar-image {
              display: flex;
            }
            .navbar-button {
              fill: var(--dl-color-theme-neutral-dark);
              color: var(--dl-color-theme-neutral-dark);
              display: none;
            }
          }
        `}
      </style>
    </>
  )
}

Navbar.defaultProps = {
  combinedShapeSrc: '/external/combinedshape8213-vleq.svg',
  vectorAlt5: 'Vector8211',
  vectorSrc3: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  rootClassName: '',
  vectorSrc2: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  vectorSrc5: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  imageSrc: '/icons/search_hands_free.svg',
  vectorSrc: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  vectorAlt: 'Vector8211',
  vectorAlt2: 'Vector8211',
  vectorAlt4: 'Vector8211',
  vectorAlt3: 'Vector8211',
  imageAlt: 'image',
  vectorAlt1: 'Vector8211',
  vectorSrc1: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  text1: undefined,
  combinedShapeAlt: 'CombinedShape8213',
  vectorSrc4: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  text: undefined,
}

Navbar.propTypes = {
  combinedShapeSrc: PropTypes.string,
  vectorAlt5: PropTypes.string,
  vectorSrc3: PropTypes.string,
  rootClassName: PropTypes.string,
  vectorSrc2: PropTypes.string,
  vectorSrc5: PropTypes.string,
  imageSrc: PropTypes.string,
  vectorSrc: PropTypes.string,
  vectorAlt: PropTypes.string,
  vectorAlt2: PropTypes.string,
  vectorAlt4: PropTypes.string,
  vectorAlt3: PropTypes.string,
  imageAlt: PropTypes.string,
  vectorAlt1: PropTypes.string,
  vectorSrc1: PropTypes.string,
  text1: PropTypes.element,
  combinedShapeAlt: PropTypes.string,
  vectorSrc4: PropTypes.string,
  text: PropTypes.element,
}

export default Navbar
