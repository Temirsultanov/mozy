import React, { forwardRef, useRef } from "react";
import { useStaticQuery, graphql } from "gatsby";
import "./style.scss";

import { BRIEF_LINK } from "../../lib/constants";
import { EMPLOYEES } from "../../lib/constants";

import { Employee } from "./Employee";
import { Button } from "../../lib/components/Button";
import { Controllers } from "../../lib/components/Controllers";
import { Eye } from "../../lib/components/Eye";

import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const Employees = ({ className, employees, prevButton, nextButton }) => {
    return (
        <Swiper 
            className={"employees " + className}
            slidesPerView={"auto"}
            navigation={{
                prevEl: prevButton,
                nextEl: nextButton,
            }}
            freeMode={true}
            spaceBetween={20}
            breakpoints={{
                700: {
                    slidesPerView: 3,
                    freeMode: false,
                }
            }}
            modules={[Navigation, FreeMode]}
        >
            {employees.map(employee => (
                <SwiperSlide className="employees__item" key={employee.id}>
                    <Employee 
                        photo={employee.image} 
                        position={employee.position} 
                        name={employee.name} 
                        surname={employee.surname}
                    />
                </SwiperSlide>
                
            ))}
        </Swiper>
    )
}

export const Partnership = forwardRef(({ className, openContacts }, ref) => {
    const prevButton = useRef(null);
    const nextButton = useRef(null);

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
    const employees = EMPLOYEES.map(employee => {
        const edge = allFile.edges.find(edge => edge.node.name === employee.imageSrc);
        employee.image = edge ? edge.node.childImageSharp.gatsbyImageData : null;
        return employee;
    });

    return (
        <section ref={ref} id="partnership" data-name="partnership" className={"partnership " + className}>
            <div className="partnership__process">
                <h2 className="partnership__title">Процесс сотрудничества</h2>
                <ol>
                    <li>Заполните <a href={BRIEF_LINK} target="_blank" rel="noreferrer">бриф</a> или <a href="/#contacts">оставьте заявку</a></li>
                    <li>Мы свяжемся с вами и уточним детали</li>
                    <li>Вы решите, подходят ли вам условия</li>
                    <li>Бесплатно составим техническое задание, определим сроки и стоимость</li>
                </ol>
                <div className="partnership__buttonAndEye">
                    <Button onClick={openContacts}>Связаться с нами</Button>
                    <Eye className="partnership__eye"/>
                </div>
            </div>
            <div className="partnership__team">
                <h2 className="partnership__title">С вами будут работать</h2>
                <Employees className="partnership__employees" employees={employees} prevButton={prevButton.current} nextButton={nextButton.current}/>
                <Controllers decrement={() => {}} increment={() => {}} className="partnership__controllers" prevButtonRef={prevButton} nextButtonRef={nextButton} />
            </div>
        </section>
    )
})
