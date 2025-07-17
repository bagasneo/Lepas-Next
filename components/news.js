import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const News = (props) => {
  return (
    <>
      <div className="news-news">
        <div className="news-max-width">
          <div className="news-container1">
            <div className="news-header">
              <div className="news-title">
                <span className="news-text10">
                  {props.text ?? (
                    <Fragment>
                      <span className="news-text30">LEPAS HIGHLIGHTS</span>
                    </Fragment>
                  )}
                </span>
              </div>
              <button type="button" className="news-button">
                <span className="news-text11">
                  {props.text1 ?? (
                    <Fragment>
                      <span className="news-text33">VIEW ALL</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
            <div className="news-content1">
              <div className="news-row">
                <div className="news-card1">
                  <div className="news-thumbnail1">
                    <img
                      alt={props.placeholderImageAlt}
                      src={props.placeholderImageSrc}
                      className="news-placeholder-image"
                    />
                  </div>
                  <div className="news-container2">
                    <div className="news-content2">
                      <div className="news-info1">
                        <div className="news-tag1">
                          <span className="news-text12">
                            {props.text11 ?? (
                              <Fragment>
                                <span className="news-text35">News</span>
                              </Fragment>
                            )}
                          </span>
                        </div>
                        <span className="news-text13">
                          {props.text2 ?? (
                            <Fragment>
                              <span className="news-text31">5 min read</span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                      <div className="news-content3">
                        <span className="news-text14">
                          {props.text3 ?? (
                            <Fragment>
                              <span className="news-text24">
                                LEPAS: L8 Takes Off First Shipment to
                                International Markets
                              </span>
                            </Fragment>
                          )}
                        </span>
                        <span className="news-text15">
                          {props.text4 ?? (
                            <Fragment>
                              <span className="news-text29">
                                Transform your journeys into exquisite
                                experiences worth cherishing.
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="news-card2">
                  <div className="news-thumbnail2">
                    <img
                      alt={props.imageAlt}
                      src={props.imageSrc}
                      className="news-image1"
                    />
                  </div>
                  <div className="news-container3">
                    <div className="news-content4">
                      <div className="news-info2">
                        <div className="news-tag2">
                          <span className="news-text16">
                            {props.text12 ?? (
                              <Fragment>
                                <span className="news-text28">News</span>
                              </Fragment>
                            )}
                          </span>
                        </div>
                        <span className="news-text17">
                          {props.text5 ?? (
                            <Fragment>
                              <span className="news-text27">5 min read</span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                      <div className="news-content5">
                        <span className="news-text18">
                          {props.text6 ?? (
                            <Fragment>
                              <span className="news-text25">
                                LEPAS: More Than a Name, It’s a Movement
                              </span>
                            </Fragment>
                          )}
                        </span>
                        <span className="news-text19">
                          {props.text7 ?? (
                            <Fragment>
                              <span className="news-text26">
                                Explore how technology enhances your driving
                                experience with LEPAS.
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="news-card3">
                  <div className="news-thumbnail3">
                    <img
                      alt={props.imageAlt1}
                      src={props.imageSrc1}
                      className="news-image2"
                    />
                  </div>
                  <div className="news-container4">
                    <div className="news-content6">
                      <div className="news-info3">
                        <div className="news-tag3">
                          <span className="news-text20">
                            {props.text13 ?? (
                              <Fragment>
                                <span className="news-text36">News</span>
                              </Fragment>
                            )}
                          </span>
                        </div>
                        <span className="news-text21">
                          {props.text8 ?? (
                            <Fragment>
                              <span className="news-text32">5 min read</span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                      <div className="news-content7">
                        <span className="news-text22">
                          {props.text9 ?? (
                            <Fragment>
                              <span className="news-text37">
                                Chery’s Next Leap: LEPAS Takes the Brand to New
                                Heights
                              </span>
                            </Fragment>
                          )}
                        </span>
                        <span className="news-text23">
                          {props.text10 ?? (
                            <Fragment>
                              <span className="news-text34">
                                Discover the elegance and innovation behind
                                LEPAS&apos;s design philosophy.
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
            <div className="news-content8">
              <div className="news-slider-dots">
                <img
                  alt={props.dotAlt}
                  src={props.dotSrc}
                  className="news-dot1"
                />
                <img
                  alt={props.dotAlt1}
                  src={props.dotSrc1}
                  className="news-dot2"
                />
              </div>
              <button className="news-slider-buttons">
                <div className="news-slider-arrow1">
                  <img
                    alt={props.arrowbackAlt}
                    src={props.arrowbackSrc}
                    className="news-arrowback"
                  />
                </div>
                <div className="news-slider-arrow2">
                  <img
                    alt={props.arrowforwardAlt}
                    src={props.arrowforwardSrc}
                    className="news-arrowforward"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .news-news {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            justify-content: center;
          }
          .news-max-width {
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
          .news-container1 {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .news-header {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .news-title {
            gap: 16px;
            width: auto;
            display: flex;
            flex-wrap: wrap;
            align-self: stretch;
            align-items: center;
            flex-direction: row;
          }
          .news-text10 {
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
          .news-button {
            height: 44px;
            display: flex;
            max-width: var(--dl-layout-size-xxlarge);
            min-width: var(--dl-layout-size-large);
            align-self: center;
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
          .news-text11 {
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
          .news-content1 {
            gap: 64px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .news-row {
            gap: var(--dl-layout-space-threeunits);
            display: grid;
            align-self: stretch;
            flex-shrink: 0;
            grid-template-rows: 1fr;
            grid-template-columns: 1fr 1fr 1fr;
          }
          .news-card1 {
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-self: stretch;
            box-sizing: content-box;
            align-items: flex-start;
            border-color: rgba(12, 9, 2, 0.15000000596046448);
            border-style: solid;
            border-width: 1px;
            border-radius: 32px;
            flex-direction: column;
            justify-content: flex-start;
            background-color: rgba(255, 255, 255, 1);
          }
          .news-thumbnail1 {
            width: 100%;
            height: 300px;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            border-radius: 32px;
            flex-direction: column;
          }
          .news-placeholder-image {
            width: 100%;
            height: 100%;
            align-self: stretch;
            object-fit: cover;
          }
          .news-container2 {
            gap: 24px;
            display: flex;
            padding: var(--dl-layout-space-twounits);
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .news-content2 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .news-info1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
          }
          .news-tag1 {
            height: 32px;
            display: flex;
            padding: 4px 10px;
            align-items: flex-start;
            border-color: rgba(12, 9, 2, 0.15000000596046448);
            border-style: solid;
            border-width: 1px;
            border-radius: 4px;
            background-color: rgba(255, 255, 255, 0);
          }
          .news-text12 {
            color: rgba(12, 9, 2, 1);
            height: auto;
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: left;
            font-family: Open Sans;
            font-weight: 600px;
            line-height: 120%;
            font-stretch: normal;
            letter-spacing: 0em;
          }
          .news-text13 {
            color: rgba(12, 9, 2, 1);
            height: auto;
            font-size: 16px;
            font-style: normal;
            text-align: left;
            font-family: Open Sans;
            font-weight: 600px;
            line-height: 120%;
            font-stretch: normal;
            letter-spacing: 0em;
          }
          .news-content3 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .news-text14 {
            color: rgba(12, 9, 2, 1);
            height: auto;
            font-size: 24px;
            align-self: stretch;
            font-style: normal;
            text-align: left;
            font-family: Arimo;
            font-weight: 500;
            line-height: 120.00000476837158%;
            font-stretch: normal;
            letter-spacing: 0.01em;
          }
          .news-text15 {
            color: rgba(12, 9, 2, 1);
            height: auto;
            font-size: 18px;
            align-self: stretch;
            font-style: normal;
            text-align: left;
            font-family: Open Sans;
            font-weight: 400px;
            line-height: 120%;
            font-stretch: normal;
            letter-spacing: 0em;
          }
          .news-card2 {
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-self: stretch;
            box-sizing: content-box;
            align-items: flex-start;
            border-color: rgba(12, 9, 2, 0.15000000596046448);
            border-style: solid;
            border-width: 1px;
            border-radius: 32px;
            flex-direction: column;
            justify-content: flex-start;
            background-color: rgba(255, 255, 255, 1);
          }
          .news-thumbnail2 {
            width: 100%;
            height: 300px;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            border-radius: 32px;
            flex-direction: column;
          }
          .news-image1 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .news-container3 {
            gap: 24px;
            display: flex;
            padding: var(--dl-layout-space-twounits);
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .news-content4 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .news-info2 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
          }
          .news-tag2 {
            height: 32px;
            display: flex;
            padding: 4px 10px;
            align-items: flex-start;
            border-color: rgba(12, 9, 2, 0.15000000596046448);
            border-style: solid;
            border-width: 1px;
            border-radius: 4px;
            background-color: rgba(255, 255, 255, 0);
          }
          .news-text16 {
            color: rgba(12, 9, 2, 1);
            height: auto;
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: left;
            font-family: Open Sans;
            font-weight: 600px;
            line-height: 120%;
            font-stretch: normal;
            letter-spacing: 0em;
          }
          .news-text17 {
            color: rgba(12, 9, 2, 1);
            height: auto;
            font-size: 16px;
            font-style: normal;
            text-align: left;
            font-family: Open Sans;
            font-weight: 600px;
            line-height: 120%;
            font-stretch: normal;
            letter-spacing: 0em;
          }
          .news-content5 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .news-text18 {
            color: rgba(12, 9, 2, 1);
            height: auto;
            font-size: 24px;
            align-self: stretch;
            font-style: normal;
            text-align: left;
            font-family: Arimo;
            font-weight: 500;
            line-height: 120.00000476837158%;
            font-stretch: normal;
            letter-spacing: 0.01em;
          }
          .news-text19 {
            color: rgba(12, 9, 2, 1);
            height: auto;
            font-size: 18px;
            align-self: stretch;
            font-style: normal;
            text-align: left;
            font-family: Open Sans;
            font-weight: 400px;
            line-height: 120%;
            font-stretch: normal;
            letter-spacing: 0em;
          }
          .news-card3 {
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-self: stretch;
            box-sizing: content-box;
            align-items: flex-start;
            border-color: rgba(12, 9, 2, 0.15000000596046448);
            border-style: solid;
            border-width: 1px;
            border-radius: 32px;
            flex-direction: column;
            justify-content: flex-start;
            background-color: rgba(255, 255, 255, 1);
          }
          .news-thumbnail3 {
            width: 100%;
            height: 300px;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            border-radius: 32px;
            flex-direction: column;
          }
          .news-image2 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .news-container4 {
            gap: 24px;
            display: flex;
            padding: var(--dl-layout-space-twounits);
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .news-content6 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .news-info3 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
          }
          .news-tag3 {
            height: 32px;
            display: flex;
            padding: 4px 10px;
            align-items: flex-start;
            border-color: rgba(12, 9, 2, 0.15000000596046448);
            border-style: solid;
            border-width: 1px;
            border-radius: 4px;
            background-color: rgba(255, 255, 255, 0);
          }
          .news-text20 {
            color: rgba(12, 9, 2, 1);
            height: auto;
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: left;
            font-family: Open Sans;
            font-weight: 600px;
            line-height: 120%;
            font-stretch: normal;
            letter-spacing: 0em;
          }
          .news-text21 {
            color: rgba(12, 9, 2, 1);
            height: auto;
            font-size: 16px;
            font-style: normal;
            text-align: left;
            font-family: Open Sans;
            font-weight: 600px;
            line-height: 120%;
            font-stretch: normal;
            letter-spacing: 0em;
          }
          .news-content7 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .news-text22 {
            color: rgba(12, 9, 2, 1);
            height: auto;
            font-size: 24px;
            align-self: stretch;
            font-style: normal;
            text-align: left;
            font-family: Arimo;
            font-weight: 500;
            line-height: 120.00000476837158%;
            font-stretch: normal;
            letter-spacing: 0.01em;
          }
          .news-text23 {
            color: rgba(12, 9, 2, 1);
            height: auto;
            font-size: 18px;
            align-self: stretch;
            font-style: normal;
            text-align: left;
            font-family: Open Sans;
            font-weight: 400px;
            line-height: 120%;
            font-stretch: normal;
            letter-spacing: 0em;
          }
          .news-content8 {
            gap: 40px;
            display: none;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .news-slider-dots {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .news-dot1 {
            width: 8px;
            height: 8px;
          }
          .news-dot2 {
            width: 8px;
            height: 8px;
            opacity: 0.2;
          }
          .news-slider-buttons {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .news-slider-arrow1 {
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
          .news-arrowback {
            width: 24px;
            height: 24px;
          }
          .news-slider-arrow2 {
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
          .news-arrowforward {
            width: 24px;
            height: 24px;
          }
          .news-text24 {
            display: inline-block;
          }
          .news-text25 {
            display: inline-block;
          }
          .news-text26 {
            display: inline-block;
          }
          .news-text27 {
            display: inline-block;
          }
          .news-text28 {
            display: inline-block;
          }
          .news-text29 {
            display: inline-block;
          }
          .news-text30 {
            display: inline-block;
          }
          .news-text31 {
            display: inline-block;
          }
          .news-text32 {
            display: inline-block;
          }
          .news-text33 {
            display: inline-block;
          }
          .news-text34 {
            display: inline-block;
          }
          .news-text35 {
            display: inline-block;
          }
          .news-text36 {
            display: inline-block;
          }
          .news-text37 {
            display: inline-block;
          }
          @media (max-width: 1600px) {
            .news-header {
              align-items: center;
            }
            .news-text10 {
              font-family: Arimo;
            }
            .news-row {
              gap: var(--dl-layout-space-threeunits);
              grid-template-rows: 1fr;
              grid-template-columns: 1fr 1fr 1fr;
            }
            .news-image1 {
              width: 100%;
              height: 100%;
            }
            .news-text18 {
              color: rgb(12, 9, 2);
              font-size: 24px;
              font-style: normal;
              font-family: Arimo;
              font-weight: 500;
              line-height: 120%;
              letter-spacing: 0.01em;
            }
            .news-text19 {
              color: rgb(12, 9, 2);
              font-size: 18px;
              font-style: normal;
              font-family: Open Sans;
              line-height: 120%;
              letter-spacing: 0em;
            }
            .news-image2 {
              width: 100%;
              height: 100%;
            }
            .news-text22 {
              color: rgb(12, 9, 2);
              font-size: 24px;
              font-style: normal;
              font-family: Arimo;
              font-weight: 500;
              line-height: 120%;
              letter-spacing: 0.01em;
            }
            .news-text23 {
              color: rgb(12, 9, 2);
              font-size: 18px;
              font-style: normal;
              font-family: Open Sans;
              line-height: 120%;
              letter-spacing: 0em;
            }
          }
          @media (max-width: 1200px) {
            .news-max-width {
              width: 100%;
            }
            .news-container1 {
              gap: var(--dl-layout-space-twounits);
            }
            .news-header {
              gap: var(--dl-layout-space-twounits);
              align-items: flex-start;
            }
            .news-text10 {
              font-family: Arimo;
            }
            .news-row {
              gap: var(--dl-layout-space-twounits);
            }
          }
          @media (max-width: 991px) {
            .news-max-width {
              padding-top: var(--dl-layout-space-fiveunits);
              padding-left: var(--dl-layout-space-threeunits);
              padding-right: var(--dl-layout-space-threeunits);
              padding-bottom: var(--dl-layout-space-fiveunits);
            }
            .news-container1 {
              gap: var(--dl-layout-space-twounits);
            }
            .news-header {
              align-items: center;
            }
            .news-text10 {
              color: rgb(12, 9, 2);
              font-size: 40px;
              font-family: Arimo;
              font-weight: 700;
              line-height: 120%;
              letter-spacing: 0.01em;
            }
            .news-button {
              align-self: stretch;
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .news-row {
              gap: var(--dl-layout-space-twounits);
              grid-template-rows: 1fr;
              grid-template-columns: 1fr 1fr;
            }
            .news-card3 {
              display: none;
            }
            .news-content8 {
              display: flex;
            }
            .news-slider-dots {
              gap: var(--dl-layout-space-unit);
            }
            .news-slider-buttons {
              gap: var(--dl-layout-space-unit);
            }
            .news-slider-arrow1 {
              width: 44px;
              height: 44px;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: 0px;
            }
            .news-slider-arrow2 {
              width: 44px;
              height: 44px;
            }
          }
          @media (max-width: 767px) {
            .news-max-width {
              padding-top: var(--dl-layout-space-fourunits);
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
              padding-bottom: var(--dl-layout-space-fourunits);
            }
            .news-container1 {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .news-header {
              gap: var(--dl-layout-space-oneandhalfunits);
              width: 100%;
              align-self: flex-start;
              flex-direction: row;
            }
            .news-title {
              justify-content: center;
            }
            .news-text10 {
              font-size: 32px;
              text-align: left;
            }
            .news-button {
              width: 100%;
              height: 40px;
              max-width: var(--dl-layout-size-large);
              min-width: var(--dl-layout-size-medium);
              align-self: flex-start;
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .news-text11 {
              font-size: 16px;
            }
            .news-row {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .news-container2 {
              padding: var(--dl-layout-space-oneandhalfunits);
            }
            .news-container3 {
              padding: var(--dl-layout-space-oneandhalfunits);
            }
            .news-container4 {
              padding: var(--dl-layout-space-oneandhalfunits);
            }
            .news-slider-dots {
              gap: var(--dl-layout-space-halfunit);
            }
            .news-slider-buttons {
              gap: var(--dl-layout-space-unit);
            }
            .news-slider-arrow1 {
              width: 40px;
              height: 40px;
            }
            .news-slider-arrow2 {
              width: 40px;
              height: 40px;
            }
          }
          @media (max-width: 479px) {
            .news-max-width {
              padding-top: var(--dl-layout-space-threeunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .news-header {
              flex-direction: column;
            }
            .news-text10 {
              font-size: 26px;
            }
            .news-button {
              align-self: center;
            }
            .news-text11 {
              font-style: normal;
              font-family: Arimo;
              font-weight: 400;
            }
            .news-row {
              grid-template-rows: 1fr;
              grid-template-columns: 1fr;
            }
            .news-container2 {
              padding: var(--dl-layout-space-oneandhalfunits);
            }
            .news-card2 {
              display: none;
            }
            .news-container3 {
              padding: var(--dl-layout-space-oneandhalfunits);
            }
            .news-container4 {
              padding: var(--dl-layout-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

News.defaultProps = {
  text3: undefined,
  dotSrc: '/external/dot8300-n1nwa-200h.png',
  text6: undefined,
  text7: undefined,
  text5: undefined,
  text12: undefined,
  text4: undefined,
  placeholderImageAlt: 'PlaceholderImage8330',
  text: undefined,
  imageSrc1: '/external/placeholderimage8330-ewzv-1500w.png',
  dotAlt: 'Dot8300',
  dotAlt1: 'Dot8300',
  text2: undefined,
  imageAlt: 'image',
  text8: undefined,
  text1: undefined,
  imageAlt1: 'image',
  arrowbackAlt: 'arrowbackI8300',
  text10: undefined,
  placeholderImageSrc: '/external/placeholderimage8330-hjim-1500w.png',
  dotSrc1: '/external/dot8300-t30a-200h.png',
  arrowforwardAlt: 'arrowforwardI8300',
  text11: undefined,
  imageSrc: '/external/placeholderimage8330-hmqg-1500w.png',
  arrowbackSrc: '/external/arrowbacki8300-n9fp.svg',
  text13: undefined,
  text9: undefined,
  arrowforwardSrc: '/external/arrowforwardi8300-0i9.svg',
}

News.propTypes = {
  text3: PropTypes.element,
  dotSrc: PropTypes.string,
  text6: PropTypes.element,
  text7: PropTypes.element,
  text5: PropTypes.element,
  text12: PropTypes.element,
  text4: PropTypes.element,
  placeholderImageAlt: PropTypes.string,
  text: PropTypes.element,
  imageSrc1: PropTypes.string,
  dotAlt: PropTypes.string,
  dotAlt1: PropTypes.string,
  text2: PropTypes.element,
  imageAlt: PropTypes.string,
  text8: PropTypes.element,
  text1: PropTypes.element,
  imageAlt1: PropTypes.string,
  arrowbackAlt: PropTypes.string,
  text10: PropTypes.element,
  placeholderImageSrc: PropTypes.string,
  dotSrc1: PropTypes.string,
  arrowforwardAlt: PropTypes.string,
  text11: PropTypes.element,
  imageSrc: PropTypes.string,
  arrowbackSrc: PropTypes.string,
  text13: PropTypes.element,
  text9: PropTypes.element,
  arrowforwardSrc: PropTypes.string,
}

export default News
