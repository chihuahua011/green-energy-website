import React from 'react';
import "./faq.scss";
import Panel from '../Panel/Panel';

function Faq() {
  return (
    <>
        <section className="faq">
            <div className="container">
                <div className="col-7 panels-cont">
                    <div className="flex py-1 pl-1">
                        <Panel header={
                            <p>What types of renewable energy solutions does your company provide?</p>
                        } content={
                            <p>
                                Our company specializes in a variety of renewable energy solutions 
                                designed to meet diverse needs and preferences. From solar power and wind 
                                energy to hydroelectric and geothermal solutions, we offer a comprehensive 
                                range of sustainable options tailored to both residential and commercial 
                                settings. Whether you're looking to reduce your carbon footprint, lower 
                                energy costs, or simply embrace cleaner, more efficient power sources, 
                                our team is here to guide you through the process and help you find the 
                                perfect renewable energy solution for your unique requirements.
                            </p>
                        }></Panel>
                        <Panel header={
                            <p>How can I determine if my property is suitable for solar panel installation?</p>
                        } content={
                            <p>
                                Determining the suitability of your property for solar panel installation 
                                involves several factors. Firstly, consider the orientation and tilt of 
                                your roof to ensure it receives sufficient sunlight throughout the day. 
                                Ideally, your roof should face south and have minimal shading from trees 
                                or nearby structures. Additionally, assess the structural integrity of 
                                your roof to ensure it can support the weight of solar panels. Our team 
                                of experts can conduct a thorough assessment, taking into account your 
                                property's location, energy needs, and potential obstacles to provide 
                                personalized recommendations for solar panel installation.
                            </p>
                        }></Panel>
                        <Panel header={
                            <p>What are the benefits of switching to renewable energy sources?</p>
                        } content={
                            <p>
                                Switching to renewable energy sources offers a multitude of benefits 
                                for both individuals and the environment. Firstly, renewable energy helps 
                                reduce greenhouse gas emissions, mitigating the impacts of climate change 
                                and improving air quality. Additionally, renewable energy sources like solar 
                                and wind power are inexhaustible, providing a sustainable alternative to 
                                finite fossil fuels. By embracing renewables, individuals and businesses 
                                can also lower their energy bills over time, as well as create local jobs and 
                                stimulate economic growth in the renewable energy sector. Overall, making 
                                the switch to renewables is a win-win solution for a cleaner, more sustainable 
                                future.
                            </p>
                        }></Panel>
                        <Panel header={
                            <p>Are there any government incentives available for installing renewable energy systems?</p>
                        } content={
                            <p>
                                Yes, there are several government incentives available for installing 
                                renewable energy systems. These incentives vary depending on your location 
                                and the type of renewable energy system you're installing. Common incentives 
                                include tax credits, rebates, grants, and net metering programs. Tax credits 
                                can provide significant savings on your federal or state income taxes, 
                                while rebates offer direct financial incentives for purchasing and installing 
                                renewable energy equipment. Grants may be available for specific projects 
                                or initiatives aimed at promoting renewable energy adoption. Additionally, 
                                net metering programs allow you to receive credits for excess electricity 
                                generated by your renewable energy system, which can offset your energy costs. 
                                Be sure to research available incentives in your area and consult with a 
                                qualified professional to maximize your savings.
                            </p>
                        }></Panel>
                        <Panel header={
                            <p>How long does the installation process typically take for solar panels?</p>
                        } content={
                            <p>
                                The installation process for solar panels typically takes anywhere from 
                                one to three days, depending on various factors such as the size of the 
                                solar system, the complexity of the installation, and the availability of 
                                equipment and manpower. Initially, our team will conduct a site assessment 
                                to determine the optimal placement of the solar panels and assess any 
                                potential obstacles. Once the design is finalized and necessary permits are 
                                obtained, our installation team will begin mounting the solar panels on 
                                your roof or ground-mounted system. Electrical wiring and connection to your 
                                home's electrical system will also be completed during this process. Finally, 
                                our technicians will perform a series of tests to ensure that the system is 
                                functioning properly and provide you with instructions on monitoring and 
                                maintaining your solar panels for optimal performance.
                            </p>
                        }></Panel>
                    </div>
                </div>
                <div className="col-5 faq-text">
                    <div className='flex py-1'>
                        <h4>FAQ</h4>
                        <p className='mb-2'>We have prepared answers to the most frequently asked questions for you.</p>
                        <span className="faq-img"></span>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Faq