import React, { useState, useMemo, forwardRef, useEffect, useRef, useCallback } from "react"
import { graphql, useStaticQuery } from "gatsby"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import "swiper/css/free-mode";

import "./style.scss";

import { PROJECTS } from "../../lib/constants";
import { Project } from "./Project";
import { ProjectPhoto } from "./ProjectPhoto";
import { Controllers } from "../../lib/components/Controllers";
import { Eye } from "../../lib/components/Eye";
import { StaticImage } from "gatsby-plugin-image";

export const Portfolio = forwardRef(({ className }, ref) => {
    const photoSwiper = useRef(null);
    const projectSwiper = useRef(null);

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

    useEffect(() => {
        photoSwiper.current.slideTo(curProjIdx);
        projectSwiper.current.slideTo(curProjIdx);
    }, [curProjIdx])

    const decrement = useCallback(() => {
        setCurProjIdx((prev) => {
            if (prev === 0) return PROJECTS.length - 1
            else return prev - 1;
        });
    }, [])

    const increment = useCallback(() => {
        setCurProjIdx((prev) => {
            if (prev === PROJECTS.length - 1) return 0
            else return prev + 1;
        });
    }, [])

    return (
        <section ref={ref} id="portfolio" data-name="portfolio" className={className + " portfolio"}>
            <div className="portfolio__info">
                <h2 className="portfolio__title">Портфолио</h2>
                <Eye className="portfolio__eye" />
                <ul className="portfolio__projects">
                    <Project project={curProj} image={images[curProjIdx]} />
                </ul>
                <Swiper
                    onSwiper={(swiper) => photoSwiper.current = swiper}
                    onSlideChange={(swiper) => setCurProjIdx(swiper.activeIndex) }
                    slidesPerView={1}
                    className="portfolio__mobilePhoto"
                >
                    <SwiperSlide><StaticImage src="../../images/portfolio_1.png" alt="Take a Place: мобильное приложение для поиска, бронирования и оплаты мест в коворкингах" /></SwiperSlide>
                    <SwiperSlide><StaticImage src="../../images/portfolio_2.png" alt="ПоВоенке: сервис для ипотеки" /></SwiperSlide>
                    <SwiperSlide><StaticImage src="../../images/portfolio_3.png" alt="RDW Computers: веб-приложение для заказа конфигураций компьютерного и серверного оборудования" /></SwiperSlide>
                    <SwiperSlide><StaticImage src="../../images/portfolio_4.png" alt="Farm.io: децентрализованное веб-приложение для проведения киберспортивных матчей" /></SwiperSlide>
                </Swiper>
                <Controllers className="portfolio__controllers" decrement={decrement} increment={increment} />
                <div className="portfolio__list projectList">
                    <h3 className="projectList__title">Наши работы</h3>
                    <Swiper
                        onSwiper={(swiper) => projectSwiper.current = swiper}
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
                <ProjectPhoto project={curProjIdx} />
            </div>
        </section>
    )
})