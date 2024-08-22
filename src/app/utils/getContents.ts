import { globSync } from 'glob';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { ProjectData } from './projects';

const getContentDirectory = () => {
    const root = process.cwd();
    return path.join(root, `src/content/projects`)
}

export const getFilenames = () => {
    const directory = getContentDirectory();
    return globSync(
        [directory + '/*.md'], 
        {
            absolute: false,
            cwd: directory,
        }
    );
};

export const getFile = (filename: string) => {
    const basePath = path.join(getContentDirectory(), filename)
    const markdownWithMeta = fs.readFileSync(basePath, 'utf-8')
    const { data, content } = matter(markdownWithMeta)
    const projectData: ProjectData = {
        title: data.title,
        description: data.description,
        link: data.link,
        github: data.github,
        tags: data.tags
    }
    return {
        data: projectData,
        content: content,
    }
}

export const getAllFiles = () => {
    const filenames = getFilenames();
    return filenames.map( (filename) => {return getFile(filename)} );
}