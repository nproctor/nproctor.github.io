import { globSync } from 'glob';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { ProjectData } from './projects';

const getContentDirectory = () => {
    const root = process.cwd();
    return path.join(root, `src/content`)
;}

export const getContentFolders = () => {
    const directory = getContentDirectory();
    return globSync(
        [directory + `/*`],
        {
            absolute: false,
            cwd: directory
        }
    );
};

export const getFilenames = (slug: string) => {
    const directory = path.join(getContentDirectory());
    return globSync(
        [directory + `/**/${slug}/*.md`], 
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
        img: data.img,
        tags: data.tags
    }
    return {
        data: projectData,
        content: content,
    }
}

export const getAllFiles = (slug: string) => {
    const filenames = getFilenames(slug);
    return filenames.map( (filename) => {return getFile(filename)} );
}