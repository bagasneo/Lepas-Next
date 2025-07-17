import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Models = (props) => {
  return (
    <>
      <div className="models-models">
        <div className="models-max-width">
          <div className="models-container1">
            <div className="models-title">
              <span className="models-text10">
                {props.text ?? (
                  <Fragment>
                    <span className="models-text35">OUR MODELS</span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="models-swiper">
              <div className="models-product1">
                <img
                  alt={props.imageAlt}
                  src={props.imageSrc}
                  className="models-image1"
                />
                <div className="models-content1">
                  <div className="models-header1">
                    <span className="models-text11">
                      {props.text1 ?? (
                        <Fragment>
                          <span className="models-text46">Lepas S6</span>
                        </Fragment>
                      )}
                    </span>
                    <span className="models-text12">
                      {props.text2 ?? (
                        <Fragment>
                          <span className="models-text32">
                            Start From $89,900
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="models-container2">
                    <button type="button" className="models-button1">
                      <span className="models-text13">
                        {props.text7 ?? (
                          <Fragment>
                            <span className="models-text37">EXPLORE</span>
                          </Fragment>
                        )}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="models-product2">
                <img
                  alt={props.imageAlt1}
                  src={props.imageSrc1}
                  className="models-image2"
                />
                <div className="models-content2">
                  <div className="models-header2">
                    <span className="models-text14">
                      {props.text3 ?? (
                        <Fragment>
                          <span className="models-text45">Lepas L4</span>
                        </Fragment>
                      )}
                    </span>
                    <span className="models-text15">
                      {props.text4 ?? (
                        <Fragment>
                          <span className="models-text29">
                            Start From $89,900
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="models-container3">
                    <button type="button" className="models-button2">
                      <span className="models-text16">
                        {props.text8 ?? (
                          <Fragment>
                            <span className="models-text34">EXPLORE</span>
                          </Fragment>
                        )}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="models-product3">
                <img
                  alt={props.imageAlt2}
                  src={props.imageSrc2}
                  className="models-image3"
                />
                <div className="models-content3">
                  <div className="models-header3">
                    <span className="models-text17">
                      {props.text5 ?? (
                        <Fragment>
                          <span className="models-text41">Lepas L8</span>
                        </Fragment>
                      )}
                    </span>
                    <span className="models-text18">
                      {props.text6 ?? (
                        <Fragment>
                          <span className="models-text31">
                            Start From $89,900
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="models-container4">
                    <button type="button" className="models-button3">
                      <span className="models-text19">
                        {props.text9 ?? (
                          <Fragment>
                            <span className="models-text40">EXPLORE</span>
                          </Fragment>
                        )}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="models-content4">
              <div className="models-product4">
                <img
                  alt={props.imageAlt3}
                  src={props.imageSrc3}
                  className="models-image4"
                />
                <div className="models-content5">
                  <div className="models-header4">
                    <span className="models-text20">
                      {props.text11 ?? (
                        <Fragment>
                          <span className="models-text44">Lepas S6</span>
                        </Fragment>
                      )}
                    </span>
                    <span className="models-text21">
                      {props.text21 ?? (
                        <Fragment>
                          <span className="models-text39">
                            Start From $89,900
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="models-container5">
                    <button type="button" className="models-button4">
                      <span className="models-text22">
                        {props.text71 ?? (
                          <Fragment>
                            <span className="models-text42">EXPLORE</span>
                          </Fragment>
                        )}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="models-product5">
                <img
                  alt={props.imageAlt11}
                  src={props.imageSrc11}
                  className="models-image5"
                />
                <div className="models-content6">
                  <div className="models-header5">
                    <span className="models-text23">
                      {props.text31 ?? (
                        <Fragment>
                          <span className="models-text36">Lepas L4</span>
                        </Fragment>
                      )}
                    </span>
                    <span className="models-text24">
                      {props.text41 ?? (
                        <Fragment>
                          <span className="models-text30">
                            Start From $89,900
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="models-container6">
                    <button type="button" className="models-button5">
                      <span className="models-text25">
                        {props.text81 ?? (
                          <Fragment>
                            <span className="models-text33">EXPLORE</span>
                          </Fragment>
                        )}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="models-product6">
                <img
                  alt={props.imageAlt21}
                  src={props.imageSrc21}
                  className="models-image6"
                />
                <div className="models-content7">
                  <div className="models-header6">
                    <span className="models-text26">
                      {props.text51 ?? (
                        <Fragment>
                          <span className="models-text38">Lepas L8</span>
                        </Fragment>
                      )}
                    </span>
                    <span className="models-text27">
                      {props.text61 ?? (
                        <Fragment>
                          <span className="models-text47">
                            Start From $89,900
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="models-container7">
                    <button type="button" className="models-button6">
                      <span className="models-text28">
                        {props.text91 ?? (
                          <Fragment>
                            <span className="models-text43">EXPLORE</span>
                          </Fragment>
                        )}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="models-content8">
              <div className="models-slider-dots">
                <img
                  alt={props.dotAlt}
                  src={props.dotSrc}
                  className="models-dot1"
                />
                <img
                  alt={props.dotAlt1}
                  src={props.dotSrc1}
                  className="models-dot2"
                />
              </div>
              <button className="models-slider-buttons">
                <div className="models-slider-arrow1">
                  <img
                    alt={props.arrowbackAlt}
                    src={props.arrowbackSrc}
                    className="models-arrowback"
                  />
                </div>
                <div className="models-slider-arrow2">
                  <img
                    alt={props.arrowforwardAlt}
                    src={props.arrowforwardSrc}
                    className="models-arrowforward"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .models-models {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            justify-content: center;
            background-color: #fff;
          }
          .models-max-width {
            gap: 112px;
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
          .models-container1 {
            gap: var(--dl-layout-space-fourunits);
            width: auto;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .models-title {
            height: auto;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .models-text10 {
            color: rgba(12, 9, 2, 1);
            height: auto;
            font-size: 48px;
            align-self: stretch;
            text-align: left;
            font-family: Arial;
            font-weight: 700;
            line-height: 120%;
            letter-spacing: 0.01em;
            text-transform: none;
            text-decoration: none;
          }
          .models-swiper {
            gap: var(--dl-layout-space-threeunits);
            display: grid;
            align-self: stretch;
            flex-shrink: 0;
            grid-template-rows: 1fr;
            grid-template-columns: 1fr 1fr 1fr;
          }
          .models-product1 {
            width: auto;
            height: 100%;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .models-image1 {
            width: 100%;
            height: 200px;
            object-fit: contain;
          }
          .models-content1 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-self: stretch;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: flex-start;
          }
          .models-header1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .models-text11 {
            color: rgba(12, 9, 2, 1);
            height: auto;
            font-size: 24px;
            align-self: stretch;
            text-align: center;
            font-family: Arial;
            font-weight: 700;
            letter-spacing: 0.01em;
            text-transform: none;
            text-decoration: none;
          }
          .models-text12 {
            color: rgba(12, 9, 2, 1);
            height: auto;
            font-size: 18px;
            align-self: stretch;
            font-style: normal;
            text-align: center;
            font-family: Arial;
            font-weight: 400;
            font-stretch: normal;
            letter-spacing: 0em;
            text-transform: none;
            text-decoration: none;
          }
          .models-container2 {
            display: flex;
            flex-direction: row;
            justify-content: center;
          }
          .models-button1 {
            flex: 1;
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
            background-color: var(--dl-color-theme-secondary1);
          }
          .models-text13 {
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
          .models-product2 {
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .models-image2 {
            width: 100%;
            height: 200px;
            object-fit: contain;
          }
          .models-content2 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .models-header2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .models-text14 {
            color: rgba(12, 9, 2, 1);
            height: auto;
            font-size: 24px;
            align-self: stretch;
            text-align: center;
            font-family: Arial;
            font-weight: 700;
            letter-spacing: 0.01em;
            text-transform: none;
            text-decoration: none;
          }
          .models-text15 {
            color: rgba(12, 9, 2, 1);
            height: auto;
            font-size: 18px;
            align-self: stretch;
            font-style: normal;
            text-align: center;
            font-family: Arial;
            font-weight: 400;
            font-stretch: normal;
            letter-spacing: 0em;
            text-transform: none;
            text-decoration: none;
          }
          .models-container3 {
            display: flex;
            align-self: stretch;
            flex-direction: row;
            justify-content: center;
          }
          .models-button2 {
            flex: 1;
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
            background-color: var(--dl-color-theme-secondary1);
          }
          .models-text16 {
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
          .models-product3 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-direction: column;
          }
          .models-image3 {
            width: 100%;
            height: 200px;
            object-fit: contain;
          }
          .models-content3 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: flex-start;
          }
          .models-header3 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .models-text17 {
            color: rgba(12, 9, 2, 1);
            height: auto;
            font-size: 24px;
            align-self: stretch;
            text-align: center;
            font-family: Arial;
            font-weight: 700;
            letter-spacing: 0.01em;
            text-transform: none;
            text-decoration: none;
          }
          .models-text18 {
            color: rgba(12, 9, 2, 1);
            height: auto;
            font-size: 18px;
            align-self: stretch;
            font-style: normal;
            text-align: center;
            font-family: Arial;
            font-weight: 400;
            font-stretch: normal;
            letter-spacing: 0em;
            text-transform: none;
            text-decoration: none;
          }
          .models-container4 {
            display: flex;
            align-self: stretch;
            flex-direction: row;
            justify-content: center;
          }
          .models-button3 {
            flex: 1;
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
            background-color: var(--dl-color-theme-secondary1);
          }
          .models-text19 {
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
          .models-content4 {
            gap: var(--dl-layout-space-threeunits);
            display: none;
            align-self: stretch;
            flex-shrink: 0;
            grid-template-rows: 1fr;
            grid-template-columns: 1fr 1fr 1fr;
          }
          .models-product4 {
            width: auto;
            height: 100%;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .models-image4 {
            width: 100%;
            height: 200px;
            object-fit: contain;
          }
          .models-content5 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-self: stretch;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: flex-start;
          }
          .models-header4 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .models-text20 {
            color: rgba(12, 9, 2, 1);
            height: auto;
            font-size: 24px;
            align-self: stretch;
            text-align: center;
            font-family: Arial;
            font-weight: 700;
            letter-spacing: 0.01em;
            text-transform: none;
            text-decoration: none;
          }
          .models-text21 {
            color: rgba(12, 9, 2, 1);
            height: auto;
            font-size: 18px;
            align-self: stretch;
            font-style: normal;
            text-align: center;
            font-family: Arial;
            font-weight: 400;
            font-stretch: normal;
            letter-spacing: 0em;
            text-transform: none;
            text-decoration: none;
          }
          .models-container5 {
            display: flex;
            flex-direction: row;
            justify-content: center;
          }
          .models-button4 {
            flex: 1;
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
            background-color: var(--dl-color-theme-secondary1);
          }
          .models-text22 {
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
          .models-product5 {
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .models-image5 {
            width: 100%;
            height: 200px;
            object-fit: contain;
          }
          .models-content6 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .models-header5 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .models-text23 {
            color: rgba(12, 9, 2, 1);
            height: auto;
            font-size: 24px;
            align-self: stretch;
            text-align: center;
            font-family: Arial;
            font-weight: 700;
            letter-spacing: 0.01em;
            text-transform: none;
            text-decoration: none;
          }
          .models-text24 {
            color: rgba(12, 9, 2, 1);
            height: auto;
            font-size: 18px;
            align-self: stretch;
            font-style: normal;
            text-align: center;
            font-family: Arial;
            font-weight: 400;
            font-stretch: normal;
            letter-spacing: 0em;
            text-transform: none;
            text-decoration: none;
          }
          .models-container6 {
            display: flex;
            align-self: stretch;
            flex-direction: row;
            justify-content: center;
          }
          .models-button5 {
            flex: 1;
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
            background-color: var(--dl-color-theme-secondary1);
          }
          .models-text25 {
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
          .models-product6 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-direction: column;
          }
          .models-image6 {
            width: 100%;
            height: 200px;
            object-fit: contain;
          }
          .models-content7 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: flex-start;
          }
          .models-header6 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .models-text26 {
            color: rgba(12, 9, 2, 1);
            height: auto;
            font-size: 24px;
            align-self: stretch;
            text-align: center;
            font-family: Arial;
            font-weight: 700;
            letter-spacing: 0.01em;
            text-transform: none;
            text-decoration: none;
          }
          .models-text27 {
            color: rgba(12, 9, 2, 1);
            height: auto;
            font-size: 18px;
            align-self: stretch;
            font-style: normal;
            text-align: center;
            font-family: Arial;
            font-weight: 400;
            font-stretch: normal;
            letter-spacing: 0em;
            text-transform: none;
            text-decoration: none;
          }
          .models-container7 {
            display: flex;
            align-self: stretch;
            flex-direction: row;
            justify-content: center;
          }
          .models-button6 {
            flex: 1;
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
            background-color: var(--dl-color-theme-secondary1);
          }
          .models-text28 {
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
          .models-content8 {
            gap: 40px;
            display: none;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .models-slider-dots {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .models-dot1 {
            width: 8px;
            height: 8px;
          }
          .models-dot2 {
            width: 8px;
            height: 8px;
            opacity: 0.2;
          }
          .models-slider-buttons {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .models-slider-arrow1 {
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
          .models-arrowback {
            width: 24px;
            height: 24px;
          }
          .models-slider-arrow2 {
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
          .models-arrowforward {
            width: 24px;
            height: 24px;
          }
          .models-text29 {
            display: inline-block;
          }
          .models-text30 {
            display: inline-block;
          }
          .models-text31 {
            display: inline-block;
          }
          .models-text32 {
            display: inline-block;
          }
          .models-text33 {
            display: inline-block;
          }
          .models-text34 {
            display: inline-block;
          }
          .models-text35 {
            display: inline-block;
          }
          .models-text36 {
            display: inline-block;
          }
          .models-text37 {
            display: inline-block;
          }
          .models-text38 {
            display: inline-block;
          }
          .models-text39 {
            display: inline-block;
          }
          .models-text40 {
            display: inline-block;
          }
          .models-text41 {
            display: inline-block;
          }
          .models-text42 {
            display: inline-block;
          }
          .models-text43 {
            display: inline-block;
          }
          .models-text44 {
            display: inline-block;
          }
          .models-text45 {
            display: inline-block;
          }
          .models-text46 {
            display: inline-block;
          }
          .models-text47 {
            display: inline-block;
          }
          @media (max-width: 1600px) {
            .models-swiper {
              gap: var(--dl-layout-space-threeunits);
            }
            .models-text12 {
              font-family: Open Sans;
            }
            .models-text15 {
              font-family: Open Sans;
            }
            .models-text18 {
              font-family: Open Sans;
            }
            .models-text19 {
              color: rgb(12, 9, 2);
              font-size: 18px;
              font-style: normal;
              font-family: Arimo;
              font-weight: 500;
              letter-spacing: 0em;
              text-transform: none;
              text-decoration: none;
            }
            .models-content4 {
              gap: var(--dl-layout-space-threeunits);
            }
            .models-text21 {
              font-family: Open Sans;
            }
            .models-text24 {
              font-family: Open Sans;
            }
            .models-text27 {
              font-family: Open Sans;
            }
            .models-text28 {
              color: rgb(12, 9, 2);
              font-size: 18px;
              font-style: normal;
              font-family: Arimo;
              font-weight: 500;
              letter-spacing: 0em;
              text-transform: none;
              text-decoration: none;
            }
          }
          @media (max-width: 1200px) {
            .models-container1 {
              gap: var(--dl-layout-space-threeunits);
            }
            .models-swiper {
              gap: var(--dl-layout-space-twounits);
            }
            .models-text17 {
              font-size: 24px;
            }
            .models-content4 {
              gap: var(--dl-layout-space-twounits);
            }
            .models-text26 {
              font-size: 24px;
            }
          }
          @media (max-width: 991px) {
            .models-max-width {
              gap: var(--dl-layout-space-fiveunits);
              display: flex;
              padding-top: var(--dl-layout-space-fourunits);
              padding-left: var(--dl-layout-space-threeunits);
              padding-right: var(--dl-layout-space-threeunits);
              padding-bottom: var(--dl-layout-space-fourunits);
            }
            .models-container1 {
              gap: var(--dl-layout-space-twounits);
              display: flex;
            }
            .models-text10 {
              font-size: 40px;
            }
            .models-swiper {
              gap: var(--dl-layout-space-twounits);
              grid-template-columns: 1fr 1fr;
            }
            .models-product1 {
              gap: var(--dl-layout-space-threeunits);
              justify-content: flex-start;
            }
            .models-content1 {
              gap: var(--dl-layout-space-twounits);
              width: auto;
              height: auto;
              align-self: stretch;
              justify-content: flex-start;
            }
            .models-header1 {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .models-button1 {
              align-self: stretch;
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .models-product2 {
              gap: var(--dl-layout-space-threeunits);
              justify-content: flex-start;
            }
            .models-content2 {
              gap: var(--dl-layout-space-twounits);
              width: auto;
              align-self: stretch;
            }
            .models-header2 {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .models-button2 {
              align-self: stretch;
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .models-product3 {
              display: none;
            }
            .models-header3 {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .models-button3 {
              align-self: stretch;
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .models-content4 {
              gap: var(--dl-layout-space-twounits);
              grid-template-columns: 1fr 1fr;
            }
            .models-product4 {
              gap: var(--dl-layout-space-threeunits);
              justify-content: flex-start;
            }
            .models-content5 {
              gap: var(--dl-layout-space-twounits);
              width: auto;
              height: auto;
              align-self: stretch;
              justify-content: flex-start;
            }
            .models-header4 {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .models-button4 {
              align-self: stretch;
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .models-product5 {
              gap: var(--dl-layout-space-threeunits);
              justify-content: flex-start;
            }
            .models-content6 {
              gap: var(--dl-layout-space-twounits);
              width: auto;
              align-self: stretch;
            }
            .models-header5 {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .models-button5 {
              align-self: stretch;
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .models-product6 {
              display: none;
            }
            .models-header6 {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .models-button6 {
              align-self: stretch;
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .models-content8 {
              display: flex;
            }
            .models-slider-dots {
              gap: var(--dl-layout-space-unit);
            }
            .models-slider-buttons {
              gap: var(--dl-layout-space-unit);
            }
            .models-slider-arrow1 {
              width: 44px;
              height: 44px;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: 0px;
            }
            .models-slider-arrow2 {
              width: 44px;
              height: 44px;
            }
          }
          @media (max-width: 767px) {
            .models-max-width {
              padding-top: var(--dl-layout-space-fourunits);
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
              padding-bottom: var(--dl-layout-space-fourunits);
            }
            .models-container1 {
              gap: var(--dl-layout-space-twounits);
            }
            .models-title {
              align-self: stretch;
              align-items: center;
              justify-content: center;
            }
            .models-text10 {
              font-size: 32px;
            }
            .models-swiper {
              gap: var(--dl-layout-space-oneandhalfunits);
              grid-template-columns: 1fr 1fr;
            }
            .models-product1 {
              gap: var(--dl-layout-space-oneandhalfunits);
              justify-content: flex-start;
            }
            .models-content1 {
              gap: var(--dl-layout-space-oneandhalfunits);
              width: auto;
              height: auto;
              align-self: stretch;
              justify-content: flex-start;
            }
            .models-header1 {
              gap: var(--dl-layout-space-unit);
            }
            .models-text11 {
              font-size: 20px;
            }
            .models-text12 {
              font-size: 16px;
            }
            .models-button1 {
              height: 40px;
              align-self: stretch;
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .models-text13 {
              font-size: 16px;
            }
            .models-product2 {
              gap: var(--dl-layout-space-oneandhalfunits);
              justify-content: flex-start;
            }
            .models-content2 {
              gap: var(--dl-layout-space-oneandhalfunits);
              width: auto;
              align-self: stretch;
              justify-content: flex-start;
            }
            .models-header2 {
              gap: var(--dl-layout-space-unit);
            }
            .models-text14 {
              font-size: 20px;
            }
            .models-text15 {
              font-size: 16px;
            }
            .models-button2 {
              height: 40px;
              align-self: stretch;
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .models-text16 {
              font-size: 16px;
            }
            .models-product3 {
              display: none;
            }
            .models-header3 {
              gap: var(--dl-layout-space-unit);
            }
            .models-button3 {
              height: 40px;
              align-self: stretch;
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .models-text19 {
              font-size: 16px;
            }
            .models-content4 {
              gap: var(--dl-layout-space-oneandhalfunits);
              grid-template-columns: 1fr 1fr;
            }
            .models-product4 {
              gap: var(--dl-layout-space-oneandhalfunits);
              justify-content: flex-start;
            }
            .models-content5 {
              gap: var(--dl-layout-space-oneandhalfunits);
              width: auto;
              height: auto;
              align-self: stretch;
              justify-content: flex-start;
            }
            .models-header4 {
              gap: var(--dl-layout-space-unit);
            }
            .models-text20 {
              font-size: 20px;
            }
            .models-text21 {
              font-size: 16px;
            }
            .models-button4 {
              height: 40px;
              align-self: stretch;
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .models-text22 {
              font-size: 16px;
            }
            .models-product5 {
              gap: var(--dl-layout-space-oneandhalfunits);
              justify-content: flex-start;
            }
            .models-content6 {
              gap: var(--dl-layout-space-oneandhalfunits);
              width: auto;
              align-self: stretch;
              justify-content: flex-start;
            }
            .models-header5 {
              gap: var(--dl-layout-space-unit);
            }
            .models-text23 {
              font-size: 20px;
            }
            .models-text24 {
              font-size: 16px;
            }
            .models-button5 {
              height: 40px;
              align-self: stretch;
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .models-text25 {
              font-size: 16px;
            }
            .models-product6 {
              display: none;
            }
            .models-header6 {
              gap: var(--dl-layout-space-unit);
            }
            .models-button6 {
              height: 40px;
              align-self: stretch;
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .models-text28 {
              font-size: 16px;
            }
            .models-slider-dots {
              gap: var(--dl-layout-space-halfunit);
            }
            .models-slider-buttons {
              gap: var(--dl-layout-space-unit);
            }
            .models-slider-arrow1 {
              width: 40px;
              height: 40px;
            }
            .models-slider-arrow2 {
              width: 40px;
              height: 40px;
            }
          }
          @media (max-width: 479px) {
            .models-models {
              background-color: #fff;
            }
            .models-max-width {
              padding-top: var(--dl-layout-space-threeunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .models-container1 {
              gap: var(--dl-layout-space-twounits);
              width: auto;
            }
            .models-title {
              gap: var(--dl-layout-space-unit);
              align-items: center;
              flex-direction: row;
              justify-content: center;
            }
            .models-text10 {
              font-size: 24px;
              font-family: Arimo;
            }
            .models-swiper {
              grid-template-columns: 1fr;
            }
            .models-product1 {
              gap: var(--dl-layout-space-oneandhalfunits);
              justify-content: flex-start;
            }
            .models-content1 {
              gap: var(--dl-layout-space-oneandhalfunits);
              width: 100%;
              height: auto;
              justify-content: flex-start;
            }
            .models-header1 {
              width: auto;
            }
            .models-product2 {
              display: none;
            }
            .models-content4 {
              grid-template-columns: 1fr;
            }
            .models-product4 {
              gap: var(--dl-layout-space-oneandhalfunits);
              justify-content: flex-start;
            }
            .models-content5 {
              gap: var(--dl-layout-space-oneandhalfunits);
              width: 100%;
              height: auto;
              justify-content: flex-start;
            }
            .models-header4 {
              width: auto;
            }
            .models-product5 {
              display: none;
            }
          }
        `}
      </style>
    </>
  )
}

Models.defaultProps = {
  arrowbackSrc: '/external/arrowbacki8300-n9fp.svg',
  arrowbackAlt: 'arrowbackI8300',
  imageSrc21: '/external/product3-200h.png',
  imageAlt: 'image',
  arrowforwardSrc: '/external/arrowforwardi8300-0i9.svg',
  imageSrc11: '/external/product2-200h.png',
  imageAlt21: 'image',
  text4: undefined,
  text41: undefined,
  dotAlt1: 'Dot8300',
  text6: undefined,
  text2: undefined,
  text81: undefined,
  imageSrc3: '/external/product1-200h.png',
  arrowforwardAlt: 'arrowforwardI8300',
  dotAlt: 'Dot8300',
  imageAlt2: 'image',
  text8: undefined,
  imageAlt1: 'image',
  text: undefined,
  imageAlt11: 'image',
  text31: undefined,
  text7: undefined,
  dotSrc1: '/external/dot8300-t30a-200h.png',
  text51: undefined,
  text21: undefined,
  text9: undefined,
  text5: undefined,
  text71: undefined,
  dotSrc: '/external/dot8300-n1nwa-200h.png',
  text91: undefined,
  text11: undefined,
  text3: undefined,
  text1: undefined,
  imageAlt3: 'image',
  imageSrc2: '/external/product3-200h.png',
  imageSrc: '/external/product1-200h.png',
  imageSrc1: '/external/product2-200h.png',
  text61: undefined,
}

Models.propTypes = {
  arrowbackSrc: PropTypes.string,
  arrowbackAlt: PropTypes.string,
  imageSrc21: PropTypes.string,
  imageAlt: PropTypes.string,
  arrowforwardSrc: PropTypes.string,
  imageSrc11: PropTypes.string,
  imageAlt21: PropTypes.string,
  text4: PropTypes.element,
  text41: PropTypes.element,
  dotAlt1: PropTypes.string,
  text6: PropTypes.element,
  text2: PropTypes.element,
  text81: PropTypes.element,
  imageSrc3: PropTypes.string,
  arrowforwardAlt: PropTypes.string,
  dotAlt: PropTypes.string,
  imageAlt2: PropTypes.string,
  text8: PropTypes.element,
  imageAlt1: PropTypes.string,
  text: PropTypes.element,
  imageAlt11: PropTypes.string,
  text31: PropTypes.element,
  text7: PropTypes.element,
  dotSrc1: PropTypes.string,
  text51: PropTypes.element,
  text21: PropTypes.element,
  text9: PropTypes.element,
  text5: PropTypes.element,
  text71: PropTypes.element,
  dotSrc: PropTypes.string,
  text91: PropTypes.element,
  text11: PropTypes.element,
  text3: PropTypes.element,
  text1: PropTypes.element,
  imageAlt3: PropTypes.string,
  imageSrc2: PropTypes.string,
  imageSrc: PropTypes.string,
  imageSrc1: PropTypes.string,
  text61: PropTypes.element,
}

export default Models
