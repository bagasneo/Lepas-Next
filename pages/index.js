import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Models from '../components/models'
import Features from '../components/features'
import TestDrive from '../components/test-drive'
import Dealers from '../components/dealers'
import Contacts from '../components/contacts'
import News from '../components/news'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Lepas</title>
          <meta property="og:title" content="Lepas" />
        </Head>
        <Navbar
          text={
            <Fragment>
              <span className="home-text10">Menu</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="home-text11">TEST DRIVE</span>
            </Fragment>
          }
          rootClassName="navbarroot-class-name"
        ></Navbar>
        <Hero
          text={
            <Fragment>
              <span className="home-text12">
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
          }
        ></Hero>
        <Models
          text={
            <Fragment>
              <span className="home-text15">OUR MODELS</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="home-text16">Lepas S6</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="home-text17">Start From $89,900</span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="home-text18">Lepas L4</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="home-text19">Start From $89,900</span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="home-text20">Lepas L8</span>
            </Fragment>
          }
          text6={
            <Fragment>
              <span className="home-text21">Start From $89,900</span>
            </Fragment>
          }
          text7={
            <Fragment>
              <span className="home-text22">EXPLORE</span>
            </Fragment>
          }
          text8={
            <Fragment>
              <span className="home-text23">EXPLORE</span>
            </Fragment>
          }
          text9={
            <Fragment>
              <span className="home-text24">EXPLORE</span>
            </Fragment>
          }
          text11={
            <Fragment>
              <span className="home-text25">Lepas S6</span>
            </Fragment>
          }
          text21={
            <Fragment>
              <span className="home-text26">Start From $89,900</span>
            </Fragment>
          }
          text31={
            <Fragment>
              <span className="home-text27">Lepas L4</span>
            </Fragment>
          }
          text41={
            <Fragment>
              <span className="home-text28">Start From $89,900</span>
            </Fragment>
          }
          text51={
            <Fragment>
              <span className="home-text29">Lepas L8</span>
            </Fragment>
          }
          text61={
            <Fragment>
              <span className="home-text30">Start From $89,900</span>
            </Fragment>
          }
          text71={
            <Fragment>
              <span className="home-text31">EXPLORE</span>
            </Fragment>
          }
          text81={
            <Fragment>
              <span className="home-text32">EXPLORE</span>
            </Fragment>
          }
          text91={
            <Fragment>
              <span className="home-text33">EXPLORE</span>
            </Fragment>
          }
        ></Models>
        <Features
          text={
            <Fragment>
              <span className="home-text34">
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
          }
          title={
            <Fragment>
              <span className="home-text37">Exciting Journeys Begin Here</span>
            </Fragment>
          }
          title1={
            <Fragment>
              <span className="home-text38">Transforming Travel into Art</span>
            </Fragment>
          }
          title2={
            <Fragment>
              <span className="home-text39">Embrace Vibrant Living</span>
            </Fragment>
          }
          description={
            <Fragment>
              <span className="home-text40">
                Experience extraordinary journeys filled with remarkable moments
                that inspire you every step of the way.
              </span>
            </Fragment>
          }
          description1={
            <Fragment>
              <span className="home-text41">
                Transforming travel into a masterpiece with Lepas vehicles,
                where every journey becomes a work of art that inspires and
                captivates.
              </span>
            </Fragment>
          }
          description2={
            <Fragment>
              <span className="home-text42">
                Embrace a vibrant lifestyle with Lepas vehicles that elevate
                your adventures and ignite your passion for exploration.
              </span>
            </Fragment>
          }
        ></Features>
        <TestDrive
          text={
            <Fragment>
              <span className="home-text43">
                DISCOVER THE FUTURE OF DRIVING WITH THE LEPAS MODEL.
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="home-text44">
                The LEPAS L8 transforms travel with its sleek design and
                advanced technology. Experience a perfect mix of style and
                innovation, turning every drive into an adventure.
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="home-text45">EXPLORE</span>
            </Fragment>
          }
        ></TestDrive>
        <Dealers
          text={
            <Fragment>
              <span className="home-text46">
                DISCOVER THE FUTURE OF DRIVING WITH THE LEPAS MODEL.
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="home-text47">
                Discover where to buy the exciting LEPAS L8 and experience its
                innovative features.
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="home-text48">Kota Tua</span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="home-text49">
                123 Sample Street, a charming neighborhood in New York, NY
                10000, USA, is known for its vibrant atmosphere and friendly
                locals.
              </span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="home-text50">SEE ON MAP</span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="home-text51">Cilandak</span>
            </Fragment>
          }
          text6={
            <Fragment>
              <span className="home-text52">
                123 Sample Street, Sydney, New South Wales 2000, Australia is a
                vibrant location known for its beautiful scenery and bustling
                atmosphere.
              </span>
            </Fragment>
          }
          text7={
            <Fragment>
              <span className="home-text53">SEE ON MAP</span>
            </Fragment>
          }
          text8={
            <Fragment>
              <span className="home-text54">Kemang</span>
            </Fragment>
          }
          text9={
            <Fragment>
              <span className="home-text55">
                123 Sample Street, located in the bustling heart of London W1C
                1DE, United Kingdom, offers a unique blend of history and
                modernity, making it a must-visit destination.
              </span>
            </Fragment>
          }
          text10={
            <Fragment>
              <span className="home-text56">SEE ON MAP</span>
            </Fragment>
          }
        ></Dealers>
        <Contacts
          text={
            <Fragment>
              <span className="home-text57">GET IN TOUCH</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="home-text58">
                We’re here to assist you with any inquiries or dealership
                information you may need. Whether you have questions about our
                services, vehicle availability, or financing options, our team
                is ready to help you every step of the way.
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="home-text59">Email</span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="home-text60">contact@lepas.com</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="home-text61">Phone</span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="home-text62">+1 (555) 123-4567</span>
            </Fragment>
          }
          text6={
            <Fragment>
              <span className="home-text63">Office</span>
            </Fragment>
          }
          text7={
            <Fragment>
              <span className="home-text64">
                456 Innovation Ave, Melbourne VIC 3000 AU
              </span>
            </Fragment>
          }
        ></Contacts>
        <News
          text={
            <Fragment>
              <span className="home-text65">LEPAS HIGHLIGHTS</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="home-text66">VIEW ALL</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="home-text67">5 min read</span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="home-text68">
                LEPAS: L8 Takes Off First Shipment to International Markets
              </span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="home-text69">
                Transform your journeys into exquisite experiences worth
                cherishing.
              </span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="home-text70">5 min read</span>
            </Fragment>
          }
          text6={
            <Fragment>
              <span className="home-text71">
                LEPAS: More Than a Name, It’s a Movement
              </span>
            </Fragment>
          }
          text7={
            <Fragment>
              <span className="home-text72">
                Explore how technology enhances your driving experience with
                LEPAS.
              </span>
            </Fragment>
          }
          text8={
            <Fragment>
              <span className="home-text73">5 min read</span>
            </Fragment>
          }
          text9={
            <Fragment>
              <span className="home-text74">
                Chery’s Next Leap: LEPAS Takes the Brand to New Heights
              </span>
            </Fragment>
          }
          text10={
            <Fragment>
              <span className="home-text75">
                Discover the elegance and innovation behind LEPAS&apos;s design
                philosophy.
              </span>
            </Fragment>
          }
          text11={
            <Fragment>
              <span className="home-text76">News</span>
            </Fragment>
          }
          text12={
            <Fragment>
              <span className="home-text77">News</span>
            </Fragment>
          }
          text13={
            <Fragment>
              <span className="home-text78">News</span>
            </Fragment>
          }
        ></News>
        <Footer
          text={
            <Fragment>
              <span className="home-text79">
                © 2025 LEPAS. All rights reserved.
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="home-text80">
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
          }
          text2={
            <Fragment>
              <span className="home-text84">Privacy Policy</span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="home-text85">Terms of Service</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="home-text86">Cookies Settings</span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="home-text87">EXPLORE</span>
            </Fragment>
          }
          text6={
            <Fragment>
              <span className="home-text88">About Us</span>
            </Fragment>
          }
          text7={
            <Fragment>
              <span className="home-text89">Our Models</span>
            </Fragment>
          }
          text8={
            <Fragment>
              <span className="home-text90">Contact Us</span>
            </Fragment>
          }
          text9={
            <Fragment>
              <span className="home-text91">Support Center</span>
            </Fragment>
          }
          text10={
            <Fragment>
              <span className="home-text92">Careers Page</span>
            </Fragment>
          }
          text11={
            <Fragment>
              <span className="home-text93">News Room</span>
            </Fragment>
          }
          text12={
            <Fragment>
              <span className="home-text94">Social Media</span>
            </Fragment>
          }
          text13={
            <Fragment>
              <span className="home-text95">Events Page</span>
            </Fragment>
          }
          text14={
            <Fragment>
              <span className="home-text96">Customer Stories</span>
            </Fragment>
          }
          text15={
            <Fragment>
              <span className="home-text97">FAQs Page</span>
            </Fragment>
          }
        ></Footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: hidden;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: #ffff;
          }
          .home-text10 {
            display: inline-block;
          }
          .home-text11 {
            display: inline-block;
          }
          .home-text12 {
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
          .home-text15 {
            display: inline-block;
          }
          .home-text16 {
            display: inline-block;
          }
          .home-text17 {
            display: inline-block;
          }
          .home-text18 {
            display: inline-block;
          }
          .home-text19 {
            display: inline-block;
          }
          .home-text20 {
            display: inline-block;
          }
          .home-text21 {
            display: inline-block;
          }
          .home-text22 {
            display: inline-block;
          }
          .home-text23 {
            display: inline-block;
          }
          .home-text24 {
            display: inline-block;
          }
          .home-text25 {
            display: inline-block;
          }
          .home-text26 {
            display: inline-block;
          }
          .home-text27 {
            display: inline-block;
          }
          .home-text28 {
            display: inline-block;
          }
          .home-text29 {
            display: inline-block;
          }
          .home-text30 {
            display: inline-block;
          }
          .home-text31 {
            display: inline-block;
          }
          .home-text32 {
            display: inline-block;
          }
          .home-text33 {
            display: inline-block;
          }
          .home-text34 {
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
          .home-text37 {
            display: inline-block;
          }
          .home-text38 {
            display: inline-block;
          }
          .home-text39 {
            display: inline-block;
          }
          .home-text40 {
            display: inline-block;
          }
          .home-text41 {
            display: inline-block;
          }
          .home-text42 {
            display: inline-block;
          }
          .home-text43 {
            display: inline-block;
          }
          .home-text44 {
            display: inline-block;
          }
          .home-text45 {
            display: inline-block;
          }
          .home-text46 {
            display: inline-block;
          }
          .home-text47 {
            display: inline-block;
          }
          .home-text48 {
            display: inline-block;
          }
          .home-text49 {
            display: inline-block;
          }
          .home-text50 {
            display: inline-block;
          }
          .home-text51 {
            display: inline-block;
          }
          .home-text52 {
            display: inline-block;
          }
          .home-text53 {
            display: inline-block;
          }
          .home-text54 {
            display: inline-block;
          }
          .home-text55 {
            display: inline-block;
          }
          .home-text56 {
            display: inline-block;
          }
          .home-text57 {
            display: inline-block;
          }
          .home-text58 {
            display: inline-block;
          }
          .home-text59 {
            display: inline-block;
          }
          .home-text60 {
            display: inline-block;
          }
          .home-text61 {
            display: inline-block;
          }
          .home-text62 {
            display: inline-block;
          }
          .home-text63 {
            display: inline-block;
          }
          .home-text64 {
            display: inline-block;
          }
          .home-text65 {
            display: inline-block;
          }
          .home-text66 {
            display: inline-block;
          }
          .home-text67 {
            display: inline-block;
          }
          .home-text68 {
            display: inline-block;
          }
          .home-text69 {
            display: inline-block;
          }
          .home-text70 {
            display: inline-block;
          }
          .home-text71 {
            display: inline-block;
          }
          .home-text72 {
            display: inline-block;
          }
          .home-text73 {
            display: inline-block;
          }
          .home-text74 {
            display: inline-block;
          }
          .home-text75 {
            display: inline-block;
          }
          .home-text76 {
            display: inline-block;
          }
          .home-text77 {
            display: inline-block;
          }
          .home-text78 {
            display: inline-block;
          }
          .home-text79 {
            display: inline-block;
          }
          .home-text80 {
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
          .home-text84 {
            display: inline-block;
          }
          .home-text85 {
            display: inline-block;
          }
          .home-text86 {
            display: inline-block;
          }
          .home-text87 {
            display: inline-block;
          }
          .home-text88 {
            display: inline-block;
          }
          .home-text89 {
            display: inline-block;
          }
          .home-text90 {
            display: inline-block;
          }
          .home-text91 {
            display: inline-block;
          }
          .home-text92 {
            display: inline-block;
          }
          .home-text93 {
            display: inline-block;
          }
          .home-text94 {
            display: inline-block;
          }
          .home-text95 {
            display: inline-block;
          }
          .home-text96 {
            display: inline-block;
          }
          .home-text97 {
            display: inline-block;
          }
          @media (max-width: 1600px) {
            .home-text34 {
              font-family: Arimo;
            }
            .home-text80 {
              font-family: Arimo;
            }
          }
          @media (max-width: 1200px) {
            .home-text34 {
              font-family: Arimo;
            }
            .home-text80 {
              font-family: Arimo;
            }
          }
          @media (max-width: 991px) {
            .home-text12 {
              font-size: 40px;
            }
            .home-text34 {
              color: rgb(12, 9, 2);
              font-size: 40px;
              font-family: Arimo;
              font-weight: 700;
              line-height: 120%;
              letter-spacing: 0.01em;
            }
            .home-text80 {
              color: #ffffff;
              font-size: 40px;
              font-family: Arimo;
              font-weight: 700;
              line-height: 120%;
              letter-spacing: 0.01em;
            }
          }
          @media (max-width: 767px) {
            .home-text12 {
              font-size: 32px;
            }
            .home-text34 {
              font-size: 32px;
              text-align: center;
            }
            .home-text80 {
              font-size: 32px;
              text-align: left;
            }
          }
          @media (max-width: 479px) {
            .home-text12 {
              color: rgb(12, 9, 2);
              height: 100%;
              font-size: 24px;
              min-height: 100%;
              line-height: 120%;
            }
            .home-text34 {
              font-size: 26px;
            }
            .home-text80 {
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

export default Home
