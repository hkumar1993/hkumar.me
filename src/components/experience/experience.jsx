import React from 'react';
import Job from './job';

const Experience = () => {
    return (
        <section id="experience">
            <div className="content">
                <h2>Experience</h2>
                <ul className="experiences-list">
                    <Job
                        company="Google"
                        role="Software Engineer"
                        location="San Francisco, CA"
                        startTime="Aug 2021"
                        defaultOpen
                    >
                        <ul>
                            <li>
                                Working at Google Cloud - Looker
                            </li>
                            <li>
                                Primarily worked as a Front End Engineer working with React and Redux with TypeScript
                            </li>
                        </ul>
                    </Job>
                    <Job
                        company="Forio"
                        role="Software Engineer"
                        location="San Francisco, CA"
                        startTime="Feb 2018"
                        endTime="Jul 2021"
                    >
                        <ul>
                            <li>
                                Primarily worked as a Front End Engineer working with React and Redux.
                            </li>
                            <li>
                                Maintained and updated internal JavaScript libraries.
                            </li>
                            <li>
                                Created a Node.js based Command Line Interface (CLI) that generated our default project boilerplate as well as template components.
                            </li>
                            <li>
                                Helped improve general Accessibility Standards for projects.
                            </li>
                        </ul>
                    </Job>
                    <Job
                        company="Incitement"
                        role="Project Manager"
                        location="Kuala Lumpur, Malaysia"
                        startTime="Oct 2015"
                        endTime="Jan 2017"
                    >
                        <ul>
                            <li>
                                Designed and managed the production of over 1000 DIY solar powered lights.
                            </li>
                            <li>
                                Helped transition the company from a non-profit to a 7-figure social enterprise in Malaysia.
                            </li>
                            <li>
                                Managed all aspects of the event and building process.
                            </li>
                            <li>
                                Hosted 16 volunteer events, managed groups of 60 to 150 volunteers and staff per event.
                            </li>
                        </ul>
                    </Job>
                </ul>
            </div>
        </section>
    )
};

export default Experience;