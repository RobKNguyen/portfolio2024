"use client"
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import ProjectInfo from "./components/ProjectInfo";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Hero from "./components/hero";
import { LinkProps } from './helper/types';
import { GetServerSideProps } from 'next';
import fs from 'fs';
import path from 'path';

const Home = () => {

  const [data, setData] = useState<LinkProps>([]);

  useEffect(() => {
    async function getData() {
      try {
      const res = await fetch('/data/data.json');
      const resData: LinkProps = await res.json();
      setData(resData.heroLinks);
      console.log(resData);
      } catch(error) {
        console.error('Error fetching data: ', error);
      }
    }
    
    getData();
  }, []);

  return (
    <div>
      <div className="home-frame---projects">
        <div className="portfolio">
          <Navbar />
          <div className="container">
            <Hero data={data} />
          </div>
        </div>
        <ProjectInfo />
        <Footer />
      </div>

    </div>
  );
}

export default Home;