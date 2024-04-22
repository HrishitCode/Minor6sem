import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import chain2 from "../img/chain2.jpg";
import Wave from './Wave';
import { titleAnimation, fade, photoAnimation } from '../animation';
import "./newHome.css"
import Navbar from '@components/newNavbar';


const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  background-color: black;
  color: white;
`;

const Description = styled.div`
  flex: 1;
  font-family: 'Roboto', sans-serif;
  margin-top: 5rem;
`;

const Header = styled(motion.div)`
  /* Add your header styles here */
`;

const RegisterButton = styled(motion.a)`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  overflow: hidden;
  font-family: 'Roboto', sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: white;
  background-color: #1f2937;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover span:nth-child(1) {
    width: 15rem;
    height: 15rem;
  }

  &:hover span:nth-child(2) {
    opacity: 0.3;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  height: 100%;
  margin-top: -12rem;
  margin-right:2rem;
`;

const Hide = styled.div`
  /* Add your hide styles here */
`;

const GreenText = styled.span`
  color: green;
`;

const Homepage = () => {
  const [showWave, setShowWave] = useState(true);
  const [inputValue, setInputValue] = useState('');

  const container = {
    hidden: { x: -40 },
    show: {
      x: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut",
        staggerChildren: 0.2,
        when: "afterChildren",
      },
    },
  };

  const handleImageLoad = () => {
    setShowWave(false);
  };

  const onPageChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
    <Navbar />
    <Layout>
      <Description style={{ zIndex: 2 }}>
        <Header
          variants={container}
          initial="hidden"
          animate="show"
          className="title"
        >
          {/* Header content... */}
          <Hide>
            <motion.h2 variants={titleAnimation} style={{ fontSize: '5em',marginLeft:'5xl', fontWeight: 'normal' }}>Elevating security</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation} style={{ fontSize: '5em', fontWeight: 'normal' }}>
            through <GreenText>blockchain</GreenText>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation} style={{ fontSize: '4em', fontWeight: 'normal' }}>
              <span>document</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation} style={{ fontSize: '4em', fontWeight: 'normal' }}>
              <span><GreenText>Verification.</GreenText></span>
              <a 
                href="#_" 
                // onClick={handleSignupClick}
                className="relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-mono font-semibold tracking-tighter text-white bg-transparent rounded-lg group" // Adjusted padding here
                style={{ marginRight: '20px', paddingRight: '30px' }} // Add padding to the right
              >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-900 rounded-full group-hover:w-56 group-hover:h-56"></span>
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                <span className="relative text-4xl">Register</span> {/* Adjusted font size here */}
              </a>
            </motion.h2>
          </Hide>
        </Header>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <motion.p variants={fade} style={{ fontFamily: '"Arizonia", cursive', fontSize: '3em', fontWeight: 'normal' }}>
          <GreenText>...</GreenText>
        </motion.p>
      </Description>
      <ImageContainer style={{ zIndex: 2 }}>
        <motion.img
          variants={photoAnimation}
          initial="hidden"
          animate="show"
          src={chain2}
          alt="guy with a camera"
          style={{ height: '100%', opacity: 1 }}
          onLoad={handleImageLoad}
        />
      </ImageContainer>
      <Wave />
    </Layout>
    </>
  );
}

export default Homepage;
