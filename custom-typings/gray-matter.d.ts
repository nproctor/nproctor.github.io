declare module 'gray-matter'{
    export default function matter(input: Object | string, options?: Object) : {data: any, content: string};
}