import React, { useState, useMemo, forwardRef } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper";

import "./style.scss";

import { PROJECTS } from "../../lib/constants";
import { Project } from "./Project";
import { Controllers } from "../../lib/components/Controllers";
import { Eye } from "../../lib/components/Eye";

export const Portfolio = forwardRef(({ className }, ref) => {
    const { allFile } = useStaticQuery(graphql`
		{
            allFile {
                edges {
                  node {
                    childImageSharp {
                      gatsbyImageData(
                        quality: 50
                        outputPixelDensities: 2
                        placeholder: DOMINANT_COLOR
                      )
                    }
                    name
                  }
                }
              }
		}
	`);

    const images = PROJECTS.map(project => {
        const edge = allFile.edges.find(edge => edge.node.name === project.imgSrc);
        return edge ? edge.node.childImageSharp.gatsbyImageData : null;
    });

    const [curProjIdx, setCurProjIdx] = useState(0);
    const curProj = useMemo(() => {
        return PROJECTS[curProjIdx];
    }, [curProjIdx]);

    function decrement() {
        setCurProjIdx(() => {
            if (curProjIdx === 0) return PROJECTS.length - 1
            else return curProjIdx - 1;
        });
    }
    function increment() {
        setCurProjIdx(() => {
            if (curProjIdx === PROJECTS.length - 1) return 0
            else return curProjIdx + 1;
        });
    }

    return (
        <section ref={ref} id="portfolio" data-name="portfolio" className={className + " portfolio"}>
            <div className="portfolio__info">
                <h2 className="portfolio__title">Портфолио</h2>
                <Eye className="portfolio__eye" />
                <ul className="portfolio__projects">
                    <Project project={curProj} image={images[curProjIdx]} />
                </ul>
                <Controllers className="portfolio__controllers" decrement={decrement} increment={increment} />
                <div className="portfolio__list projectList">
                    <h3 className="projectList__title">Наши работы</h3>
                    <Swiper
                        slidesPerView={"auto"}
                        className="projectList__slider"
                    >
                        <SwiperSlide className={"projectList__item " + (curProjIdx === 0 ? "projectList__item-active" : "")} onClick={() => setCurProjIdx(0)}>
                            <span>01</span>
                            <span>{PROJECTS[0].name}</span>
                        </SwiperSlide>
                        <SwiperSlide className={"projectList__item " + (curProjIdx === 1 ? "projectList__item-active" : "")} onClick={() => setCurProjIdx(1)}>
                            <span>02</span>
                            <span>{PROJECTS[1].name}</span>
                        </SwiperSlide>
                        <SwiperSlide className={"projectList__item " + (curProjIdx === 2 ? "projectList__item-active" : "")} onClick={() => setCurProjIdx(2)}>
                            <span>03</span>
                            <span>{PROJECTS[2].name}</span>
                        </SwiperSlide>
                        <SwiperSlide className={"projectList__item " + (curProjIdx === 3 ? "projectList__item-active" : "")} onClick={() => setCurProjIdx(3)}>
                            <span>04</span>
                            <span>{PROJECTS[3].name}</span>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className="portfolio__photoWrapper">
                <GatsbyImage image={images[curProjIdx]} objectFit={"contain"} className="portfolio__photo" alt={"Фотография проекта: " + curProj.name} />
            </div>
        </section>
    )
})