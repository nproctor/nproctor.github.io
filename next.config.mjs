/** @type {import('next').NextConfig} */
import createMDX from '@next/mdx'

const nextConfig = {
    output: "export",
    compiler: {
        styledComponents: true
    }
};

const withMDX = createMDX({
    options: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    extension: /\.(md|mdx)$/,
});

export default withMDX(nextConfig);
