/** @type {import('next').NextConfig} */
import WithMDX from '@next/mdx'

const nextConfig = {
    output: "export",
    compiler: {
        styledComponents: true
    }
};

const withMDX = WithMDX({
    options: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    extension: /\.(md|mdx)$/,
});

export default withMDX(nextConfig);
