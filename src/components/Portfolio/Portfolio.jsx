import React, { useState, useMemo, forwardRef } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

import "./style.scss";
import { projects } from "../../lib/constants";
import { Eye } from "../../lib/components/Eye";
import { Controllers } from "./Controllers";
import { Project } from "./Project";

export const Portfolio = forwardRef(({ className }, ref) => {
    const { allFile } = useStaticQuery(graphql`
		{
            allFile {
                edges {
                  node {
                    childImageSharp {
                        gatsbyImageData(quality: 80, outputPixelDensities: 2)
                    }
                    name
                  }
                }
            }
		}
	`);

    const images = projects.map(project => {
        const edge = allFile.edges.find(edge => edge.node.name === project.imgSrc);
        return edge ? edge.node.childImageSharp.gatsbyImageData : null;  
    });

    const [curProjIdx, setCurProjIdx] = useState(0);
    const curProj = useMemo(() => {
        return projects[curProjIdx];
    }, [curProjIdx]);
    
    function decrement() {
        setCurProjIdx(() => {
            if (curProjIdx === 0) return projects.length - 1
            else return curProjIdx - 1;
        });
    }
    function increment() {
        setCurProjIdx(() => {
            if (curProjIdx === projects.length - 1) return 0
            else return curProjIdx + 1;
        });
    }

    return (
        <section ref={ref} className={className + " portfolio"}>
            <div className="portfolio__info">
                <h4 className="portfolio__smallTitle">Our Works</h4>
                <h2 className="portfolio__title">Наши работы</h2>
                <ul className="portfolio__desktop">
                    <Project number={curProjIdx + 1} project={curProj} image={images[curProjIdx]}></Project>
                </ul>
                <ul className="portfolio__mobile">
                    {projects.map((project, index) => (
                        <Project key={project.name} number={index + 1} project={project} image={images[index]}></Project>
                    ))}
                </ul>
                <div className="portfolio__counter">
                    <span className="portfolio__currentNumber">0{curProjIdx + 1}</span>
                    <span className="portfolio__countNumber">04</span>
                </div>
                <div className="portfolio__line"></div>
            </div>
            <div className="portfolio__photoSection">
                <div className="portfolio__photoWrapper">
                    <GatsbyImage image={images[curProjIdx]} className="portfolio__photo" alt={"Фотография проекта: " + curProj.name} />
                </div>
                <p className="portfolio__type">{curProj.field}</p>
            </div>
            <Eye className="portfolio__eye" dark={true} />
            <Controllers className="portfolio__controllers" decrement={decrement} increment={increment} />
        </section>
    )
})