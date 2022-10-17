import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent/TimelineContent';
import ContentBox from './ContentBox';
import type { JobInfo }  from './ExperienceCards'
import type { IndexProp }  from './ExperienceCards'
import SingleJobCard from './ExperienceCards';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';


const data = [
    {
        role: 'Computer Science BSc',
        company: 'Technion',
        workPeriod: '2021 - Present',   
        description: [
            {
                title: 'Frontend Developer',
                desc: 'using Node & React in order to build growing new web application.'
            }
        ]
    },
    {
        role: 'Web Developer',
        company: 'Seekret',
        workPeriod: '2021',   
        description: [
            {
                title: 'Frontend Developer',
                desc: 'using Node & React in order to build growing new web application.'
            }
        ]
    },
    {
        role: 'Security Researcher',
        company: 'Upstream Security',
        workPeriod: '2020 – 2021',   
        description: [
            {
                title: 'Researching Vehicle’s security on multiple platforms',
                desc: 'in order to find security vulnerabilities. Inspection of in-vehicle & vehicle’s remote protocols. Gaining car control using utilization of UDS protocol & Looking for new ‘attack surfaces’ from vehicle’s in & out going data.'
            },
            {
                title: 'Researching Vehicle’s external devices & Ecosystems',
                desc: 'exploring In-car Entertainment Systems (Android systems) & external car devices(Unix based systems), looking forsecurity breaches, code execution & permission vulnerabilities.'
            }
        ]
    },
    {
        role: 'Senior Cyber Security Specialist',
        company: 'IDF - 8200 Unit',
        workPeriod: '2017 – 2019',   
        description: [
            {
                title: 'Hands on development experience',
                desc: 'working on many projects in varying sizes, using a variety of programming languages'
            },
            {
                title: 'Leading a massive project',
                desc: 'Responsible for project development, bringing new and creative ideas to the project t, monitoring product’s quality and keep it in the highest standards.'
            }
        ]
    },
    {
        role: 'Cyber Security Specialist',
        company: 'IDF - 8200 Unit',
        workPeriod: '2016 – 2017',   
        description: [
            {
                title: 'A diverse job that requires broad understanding',
                desc: 'and quick self-learning of many intelligence and technological issues.'
            },
            {
                title: '· Using network Analysis & windows internals deep understanding',
                desc: 'g in order to achieve team’s goals and complete cyber operations'
            }
        ]
    },


] as JobInfo[]


export default function ExperienceTimeline() {
    return (
    <ContentBox>
    <Timeline position="alternate">
        {data.map((job, index) => {
            const obj = {...job, index} as JobInfo & IndexProp
            return (
                <TimelineItem sx={{maxWidth: '70%', alignSelf: 'center'}}>
                <TimelineOppositeContent color="text.secondary">
                    {job.workPeriod}
          </TimelineOppositeContent>
        <TimelineSeparator>
        <TimelineDot variant="job" />
        <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent><SingleJobCard {...obj} /></TimelineContent>
    </TimelineItem>
            )
        }
            
        )}
    </Timeline>
    </ContentBox>
    )
}