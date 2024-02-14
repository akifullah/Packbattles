import React from 'react'
import Button from '../components/Button/Button'
import "./Home.css";
import bgImage from "../assets/img/image 3.png";

import heroImg from "../assets/img/hero-image.png";

import pokemon from "../assets/img/pokemon.png";
import yuGi from "../assets/img/pngegg (35) 5.png";
import magic from "../assets/img/magic.png";
import digimon from "../assets/img/digimon.png";
import SectionHeader from '../components/SectionHeader/SectionHeader';
import PackCard from '../components/PackCard/PackCard';
import elipse from "../assets/img/Ellipse 5.png";

import upgradeImg from "../assets/img/image 20.png";
import upgradeImg1 from "../assets/img/Frame.png";
import upgradeImg2 from "../assets/img/image 29.png";

// PACK CARD DATA
import { PackCardData } from "../components/PackCardData.js"

const Home = () => {
    return (
        <>

            {/* HERO SECTION START */}
            <section className='hero-section'>
                <img className='h-bg-image' src={bgImage} alt="header bg image" />
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="hero-text">
                                <h1>An interesting and catchy title</h1>
                                <p>Lorem ipsum dolor sit amet consectetur. Urna risus a tempus velit sed turpis tellus. </p>
                                <div className="mt-5">
                                    <Button text={"Open Box"} url={"#"} />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7">
                            <div className="hero-img">
                                <img src={heroImg} alt="Pack images" width={"100%"} />
                            </div>
                        </div>

                    </div>
                </div>

                {/* LOGOS SECTION START */}
                <section className='logos'>
                    <div className="container">
                        <div className="row align-items-center">

                            <div className="col-md-3 col-6">
                                <div className="logo-card blind-normal">
                                    <img src={pokemon} alt="pokemon logo" />
                                </div>
                            </div>

                            <div className="col-md-3 col-6">
                                <div className="logo-card">
                                    <img src={yuGi} alt="yuGi logo" />
                                </div>
                            </div>

                            <div className="col-md-3 col-6">
                                <div className="logo-card">
                                    <img src={magic} alt="Magic logo" />
                                </div>
                            </div>

                            <div className="col-md-3 col-6">
                                <div className="logo-card">
                                    <img src={digimon} alt="digimon logo" />
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                {/* LOGOS SECTION END */}


            </section>
            {/* HERO SECTION END */}


            {/* FEATURED PACK SECTION START */}
            <section className='feature-pack'>
                <img className='elipse' src={elipse} alt='Elipse circle' />
                <SectionHeader heading={"Featured Packs"} btnText={"See More"} btnUrl={"#"} />
                <div className="container">
                    <div className="row pack-cards">
                        {
                            PackCardData.map((data, index) => (
                                <div className="col-lg-3 col-md-6 " key={index}>
                                    <PackCard text={data.text} active={data.active} img={data.img} url={data.url} />
                                </div>
                            ))
                        }

                    </div>
                </div>
            </section>
            {/* FEATURED PACK SECTION END */}

            {/* ROOM SECTION START */}
            <section className='room-section'>
                <img className='line-blur-img' src="./imgs/Rectangle 26.png" alt="" />
                <div className="container">


                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="room-text">
                                <h2>Upgrade Room</h2>
                                <p>Lorem ipsum dolor sit amet consectetur. Feugiat feugiat phasellus neque facilisi nec massa. Velit amet lectus ut pellentesque amet egestas ornare ipsum sed. Venenatis faucibus fermentum pellentesque egestas. Elementum at.</p>
                                <div className="mt-5">
                                    <Button text="Upgrade Cards" url="#" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7 my-5">
                            <div className="row justify-content-center text-center align-items-center">
                                <div className="col-3 ">
                                    <img src={upgradeImg} width={"100%"} alt="upgrade room img" />
                                </div>

                                <div className="col-6 text-center ">
                                    <img src={upgradeImg1} width={"100%"} alt="" />

                                    <button className='room-btn'>Upgrade</button>

                                </div>

                                <div className="col-3 ">
                                    <img src={upgradeImg2} width={"100%"} alt="" />
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="row flex-row-reverse align-items-center">
                        <div className="col-lg-5 ">
                            <div className="room-text">
                                <h2>Trade Cards</h2>
                                <p>Lorem ipsum dolor sit amet consectetur. Feugiat feugiat phasellus neque facilisi nec massa. Velit amet lectus ut pellentesque amet egestas ornare ipsum sed. Venenatis faucibus fermentum pellentesque egestas. Elementum at.</p>
                                <div className="mt-5">
                                    <Button text="Trade Cards" url="#" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7 my-5 pe-5">
                            <div className="row justify-content-center text-center align-items-center">
                                <div className="col-3 ">
                                    <img src={upgradeImg} width={"100%"} alt="upgrade room img" />
                                </div>

                                <div className="col-6 text-center ">
                                    <img src="./imgs/Group 40106.png" width={"100%"} alt="" />

                                    <button className='room-btn'>Trade</button>

                                </div>

                                <div className="col-3 ">
                                    <img src={upgradeImg2} width={"100%"} alt="" />
                                </div>
                            </div>
                        </div>

                    </div>

                    
                </div>
            <img className='line-blur-img2' src="./imgs/Rectangle 25.png" alt="" />
            </section>
            {/* ROOM SECTION END */}



        </>
    )
}

export default Home