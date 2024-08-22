import { Card,  } from "../components/card/Card";
import { ExternalLink } from "../style";
import { BullettedList, Li, SectionDetail, SectionHeader } from "../components/card/Card.style"

const ResumePage = () => {

    return (
        <div>
            <Card title="Education">
                <SectionHeader>Bachelors in Physics</SectionHeader>
                <SectionDetail>California Polytechnic State University - San Luis Obispo, CA</SectionDetail>
                <SectionDetail>September 2013 to December 2017</SectionDetail>

                <SectionHeader>Minor in Computer Science</SectionHeader>
                <SectionDetail>California Polytechnic State University - San Luis Obispo, CA</SectionDetail>
                <SectionDetail>September 2013 to December 2017</SectionDetail>
            </Card>
            <Card title="Work Experience">

                <SectionHeader>Subject Matter Expert Teacher</SectionHeader>
                <SectionDetail>BASIS - Scottsdale, AZ</SectionDetail>
                <SectionDetail>July 2020 to July 2024</SectionDetail>
                <BullettedList>
                    <Li>Developed curriculum for algebra and calculus based physics courses, an introductory Java course, and an introductory computational physics course</Li>
                    <Li>Effectively communicated material to students through both a virtual and in-person environments</Li>
                    <Li>Managed large number of students and created an enriching and collaborative work environment</Li>
                    <Li>Developed classroom tools to streamline grading process to give students quick feedback on their strengths and weaknesses</Li>
                    <Li>Designed and integrated simulations, labs, assignments, and projects to enable students hands-on opportunities to interact with complex material</Li>
                    <Li>Advised cybersecurity, robotics, physics, and science clubs on campus</Li>
                    <Li>Cultivated a positive and inviting classroom environment where students feel safe and confident to interact with each other and with me, to be their authentic selves, and to practice their curiosity</Li>
                </BullettedList>

                <SectionHeader>Software Engineer II</SectionHeader>
                <SectionDetail>Honeywell - Phoenix, AZ</SectionDetail>
                <SectionDetail>June 2018 to November 2019</SectionDetail>
                <BullettedList>
                    <Li>Developed and maintained the vertical guidance system in Flight Management Systems (using C++, Python, and Ada)</Li>
                    <Li>Quickly learned new processes, multiple existing code base structures, requirement standards, testing procedures, and software expectations</Li>
                    <Li>Designed and developed tools to automate register name mapping to decrease testing time</Li>
                    <Li>Efficiently collaborated with local and remote teammates</Li>
                    <Li>Thoroughly reproduced, tested, and solved systems and software issues</Li>
                    <Li>Patiently mentored new hires</Li>
                    <Li>Contributed mathematical methods to a patent for a new lateral guidance control design</Li>
                    <Li>Founded an Early Career Network to engage newly hired employees by supporting social and professional development of newly hired employees</Li>
                    <Li>Recruited new talent at tech conferences and lead technical interviews</Li>
                </BullettedList>

                <SectionHeader>Student Researcher</SectionHeader>
                <SectionDetail>California Polytechnic State Universit - San Luis Obispo, CA</SectionDetail>
                <SectionDetail>September 2015 to December 2017</SectionDetail>
                <BullettedList>
                    <Li>Designed and developed a software model to explore memory development and detection in soft matter physics (using Python, Cython, NumPy, SciPy, MatplotLib)</Li>
                    <Li>Effectively worked in an independent setting with minimal oversight and instruction</Li>
                    <Li>Implemented concepts from rigorous technical papers</Li>
                    <Li>Documented results that have been featured in scientific pubLications</Li>
                    <Li>Designed a model that reduced the number of operations and process time using complex mathematical models and data structures</Li>
                    <Li>Implemented version control (Git, GitHub)</Li>
                    <Li>Summarized results, created visuaLizations, and communicated information at scientific conferences</Li>
                </BullettedList>

                <SectionHeader>Software Engineer Intern</SectionHeader>
                <SectionDetail>Jupyter - San Luis Obispo, CA</SectionDetail>
                <SectionDetail>May 2017 to September 2017</SectionDetail>
                <BullettedList>
                    <Li>Developed a native application for the JupyterLab IDE to reduce the time and complexity of setting up programming tools (using TypeScript, Node.js, NPM)</Li>
                    <Li>Advised and implemented new features, provided quick and accurate fixes on reported issues, and led and conducted user testing</Li>
                    <Li>Effectively communicated and collaborated with a team of local and remote contributors (using Git, GitHub)</Li>
                    <Li>Demonstrated the new application and communicated its impact with customers at a technical conference</Li>
                </BullettedList>

                <SectionHeader>Student Researcher</SectionHeader>
                <SectionDetail>UC Davis - Davis, CA</SectionDetail>
                <SectionDetail>June 2016 to September 2016</SectionDetail>
                <BullettedList>
                    <Li>Developed a software model to simulate and analyze localization of quantum particles in condensed matter quantum physics (using C, Python, LAPack)</Li>
                    <Li>Collaborated closely with a team of local and remote technical experts to quickly understand and expand on the topics of interest</Li>
                    <Li>Implemented mathematical models and computational methods to numerically solve complex problems</Li>
                    <Li>Parallelized processes to improve run time of matrix mathematics (using OpenMP)</Li>
                    <Li>Gathered, interpreted, and presented results to a panel of technical experts and peers</Li>
                </BullettedList>
                
            </Card>
            <Card title="Skills">
                <SectionHeader>Programming Languages</SectionHeader>
                <BullettedList>
                    <Li>Java</Li>
                    <Li>JavaScript/TypeScript</Li>
                    <Li>React</Li>
                    <Li>NextJS</Li>
                    <Li>Python</Li>
                    <Li>MatPlotLib</Li>
                    <Li>Numpy</Li>
                    <Li>C</Li>
                    <Li>MySQL</Li>
                    <Li>HTML/CSS</Li>
                </BullettedList>
            </Card>

        </div>
    )
}

export default ResumePage;