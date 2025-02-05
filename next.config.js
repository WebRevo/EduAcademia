/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ['cdn.builder.io', 'res.cloudinary.com', 'randomuser.me'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; img-src *; media-src *; script-src 'none'; sandbox;",
  },
};

module.exports = nextConfig;
