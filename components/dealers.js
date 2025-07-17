import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Dealers = (props) => {
  return (
    <>
      <div className="dealers-dealers">
        <div className="dealers-max-width">
          <div className="dealers-container1">
            <div className="dealers-tabs-menu">
              <div className="dealers-header">
                <div className="dealers-title">
                  <span className="dealers-text10">
                    {props.text ?? (
                      <Fragment>
                        <span className="dealers-text30">
                          DISCOVER THE FUTURE OF DRIVING WITH THE LEPAS MODEL.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="dealers-description">
                  <span className="dealers-text11">
                    {props.text1 ?? (
                      <Fragment>
                        <span className="dealers-text29">
                          Discover where to buy the exciting LEPAS L8 and
                          experience its innovative features.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="dealers-container2">
                  <iframe
                    src="https://www.google.com/maps?q=2880 Broadway, New York;&amp;output=embed"
                    className="dealers-google-maps1"
                  ></iframe>
                </div>
              </div>
              <div className="dealers-container3">
                <div className="dealers-tabs">
                  <div className="dealers-tab-horizontal1">
                    <div className="dealers-content1">
                      <span className="dealers-text12">
                        {props.text2 ?? (
                          <Fragment>
                            <span className="dealers-text24">Kota Tua</span>
                          </Fragment>
                        )}
                      </span>
                      <span className="dealers-text13">
                        {props.text3 ?? (
                          <Fragment>
                            <span className="dealers-text28">
                              123 Sample Street, a charming neighborhood in New
                              York, NY 10000, USA, is known for its vibrant
                              atmosphere and friendly locals.
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <button type="button" className="dealers-button1">
                      <span className="dealers-text14">
                        {props.text4 ?? (
                          <Fragment>
                            <span className="dealers-text31">SEE ON MAP</span>
                          </Fragment>
                        )}
                      </span>
                    </button>
                  </div>
                  <div className="dealers-tab-horizontal2">
                    <div className="dealers-content2">
                      <span className="dealers-text15">
                        {props.text5 ?? (
                          <Fragment>
                            <span className="dealers-text23">Cilandak</span>
                          </Fragment>
                        )}
                      </span>
                      <span className="dealers-text16">
                        {props.text6 ?? (
                          <Fragment>
                            <span className="dealers-text27">
                              123 Sample Street, Sydney, New South Wales 2000,
                              Australia is a vibrant location known for its
                              beautiful scenery and bustling atmosphere.
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <button type="button" className="dealers-button2">
                      <span className="dealers-text17">
                        {props.text7 ?? (
                          <Fragment>
                            <span className="dealers-text25">SEE ON MAP</span>
                          </Fragment>
                        )}
                      </span>
                    </button>
                  </div>
                  <div className="dealers-tab-horizontal3">
                    <div className="dealers-content3">
                      <span className="dealers-text18">
                        {props.text8 ?? (
                          <Fragment>
                            <span className="dealers-text26">Kemang</span>
                          </Fragment>
                        )}
                      </span>
                      <span className="dealers-text19">
                        {props.text9 ?? (
                          <Fragment>
                            <span className="dealers-text22">
                              123 Sample Street, located in the bustling heart
                              of London W1C 1DE, United Kingdom, offers a unique
                              blend of history and modernity, making it a
                              must-visit destination.
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <button type="button" className="dealers-button3">
                      <span className="dealers-text20">
                        {props.text10 ?? (
                          <Fragment>
                            <span className="dealers-text21">SEE ON MAP</span>
                          </Fragment>
                        )}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="dealers-container4">
              <iframe
                src="https://www.google.com/maps?q=2880 Broadway, New York;&amp;output=embed"
                className="dealers-google-maps2"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .dealers-dealers {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            justify-content: center;
          }
          .dealers-max-width {
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
          .dealers-container1 {
            gap: var(--dl-layout-space-threeunits);
            height: 902px;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: row;
          }
          .dealers-tabs-menu {
            gap: var(--dl-layout-space-threeunits);
            width: 500px;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: flex-start;
          }
          .dealers-header {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .dealers-title {
            gap: 16px;
            flex: 1;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .dealers-text10 {
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
          .dealers-description {
            gap: 24px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .dealers-text11 {
            color: rgba(12, 9, 2, 1);
            height: auto;
            font-size: 18px;
            align-self: stretch;
            font-style: normal;
            text-align: left;
            font-family: Open Sans;
            font-weight: 400px;
            line-height: 160.0000023841858%;
            font-stretch: normal;
            letter-spacing: 0em;
          }
          .dealers-container2 {
            flex: 1;
            width: 100%;
            height: 100%;
            display: none;
            overflow: hidden;
            align-items: flex-start;
            grid-row-end: 3;
            border-radius: 32px;
            flex-direction: row;
            grid-row-start: 2;
          }
          .dealers-google-maps1 {
            width: 100%;
            height: 100%;
            display: flex;
            overflow: visible;
            min-width: 100%;
          }
          .dealers-container3 {
            height: auto;
            display: flex;
            align-self: stretch;
            overflow-y: scroll;
            align-items: flex-start;
            flex-direction: column;
            scrollbar-width: none;
          }
          .dealers-tabs {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            height: auto;
            display: flex;
            padding: var(--dl-layout-space-twounits);
            overflow: hidden;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 40px;
            flex-direction: column;
            background-color: rgba(242, 242, 242, 1);
          }
          .dealers-tab-horizontal1 {
            gap: 24px;
            display: flex;
            padding: var(--dl-layout-space-twounits);
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            border-radius: 32px;
            flex-direction: column;
            justify-content: center;
            background-color: #ffff;
          }
          .dealers-content1 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .dealers-text12 {
            color: rgba(12, 9, 2, 1);
            height: auto;
            font-size: 24px;
            align-self: stretch;
            font-style: normal;
            text-align: left;
            font-family: Arimo;
            font-weight: 700;
            line-height: 120.00000476837158%;
            font-stretch: normal;
            letter-spacing: 0.01em;
          }
          .dealers-text13 {
            color: rgba(12, 9, 2, 1);
            height: auto;
            font-size: 18px;
            align-self: stretch;
            font-style: normal;
            text-align: left;
            font-family: Open Sans;
            font-weight: 400px;
            line-height: 160.0000023841858%;
            font-stretch: normal;
            letter-spacing: 0em;
          }
          .dealers-button1 {
            flex: 1;
            height: auto;
            display: flex;
            max-width: var(--dl-layout-size-xxlarge);
            min-width: var(--dl-layout-size-large);
            box-sizing: content-box;
            min-height: 44px;
            padding-top: 0px;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            padding-left: 10px 24px;
            border-radius: 6px;
            padding-right: 10px 24px;
            padding-bottom: 0px;
            justify-content: center;
            background-color: var(--dl-color-theme-secondary1);
          }
          .dealers-text14 {
            color: rgb(12, 9, 2);
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
          .dealers-tab-horizontal2 {
            gap: 24px;
            display: flex;
            padding: var(--dl-layout-space-twounits);
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            border-radius: 32px;
            flex-direction: column;
            justify-content: center;
            background-color: #ffff;
          }
          .dealers-content2 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .dealers-text15 {
            color: rgba(12, 9, 2, 1);
            height: auto;
            font-size: 24px;
            align-self: stretch;
            font-style: normal;
            text-align: left;
            font-family: Arimo;
            font-weight: 700;
            line-height: 120.00000476837158%;
            font-stretch: normal;
            letter-spacing: 0.01em;
          }
          .dealers-text16 {
            color: rgba(12, 9, 2, 1);
            height: auto;
            font-size: 18px;
            align-self: stretch;
            font-style: normal;
            text-align: left;
            font-family: Open Sans;
            font-weight: 400px;
            line-height: 160.0000023841858%;
            font-stretch: normal;
            letter-spacing: 0em;
          }
          .dealers-button2 {
            flex: 1;
            height: auto;
            display: flex;
            max-width: var(--dl-layout-size-xxlarge);
            min-width: var(--dl-layout-size-large);
            box-sizing: content-box;
            min-height: 44px;
            padding-top: 0px;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            padding-left: 10px 24px;
            border-radius: 6px;
            padding-right: 10px 24px;
            padding-bottom: 0px;
            justify-content: center;
            background-color: var(--dl-color-theme-secondary1);
          }
          .dealers-text17 {
            color: rgb(12, 9, 2);
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
          .dealers-tab-horizontal3 {
            gap: 24px;
            display: flex;
            padding: var(--dl-layout-space-twounits);
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            border-radius: 32px;
            flex-direction: column;
            justify-content: center;
            background-color: #ffff;
          }
          .dealers-content3 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .dealers-text18 {
            color: rgba(12, 9, 2, 1);
            height: auto;
            font-size: 24px;
            align-self: stretch;
            font-style: normal;
            text-align: left;
            font-family: Arimo;
            font-weight: 700;
            line-height: 120.00000476837158%;
            font-stretch: normal;
            letter-spacing: 0.01em;
          }
          .dealers-text19 {
            color: rgba(12, 9, 2, 1);
            height: auto;
            font-size: 18px;
            align-self: stretch;
            font-style: normal;
            text-align: left;
            font-family: Open Sans;
            font-weight: 400px;
            line-height: 160.0000023841858%;
            font-stretch: normal;
            letter-spacing: 0em;
          }
          .dealers-button3 {
            flex: 1;
            height: auto;
            display: flex;
            max-width: var(--dl-layout-size-xxlarge);
            min-width: var(--dl-layout-size-large);
            box-sizing: content-box;
            min-height: 44px;
            padding-top: 0px;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            padding-left: 10px 24px;
            border-radius: 6px;
            padding-right: 10px 24px;
            padding-bottom: 0px;
            justify-content: center;
            background-color: var(--dl-color-theme-secondary1);
          }
          .dealers-text20 {
            color: rgb(12, 9, 2);
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
          .dealers-container4 {
            flex: 1;
            width: 100%;
            height: 100%;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            grid-row-end: 3;
            border-radius: 32px;
            flex-direction: row;
            grid-row-start: 2;
          }
          .dealers-google-maps2 {
            width: 100%;
            height: 100%;
            display: flex;
            overflow: visible;
            min-width: 100%;
          }
          .dealers-text21 {
            display: inline-block;
          }
          .dealers-text22 {
            display: inline-block;
          }
          .dealers-text23 {
            display: inline-block;
          }
          .dealers-text24 {
            display: inline-block;
          }
          .dealers-text25 {
            display: inline-block;
          }
          .dealers-text26 {
            display: inline-block;
          }
          .dealers-text27 {
            display: inline-block;
          }
          .dealers-text28 {
            display: inline-block;
          }
          .dealers-text29 {
            display: inline-block;
          }
          .dealers-text30 {
            display: inline-block;
          }
          .dealers-text31 {
            display: inline-block;
          }
          @media (max-width: 1600px) {
            .dealers-text10 {
              font-family: Arimo;
            }
          }
          @media (max-width: 1200px) {
            .dealers-text10 {
              font-family: Arimo;
            }
            .dealers-text12 {
              font-size: 24px;
              font-style: normal;
              font-family: Open Sans;
              font-weight: 700;
            }
            .dealers-text15 {
              font-size: 24px;
              font-style: normal;
              font-family: Open Sans;
              font-weight: 700;
            }
            .dealers-text18 {
              font-size: 24px;
              font-style: normal;
              font-family: Open Sans;
              font-weight: 700;
            }
          }
          @media (max-width: 991px) {
            .dealers-max-width {
              padding-top: var(--dl-layout-space-fiveunits);
              padding-left: var(--dl-layout-space-threeunits);
              padding-right: var(--dl-layout-space-threeunits);
              padding-bottom: var(--dl-layout-space-fiveunits);
            }
            .dealers-tabs-menu {
              width: 400px;
            }
            .dealers-text10 {
              color: rgb(12, 9, 2);
              font-size: 40px;
              font-family: Arimo;
              font-weight: 700;
              line-height: 120%;
              letter-spacing: 0.01em;
            }
            .dealers-tabs {
              gap: var(--dl-layout-space-twounits);
              padding: var(--dl-layout-space-oneandhalfunits);
            }
            .dealers-tab-horizontal1 {
              padding: var(--dl-layout-space-twounits);
            }
            .dealers-button1 {
              align-self: flex-start;
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .dealers-tab-horizontal2 {
              padding: var(--dl-layout-space-twounits);
            }
            .dealers-button2 {
              align-self: flex-start;
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .dealers-tab-horizontal3 {
              padding: var(--dl-layout-space-twounits);
            }
            .dealers-button3 {
              align-self: flex-start;
              padding-top: 0px;
              padding-bottom: 0px;
            }
          }
          @media (max-width: 767px) {
            .dealers-max-width {
              height: 100%;
              padding-top: var(--dl-layout-space-fourunits);
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
              padding-bottom: var(--dl-layout-space-fourunits);
              justify-content: flex-start;
            }
            .dealers-container1 {
              flex-direction: column-reverse;
              justify-content: flex-start;
            }
            .dealers-tabs-menu {
              width: 100%;
            }
            .dealers-header {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .dealers-title {
              justify-content: center;
            }
            .dealers-text10 {
              font-size: 32px;
              text-align: left;
            }
            .dealers-text11 {
              font-size: 16px;
            }
            .dealers-container2 {
              flex: 0 0 auto;
              height: 300px;
              display: flex;
            }
            .dealers-container3 {
              border-radius: 32px;
            }
            .dealers-tabs {
              gap: var(--dl-layout-space-oneandhalfunits);
              padding: var(--dl-layout-space-oneandhalfunits);
            }
            .dealers-tab-horizontal1 {
              padding: var(--dl-layout-space-oneandhalfunits);
            }
            .dealers-text12 {
              font-size: 20px;
            }
            .dealers-text13 {
              font-size: 16px;
            }
            .dealers-button1 {
              height: 40px;
              align-self: flex-start;
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .dealers-text14 {
              font-size: 16px;
            }
            .dealers-tab-horizontal2 {
              padding: var(--dl-layout-space-oneandhalfunits);
            }
            .dealers-text15 {
              font-size: 20px;
            }
            .dealers-text16 {
              font-size: 16px;
            }
            .dealers-button2 {
              height: 40px;
              align-self: flex-start;
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .dealers-text17 {
              font-size: 16px;
            }
            .dealers-tab-horizontal3 {
              padding: var(--dl-layout-space-oneandhalfunits);
            }
            .dealers-text18 {
              font-size: 20px;
            }
            .dealers-text19 {
              font-size: 16px;
            }
            .dealers-button3 {
              height: 40px;
              align-self: flex-start;
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .dealers-text20 {
              font-size: 16px;
            }
            .dealers-container4 {
              height: 600px;
              display: none;
            }
          }
          @media (max-width: 479px) {
            .dealers-max-width {
              padding-top: var(--dl-layout-space-threeunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .dealers-container1 {
              justify-content: center;
            }
            .dealers-tabs-menu {
              display: flex;
              justify-content: flex-start;
            }
            .dealers-text10 {
              font-size: 26px;
            }
            .dealers-container2 {
              flex: 0 0 auto;
              height: 200px;
            }
            .dealers-google-maps1 {
              height: 100%;
            }
            .dealers-container4 {
              flex: 0 0 auto;
              height: 400px;
            }
            .dealers-google-maps2 {
              height: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Dealers.defaultProps = {
  text10: undefined,
  text9: undefined,
  text5: undefined,
  text2: undefined,
  text7: undefined,
  text8: undefined,
  text6: undefined,
  text3: undefined,
  text1: undefined,
  text: undefined,
  text4: undefined,
}

Dealers.propTypes = {
  text10: PropTypes.element,
  text9: PropTypes.element,
  text5: PropTypes.element,
  text2: PropTypes.element,
  text7: PropTypes.element,
  text8: PropTypes.element,
  text6: PropTypes.element,
  text3: PropTypes.element,
  text1: PropTypes.element,
  text: PropTypes.element,
  text4: PropTypes.element,
}

export default Dealers
