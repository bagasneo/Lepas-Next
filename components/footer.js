import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Footer = (props) => {
  return (
    <>
      <div className="footer-footer">
        <div className="footer-max-width">
          <div className="footer-container">
            <div className="footer-component">
              <div className="footer-card">
                <div className="footer-content1">
                  <div className="footer-content2">
                    <div className="footer-brand-lepas">
                      <div className="footer-lepas">
                        <img
                          alt={props.vectorAlt}
                          src={props.vectorSrc}
                          className="footer-vector1"
                        />
                        <img
                          alt={props.vectorAlt1}
                          src={props.vectorSrc1}
                          className="footer-vector2"
                        />
                        <img
                          alt={props.vectorAlt2}
                          src={props.vectorSrc2}
                          className="footer-vector3"
                        />
                        <img
                          alt={props.vectorAlt3}
                          src={props.vectorSrc3}
                          className="footer-vector4"
                        />
                        <img
                          alt={props.vectorAlt4}
                          src={props.vectorSrc4}
                          className="footer-vector5"
                        />
                        <img
                          alt={props.vectorAlt5}
                          src={props.vectorSrc5}
                          className="footer-vector6"
                        />
                      </div>
                    </div>
                    <span className="footer-text10">
                      {props.text1 ?? (
                        <Fragment>
                          <span className="footer-text37">
                            <span>
                              COLORFUL LIFE,
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ' ',
                                }}
                              />
                            </span>
                            <br></br>
                            <span>MASTERFUL DRIVE</span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <button type="button" className="footer-button">
                      <span className="footer-text11">
                        {props.text5 ?? (
                          <Fragment>
                            <span className="footer-text36">EXPLORE</span>
                          </Fragment>
                        )}
                      </span>
                    </button>
                  </div>
                  <div className="footer-links">
                    <div className="footer-column">
                      <div className="footer-link-list1">
                        <div className="footer-link10">
                          <span className="footer-text12">
                            {props.text6 ?? (
                              <Fragment>
                                <span className="footer-text41">About Us</span>
                              </Fragment>
                            )}
                          </span>
                        </div>
                        <div className="footer-link11">
                          <span className="footer-text13">
                            {props.text7 ?? (
                              <Fragment>
                                <span className="footer-text35">
                                  Our Models
                                </span>
                              </Fragment>
                            )}
                          </span>
                        </div>
                        <div className="footer-link12">
                          <span className="footer-text14">
                            {props.text8 ?? (
                              <Fragment>
                                <span className="footer-text33">
                                  Contact Us
                                </span>
                              </Fragment>
                            )}
                          </span>
                        </div>
                        <div className="footer-link13">
                          <span className="footer-text15">
                            {props.text9 ?? (
                              <Fragment>
                                <span className="footer-text29">
                                  Support Center
                                </span>
                              </Fragment>
                            )}
                          </span>
                        </div>
                        <div className="footer-link14">
                          <span className="footer-text16">
                            {props.text10 ?? (
                              <Fragment>
                                <span className="footer-text31">
                                  Careers Page
                                </span>
                              </Fragment>
                            )}
                          </span>
                        </div>
                      </div>
                      <div className="footer-link-list2">
                        <div className="footer-link15">
                          <span className="footer-text17">
                            {props.text11 ?? (
                              <Fragment>
                                <span className="footer-text44">News Room</span>
                              </Fragment>
                            )}
                          </span>
                        </div>
                        <div className="footer-link16">
                          <span className="footer-text18">
                            {props.text12 ?? (
                              <Fragment>
                                <span className="footer-text32">
                                  Social Media
                                </span>
                              </Fragment>
                            )}
                          </span>
                        </div>
                        <div className="footer-link17">
                          <span className="footer-text19">
                            {props.text13 ?? (
                              <Fragment>
                                <span className="footer-text26">
                                  Events Page
                                </span>
                              </Fragment>
                            )}
                          </span>
                        </div>
                        <div className="footer-link18">
                          <span className="footer-text20">
                            {props.text14 ?? (
                              <Fragment>
                                <span className="footer-text30">
                                  Customer Stories
                                </span>
                              </Fragment>
                            )}
                          </span>
                        </div>
                        <div className="footer-link19">
                          <span className="footer-text21">
                            {props.text15 ?? (
                              <Fragment>
                                <span className="footer-text27">FAQs Page</span>
                              </Fragment>
                            )}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="footer-social-links">
                      <img
                        alt={props.facebookAlt}
                        src={props.facebookSrc}
                        className="footer-facebook"
                      />
                      <img
                        alt={props.instagramAlt}
                        src={props.instagramSrc}
                        className="footer-instagram"
                      />
                      <img
                        alt={props.xAlt}
                        src={props.xSrc}
                        className="footer-x"
                      />
                      <img
                        alt={props.linkedInAlt}
                        src={props.linkedInSrc}
                        className="footer-linked-in"
                      />
                      <img
                        alt={props.youtubeAlt}
                        src={props.youtubeSrc}
                        className="footer-youtube"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-credits">
                <div className="footer-row">
                  <span className="footer-text22 TextSmallNormal">
                    {props.text ?? (
                      <Fragment>
                        <span className="footer-text43">
                          © 2025 LEPAS. All rights reserved.
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <div className="footer-footer-links">
                    <span className="footer-text23 TextSmallLink">
                      {props.text2 ?? (
                        <Fragment>
                          <span className="footer-text34">Privacy Policy</span>
                        </Fragment>
                      )}
                    </span>
                    <span className="footer-text24 TextSmallLink">
                      {props.text3 ?? (
                        <Fragment>
                          <span className="footer-text42">
                            Terms of Service
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span className="footer-text25 TextSmallLink">
                      {props.text4 ?? (
                        <Fragment>
                          <span className="footer-text28">
                            Cookies Settings
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .footer-footer {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            justify-content: center;
            background-color: rgba(23, 23, 23, 1);
          }
          .footer-max-width {
            gap: 32px;
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            max-width: 1600px;
            align-self: stretch;
            align-items: center;
            padding-top: var(--dl-layout-space-sixunits);
            padding-left: var(--dl-layout-space-fourunits);
            padding-right: var(--dl-layout-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-sixunits);
          }
          .footer-container {
            gap: 80px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
            background-color: rgba(23, 23, 23, 1);
          }
          .footer-component {
            gap: 32px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-card {
            gap: 32px;
            display: flex;
            padding: 48px;
            align-self: stretch;
            align-items: flex-start;
            border-radius: 40px;
            flex-direction: column;
            background-color: rgba(38, 38, 38, 1);
          }
          .footer-content1 {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-self: stretch;
            flex-shrink: 0;
            justify-content: flex-start;
          }
          .footer-content2 {
            gap: var(--dl-layout-space-twounits);
            width: auto;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .footer-brand-lepas {
            width: 143px;
            height: 20px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .footer-lepas {
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
          .footer-vector1 {
            top: 0px;
            left: 0.0000020104080249438994px;
            width: 24px;
            bottom: 0px;
            height: 20px;
            margin: auto;
            position: absolute;
          }
          .footer-vector2 {
            top: 0px;
            left: 28.55940818786621px;
            width: 24px;
            bottom: 0px;
            height: 20px;
            margin: auto;
            position: absolute;
          }
          .footer-vector3 {
            top: 0px;
            left: 59.351192474365234px;
            width: 25px;
            bottom: 0px;
            height: 20px;
            margin: auto;
            position: absolute;
          }
          .footer-vector4 {
            top: 0px;
            left: 118.48248291015625px;
            width: 24px;
            bottom: 0px;
            height: 20px;
            margin: auto;
            position: absolute;
          }
          .footer-vector5 {
            top: 0px;
            left: 85.59847259521484px;
            width: 29px;
            bottom: 0px;
            height: 20px;
            margin: auto;
            position: absolute;
          }
          .footer-vector6 {
            top: 0px;
            left: 35.539669036865234px;
            width: 17px;
            bottom: 0px;
            height: 4px;
            margin: auto;
            position: absolute;
          }
          .footer-text10 {
            color: #ffffff;
            width: 100%;
            font-size: 48px;
            align-self: flex-start;
            text-align: left;
            font-family: 'Arimo';
            font-weight: 700;
            line-height: 120%;
            letter-spacing: 0.01em;
          }
          .footer-button {
            height: 44px;
            display: flex;
            max-width: var(--dl-layout-size-xxlarge);
            min-width: var(--dl-layout-size-large);
            align-self: flex-start;
            box-sizing: content-box;
            align-items: center;
            padding-top: 0px;
            border-color: #ffffff;
            border-width: 1px;
            padding-left: 10px 24px;
            border-radius: 6px;
            padding-right: 10px 24px;
            padding-bottom: 0px;
            justify-content: center;
          }
          .footer-text11 {
            color: #ffffff;
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
          .footer-links {
            gap: var(--dl-layout-space-twounits);
            height: auto;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer-column {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            overflow: hidden;
            align-items: flex-start;
          }
          .footer-link-list1 {
            width: 130px;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .footer-link10 {
            width: 230px;
            display: flex;
            padding: 8px 0;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .footer-text12 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            flex-grow: 1;
            font-size: 16px;
            font-style: normal;
            text-align: left;
            font-family: Open Sans;
            font-weight: 600px;
            line-height: 120%;
            font-stretch: normal;
            letter-spacing: 0em;
          }
          .footer-link11 {
            width: 230px;
            display: flex;
            padding: 8px 0;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .footer-text13 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            flex-grow: 1;
            font-size: 16px;
            font-style: normal;
            text-align: left;
            font-family: Open Sans;
            font-weight: 600px;
            line-height: 120%;
            font-stretch: normal;
            letter-spacing: 0em;
          }
          .footer-link12 {
            width: 230px;
            display: flex;
            padding: 8px 0;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .footer-text14 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            flex-grow: 1;
            font-size: 16px;
            font-style: normal;
            text-align: left;
            font-family: Open Sans;
            font-weight: 600px;
            line-height: 120%;
            font-stretch: normal;
            letter-spacing: 0em;
          }
          .footer-link13 {
            width: 230px;
            display: flex;
            padding: 8px 0;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .footer-text15 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            flex-grow: 1;
            font-size: 16px;
            font-style: normal;
            text-align: left;
            font-family: Open Sans;
            font-weight: 600px;
            line-height: 120%;
            font-stretch: normal;
            letter-spacing: 0em;
          }
          .footer-link14 {
            width: 230px;
            display: flex;
            padding: 8px 0;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .footer-text16 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            flex-grow: 1;
            font-size: 16px;
            font-style: normal;
            text-align: left;
            font-family: Open Sans;
            font-weight: 600px;
            line-height: 120%;
            font-stretch: normal;
            letter-spacing: 0em;
          }
          .footer-link-list2 {
            width: 138px;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .footer-link15 {
            display: flex;
            padding: 8px 0;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .footer-text17 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            flex-grow: 1;
            font-size: 16px;
            font-style: normal;
            text-align: left;
            font-family: Open Sans;
            font-weight: 600px;
            line-height: 120%;
            font-stretch: normal;
            letter-spacing: 0em;
          }
          .footer-link16 {
            display: flex;
            padding: 8px 0;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .footer-text18 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            flex-grow: 1;
            font-size: 16px;
            font-style: normal;
            text-align: left;
            font-family: Open Sans;
            font-weight: 600px;
            line-height: 120%;
            font-stretch: normal;
            letter-spacing: 0em;
          }
          .footer-link17 {
            display: flex;
            padding: 8px 0;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .footer-text19 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            flex-grow: 1;
            font-size: 16px;
            font-style: normal;
            text-align: left;
            font-family: Open Sans;
            font-weight: 600px;
            line-height: 120%;
            font-stretch: normal;
            letter-spacing: 0em;
          }
          .footer-link18 {
            display: flex;
            padding: 8px 0;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .footer-text20 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            flex-grow: 1;
            font-size: 16px;
            font-style: normal;
            text-align: left;
            font-family: Open Sans;
            font-weight: 600px;
            line-height: 120%;
            font-stretch: normal;
            letter-spacing: 0em;
          }
          .footer-link19 {
            display: flex;
            padding: 8px 0;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .footer-text21 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            flex-grow: 1;
            font-size: 16px;
            font-style: normal;
            text-align: left;
            font-family: Open Sans;
            font-weight: 600px;
            line-height: 120%;
            font-stretch: normal;
            letter-spacing: 0em;
          }
          .footer-social-links {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .footer-facebook {
            width: 24px;
            height: 24px;
          }
          .footer-instagram {
            width: 24px;
            height: 24px;
          }
          .footer-x {
            width: 24px;
            height: 24px;
          }
          .footer-linked-in {
            width: 24px;
            height: 24px;
          }
          .footer-youtube {
            width: 24px;
            height: 24px;
          }
          .footer-credits {
            gap: 32px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-row {
            gap: 64px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .footer-text22 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 14px;
            text-align: left;
            line-height: 120%;
          }
          .footer-footer-links {
            gap: 24px;
            display: flex;
            align-items: flex-start;
          }
          .footer-text23 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 14px;
            text-align: left;
            line-height: 120%;
          }
          .footer-text24 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 14px;
            text-align: left;
            line-height: 120%;
          }
          .footer-text25 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 14px;
            text-align: left;
            line-height: 120%;
          }
          .footer-text26 {
            display: inline-block;
          }
          .footer-text27 {
            display: inline-block;
          }
          .footer-text28 {
            display: inline-block;
          }
          .footer-text29 {
            display: inline-block;
          }
          .footer-text30 {
            display: inline-block;
          }
          .footer-text31 {
            display: inline-block;
          }
          .footer-text32 {
            display: inline-block;
          }
          .footer-text33 {
            display: inline-block;
          }
          .footer-text34 {
            display: inline-block;
          }
          .footer-text35 {
            display: inline-block;
          }
          .footer-text36 {
            display: inline-block;
          }
          .footer-text37 {
            color: #ffffff;
            width: 100%;
            display: inline-block;
            font-size: 48px;
            align-self: flex-start;
            text-align: left;
            font-family: 'Arimo';
            font-weight: 700;
            line-height: 120%;
            letter-spacing: 0.01em;
          }
          .footer-text41 {
            display: inline-block;
          }
          .footer-text42 {
            display: inline-block;
          }
          .footer-text43 {
            display: inline-block;
          }
          .footer-text44 {
            display: inline-block;
          }
          @media (max-width: 1600px) {
            .footer-text10 {
              font-family: Arimo;
            }
            .footer-links {
              justify-content: flex-start;
            }
            .footer-text37 {
              font-family: Arimo;
            }
          }
          @media (max-width: 1200px) {
            .footer-card {
              padding: var(--dl-layout-space-twounits);
            }
            .footer-content1 {
              align-items: flex-start;
              flex-direction: column;
            }
            .footer-content2 {
              gap: var(--dl-layout-space-twounits);
              width: 100%;
              height: auto;
            }
            .footer-brand-lepas {
              width: auto;
              height: 100%;
            }
            .footer-lepas {
              height: auto;
              position: static;
              min-height: 22px;
            }
            .footer-text10 {
              font-family: Arimo;
            }
            .footer-button {
              align-self: flex-start;
              min-height: 44px;
              align-items: flex-start;
              justify-content: center;
            }
            .footer-links {
              gap: var(--dl-layout-space-twounits);
              align-items: flex-start;
              justify-content: flex-start;
            }
            .footer-column {
              gap: var(--dl-layout-space-twounits);
            }
            .footer-social-links {
              gap: var(--dl-layout-space-unit);
            }
            .footer-text37 {
              font-family: Arimo;
            }
          }
          @media (max-width: 991px) {
            .footer-max-width {
              padding-top: var(--dl-layout-space-fiveunits);
              padding-left: var(--dl-layout-space-threeunits);
              padding-right: var(--dl-layout-space-threeunits);
              padding-bottom: var(--dl-layout-space-fiveunits);
            }
            .footer-content1 {
              flex-direction: column;
            }
            .footer-content2 {
              width: 100%;
            }
            .footer-lepas {
              top: 0px;
              left: 0px;
              right: 0px;
              scale: 0.8;
              bottom: 0px;
              height: auto;
              margin: auto;
              align-items: center;
            }
            .footer-vector1 {
              top: 0px;
              bottom: 0px;
              margin: auto;
            }
            .footer-vector2 {
              top: 0px;
              bottom: 0px;
              margin: auto;
            }
            .footer-vector3 {
              top: 0px;
              bottom: 0px;
              margin: auto;
            }
            .footer-vector4 {
              top: 0px;
              bottom: 0px;
              margin: auto;
            }
            .footer-vector5 {
              top: 0px;
              bottom: 0px;
              margin: auto;
            }
            .footer-vector6 {
              top: 0px;
              bottom: 0px;
              margin: auto;
            }
            .footer-text10 {
              color: #ffffff;
              font-size: 40px;
              font-family: Arimo;
              font-weight: 700;
              line-height: 120%;
              letter-spacing: 0.01em;
            }
            .footer-button {
              align-self: stretch;
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .footer-links {
              width: 100%;
              align-self: flex-start;
              align-items: flex-start;
            }
            .footer-text37 {
              color: #ffffff;
              font-size: 40px;
              font-family: Arimo;
              font-weight: 700;
              line-height: 120%;
              letter-spacing: 0.01em;
            }
          }
          @media (max-width: 767px) {
            .footer-max-width {
              padding-top: var(--dl-layout-space-fourunits);
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
              padding-bottom: var(--dl-layout-space-fourunits);
            }
            .footer-card {
              padding: var(--dl-layout-space-oneandhalfunits);
            }
            .footer-content2 {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .footer-brand-lepas {
              width: auto;
            }
            .footer-lepas {
              scale: 0.6;
            }
            .footer-text10 {
              font-size: 32px;
              text-align: left;
            }
            .footer-button {
              width: 100%;
              height: 40px;
              max-width: var(--dl-layout-size-large);
              min-width: var(--dl-layout-size-medium);
              align-self: flex-start;
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .footer-text11 {
              font-size: 16px;
            }
            .footer-links {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .footer-column {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .footer-text12 {
              font-size: 14px;
            }
            .footer-text13 {
              font-size: 14px;
            }
            .footer-text14 {
              font-size: 14px;
            }
            .footer-text15 {
              font-size: 14px;
            }
            .footer-text16 {
              font-size: 14px;
            }
            .footer-text17 {
              font-size: 14px;
            }
            .footer-text18 {
              font-size: 14px;
            }
            .footer-text19 {
              font-size: 14px;
            }
            .footer-text20 {
              font-size: 14px;
            }
            .footer-text21 {
              font-size: 14px;
            }
            .footer-text22 {
              font-size: 12px;
            }
            .footer-text23 {
              font-size: 12px;
            }
            .footer-text24 {
              font-size: 12px;
            }
            .footer-text25 {
              font-size: 12px;
            }
            .footer-text37 {
              font-size: 32px;
              text-align: left;
            }
          }
          @media (max-width: 479px) {
            .footer-max-width {
              padding-top: var(--dl-layout-space-threeunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .footer-brand-lepas {
              position: static;
              justify-content: flex-start;
            }
            .footer-lepas {
              width: 100%;
              height: 100%;
              position: static;
              align-self: flex-end;
              align-items: flex-start;
              justify-content: flex-start;
            }
            .footer-text10 {
              color: rgb(255, 255, 255);
              font-size: 26px;
              font-family: Arimo;
            }
            .footer-text11 {
              font-style: normal;
              font-family: Arimo;
              font-weight: 400;
            }
            .footer-row {
              gap: var(--dl-layout-space-oneandhalfunits);
              align-items: center;
              flex-direction: column;
              justify-content: flex-start;
            }
            .footer-text37 {
              color: rgb(255, 255, 255);
              font-size: 26px;
              font-family: Arimo;
            }
          }
        `}
      </style>
    </>
  )
}

Footer.defaultProps = {
  vectorSrc4: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  instagramSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  vectorSrc2: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  instagramAlt: 'Instagram8209',
  text13: undefined,
  text15: undefined,
  vectorAlt1: 'Vector8211',
  linkedInAlt: 'LinkedIn8209',
  vectorSrc: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  text4: undefined,
  facebookAlt: 'Facebook8209',
  vectorAlt2: 'Vector8211',
  xSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text9: undefined,
  text14: undefined,
  vectorAlt4: 'Vector8211',
  xAlt: 'X8209',
  text10: undefined,
  text12: undefined,
  vectorAlt5: 'Vector8211',
  text8: undefined,
  text2: undefined,
  text7: undefined,
  vectorSrc1: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  text5: undefined,
  facebookSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  youtubeSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text1: undefined,
  vectorSrc5: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  text6: undefined,
  text3: undefined,
  vectorSrc3: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  linkedInSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text: undefined,
  vectorAlt: 'Vector8211',
  text11: undefined,
  vectorAlt3: 'Vector8211',
  youtubeAlt: 'Youtube8209',
}

Footer.propTypes = {
  vectorSrc4: PropTypes.string,
  instagramSrc: PropTypes.string,
  vectorSrc2: PropTypes.string,
  instagramAlt: PropTypes.string,
  text13: PropTypes.element,
  text15: PropTypes.element,
  vectorAlt1: PropTypes.string,
  linkedInAlt: PropTypes.string,
  vectorSrc: PropTypes.string,
  text4: PropTypes.element,
  facebookAlt: PropTypes.string,
  vectorAlt2: PropTypes.string,
  xSrc: PropTypes.string,
  text9: PropTypes.element,
  text14: PropTypes.element,
  vectorAlt4: PropTypes.string,
  xAlt: PropTypes.string,
  text10: PropTypes.element,
  text12: PropTypes.element,
  vectorAlt5: PropTypes.string,
  text8: PropTypes.element,
  text2: PropTypes.element,
  text7: PropTypes.element,
  vectorSrc1: PropTypes.string,
  text5: PropTypes.element,
  facebookSrc: PropTypes.string,
  youtubeSrc: PropTypes.string,
  text1: PropTypes.element,
  vectorSrc5: PropTypes.string,
  text6: PropTypes.element,
  text3: PropTypes.element,
  vectorSrc3: PropTypes.string,
  linkedInSrc: PropTypes.string,
  text: PropTypes.element,
  vectorAlt: PropTypes.string,
  text11: PropTypes.element,
  vectorAlt3: PropTypes.string,
  youtubeAlt: PropTypes.string,
}

export default Footer
