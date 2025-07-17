import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Contacts = (props) => {
  return (
    <>
      <div className="contacts-contacts">
        <div className="contacts-max-width">
          <div className="contacts-container">
            <div className="contacts-content1">
              <div className="contacts-header">
                <div className="contacts-title">
                  <span className="contacts-text10">
                    {props.text ?? (
                      <Fragment>
                        <span className="contacts-text24">GET IN TOUCH</span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="contacts-description">
                  <span className="contacts-text11">
                    {props.text1 ?? (
                      <Fragment>
                        <span className="contacts-text22">
                          We’re here to assist you with any inquiries or
                          dealership information you may need. Whether you have
                          questions about our services, vehicle availability, or
                          financing options, our team is ready to help you every
                          step of the way.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
              <div className="contacts-row">
                <div className="contacts-content2">
                  <div className="contacts-icon1">
                    <img
                      alt={props.mailAlt}
                      src={props.mailSrc}
                      className="contacts-mail"
                    />
                  </div>
                  <div className="contacts-contact-info1">
                    <span className="contacts-text12">
                      {props.text2 ?? (
                        <Fragment>
                          <span className="contacts-text18">Email</span>
                        </Fragment>
                      )}
                    </span>
                    <span className="contacts-text13">
                      {props.text3 ?? (
                        <Fragment>
                          <span className="contacts-text25">
                            contact@lepas.com
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <div className="contacts-content3">
                  <div className="contacts-icon2">
                    <img
                      alt={props.callAlt}
                      src={props.callSrc}
                      className="contacts-call"
                    />
                  </div>
                  <div className="contacts-contact-info2">
                    <span className="contacts-text14">
                      {props.text4 ?? (
                        <Fragment>
                          <span className="contacts-text20">Phone</span>
                        </Fragment>
                      )}
                    </span>
                    <span className="contacts-text15">
                      {props.text5 ?? (
                        <Fragment>
                          <span className="contacts-text23">
                            +1 (555) 123-4567
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <div className="contacts-content4">
                  <div className="contacts-icon3">
                    <img
                      alt={props.locationonAlt}
                      src={props.locationonSrc}
                      className="contacts-locationon"
                    />
                  </div>
                  <div className="contacts-contact-info3">
                    <span className="contacts-text16">
                      {props.text6 ?? (
                        <Fragment>
                          <span className="contacts-text21">Office</span>
                        </Fragment>
                      )}
                    </span>
                    <span className="contacts-text17">
                      {props.text7 ?? (
                        <Fragment>
                          <span className="contacts-text19">
                            456 Innovation Ave, Melbourne VIC 3000 AU
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="contacts-thumbnail">
              <img
                alt={props.imageAlt}
                src={props.imageSrc}
                className="contacts-image"
              />
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .contacts-contacts {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            justify-content: center;
          }
          .contacts-max-width {
            gap: 80px;
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
            background-color: rgba(255, 255, 255, 1);
          }
          .contacts-container {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contacts-content1 {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: center;
          }
          .contacts-header {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .contacts-title {
            gap: 16px;
            flex: 1;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .contacts-text10 {
            color: rgb(12, 9, 2);
            width: 100%;
            font-size: 48px;
            align-self: flex-start;
            text-align: left;
            font-family: 'Arimo';
            font-weight: 700;
            line-height: 120%;
            letter-spacing: 0.01em;
          }
          .contacts-description {
            gap: 24px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contacts-text11 {
            color: rgb(12, 9, 2);
            height: auto;
            font-size: 18px;
            align-self: stretch;
            font-style: normal;
            text-align: left;
            font-family: 'Open Sans';
            font-weight: 400px;
            line-height: 160%;
            font-stretch: normal;
            letter-spacing: 0em;
          }
          .contacts-row {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 500px;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            padding-top: 0px;
            padding-left: 8px 0;
            padding-right: 8px 0;
            flex-direction: column;
            padding-bottom: 0px;
          }
          .contacts-content2 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .contacts-icon1 {
            gap: 10px;
            height: 32px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
          }
          .contacts-mail {
            width: 24px;
            height: 24px;
          }
          .contacts-contact-info1 {
            gap: 8px;
            width: 460px;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .contacts-text12 {
            color: rgb(12, 9, 2);
            height: auto;
            font-size: 24px;
            align-self: stretch;
            font-style: normal;
            text-align: left;
            font-family: 'Open Sans';
            font-weight: 500;
            line-height: 120%;
            font-stretch: normal;
            letter-spacing: 0.01em;
          }
          .contacts-text13 {
            color: rgb(12, 9, 2);
            height: auto;
            font-size: 18px;
            align-self: stretch;
            font-style: normal;
            text-align: left;
            font-family: 'Open Sans';
            line-height: 160%;
            letter-spacing: 0em;
          }
          .contacts-content3 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .contacts-icon2 {
            gap: 10px;
            height: 32px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
          }
          .contacts-call {
            width: 24px;
            height: 24px;
          }
          .contacts-contact-info2 {
            gap: 8px;
            width: 460px;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .contacts-text14 {
            color: #0c0902;
            height: auto;
            font-size: 24px;
            align-self: stretch;
            font-style: normal;
            text-align: left;
            font-family: 'Open Sans';
            font-weight: 500;
            line-height: 120%;
            letter-spacing: 0.01em;
          }
          .contacts-text15 {
            color: #0c0902;
            height: auto;
            font-size: 18px;
            align-self: stretch;
            font-style: normal;
            text-align: left;
            font-family: 'Open Sans';
            line-height: 160%;
            letter-spacing: 0em;
          }
          .contacts-content4 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .contacts-icon3 {
            gap: 10px;
            height: 32px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
          }
          .contacts-locationon {
            width: 24px;
            height: 24px;
          }
          .contacts-contact-info3 {
            gap: 8px;
            width: 460px;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .contacts-text16 {
            color: rgb(12, 9, 2);
            height: auto;
            font-size: 24px;
            align-self: stretch;
            font-style: normal;
            text-align: left;
            font-family: 'Open Sans';
            font-weight: 500;
            line-height: 120%;
            letter-spacing: 0.01em;
          }
          .contacts-text17 {
            color: rgb(12, 9, 2);
            height: auto;
            font-size: 18px;
            align-self: stretch;
            font-style: normal;
            text-align: left;
            font-family: 'Open Sans';
            line-height: 160%;
            letter-spacing: 0em;
          }
          .contacts-thumbnail {
            gap: 10px;
            width: 100%;
            height: 600px;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 32px;
            flex-direction: column;
            justify-content: flex-end;
            background-color: #d9d9d9;
          }
          .contacts-image {
            width: 100%;
            height: 100%;
          }
          .contacts-text18 {
            display: inline-block;
          }
          .contacts-text19 {
            display: inline-block;
          }
          .contacts-text20 {
            display: inline-block;
          }
          .contacts-text21 {
            display: inline-block;
          }
          .contacts-text22 {
            display: inline-block;
          }
          .contacts-text23 {
            display: inline-block;
          }
          .contacts-text24 {
            display: inline-block;
          }
          .contacts-text25 {
            display: inline-block;
          }
          @media (max-width: 1600px) {
            .contacts-text10 {
              font-family: Arimo;
            }
          }
          @media (max-width: 1200px) {
            .contacts-text10 {
              font-family: Arimo;
            }
            .contacts-content2 {
              gap: var(--dl-layout-space-unit);
            }
            .contacts-contact-info1 {
              gap: var(--dl-layout-space-halfunit);
            }
            .contacts-content3 {
              gap: var(--dl-layout-space-unit);
            }
            .contacts-content4 {
              gap: var(--dl-layout-space-unit);
            }
            .contacts-contact-info3 {
              gap: var(--dl-layout-space-halfunit);
            }
          }
          @media (max-width: 991px) {
            .contacts-max-width {
              padding-top: var(--dl-layout-space-fiveunits);
              padding-left: var(--dl-layout-space-threeunits);
              padding-right: var(--dl-layout-space-threeunits);
              padding-bottom: var(--dl-layout-space-fiveunits);
            }
            .contacts-container {
              gap: var(--dl-layout-space-twounits);
            }
            .contacts-content1 {
              gap: var(--dl-layout-space-twounits);
            }
            .contacts-header {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .contacts-text10 {
              color: rgb(12, 9, 2);
              font-size: 40px;
              font-family: Arimo;
              font-weight: 700;
              line-height: 120%;
              letter-spacing: 0.01em;
            }
            .contacts-text12 {
              font-size: 24px;
            }
            .contacts-text14 {
              font-size: 24px;
            }
            .contacts-text16 {
              font-size: 24px;
            }
          }
          @media (max-width: 767px) {
            .contacts-max-width {
              padding-top: var(--dl-layout-space-fourunits);
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
              padding-bottom: var(--dl-layout-space-fourunits);
            }
            .contacts-container {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .contacts-content1 {
              gap: var(--dl-layout-space-oneandhalfunits);
              flex-direction: column;
            }
            .contacts-header {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .contacts-title {
              justify-content: center;
            }
            .contacts-text10 {
              font-size: 32px;
              text-align: left;
            }
            .contacts-text11 {
              font-size: 16px;
            }
            .contacts-row {
              width: 100%;
            }
            .contacts-text12 {
              font-size: 20px;
            }
            .contacts-text13 {
              font-size: 16px;
            }
            .contacts-text14 {
              font-size: 20px;
            }
            .contacts-text15 {
              font-size: 16px;
            }
            .contacts-text16 {
              font-size: 20px;
            }
            .contacts-text17 {
              font-size: 16px;
            }
            .contacts-thumbnail {
              height: 500px;
            }
          }
          @media (max-width: 479px) {
            .contacts-max-width {
              padding-top: var(--dl-layout-space-threeunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .contacts-header {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .contacts-text10 {
              font-size: 26px;
            }
            .contacts-thumbnail {
              height: 300px;
            }
          }
        `}
      </style>
    </>
  )
}

Contacts.defaultProps = {
  locationonAlt: 'locationon8209',
  callAlt: 'call8209',
  text2: undefined,
  locationonSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  callSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text7: undefined,
  text4: undefined,
  text6: undefined,
  text1: undefined,
  text5: undefined,
  imageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  mailAlt: 'mail8209',
  text: undefined,
  imageAlt: 'aboutus18320',
  text3: undefined,
  mailSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
}

Contacts.propTypes = {
  locationonAlt: PropTypes.string,
  callAlt: PropTypes.string,
  text2: PropTypes.element,
  locationonSrc: PropTypes.string,
  callSrc: PropTypes.string,
  text7: PropTypes.element,
  text4: PropTypes.element,
  text6: PropTypes.element,
  text1: PropTypes.element,
  text5: PropTypes.element,
  imageSrc: PropTypes.string,
  mailAlt: PropTypes.string,
  text: PropTypes.element,
  imageAlt: PropTypes.string,
  text3: PropTypes.element,
  mailSrc: PropTypes.string,
}

export default Contacts
