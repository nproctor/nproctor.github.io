import { MDXRemote } from "next-mdx-remote/rsc";
import { Card } from "@/app/components/card/Card"
import { getAllFiles } from "../utils/getContents";
import remarkGfm from 'remark-gfm';
import { ProjectImg, ProjectLink, Tag } from "./page.style";


const ProjectPage = () => {
    const files = getAllFiles();
    return (
        <div>
                {files.map( (f, i) => {
                    return( 
                    <Card key={i} title={f.data.title}>
                        <MDXRemote options={{mdxOptions: {remarkPlugins: [remarkGfm]}}} source={f.content}/>
                        {f.data.img.map( (v,i) => <ProjectImg key={i} src={v}/>)}
                        <br></br>
                        <div><ProjectLink href={f.data.link}>{f.data.link}</ProjectLink></div>
                        <div><ProjectLink href={f.data.github}>{f.data.github}</ProjectLink></div>
                        <br></br>
                        {f.data.tags.map( (v,i) => <Tag key={i}>{v}</Tag>)}
                    </Card>
                )})}
        </div>
    )
}

export default ProjectPage;