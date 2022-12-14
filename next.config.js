/** @type {import('next').NextConfig} */

const nextConfig = {
  // TODO: remove later
  images: {
    domains: ["i.pravatar.cc", "picsum.photos"],
  },
  reactStrictMode: true,
  swcMinify: true,
  env: {
    SITE: "http://localhost:3000",
    NEXTAUTH_URL: "http://localhost:3000",
  },
  async redirects() {
    return [
      // Uncomment this to redirect at maintenance
      // {
      //   source: "/:path*",
      //   destination: "/Err/UnderMaintenance",
      //   permanent: false,
      // },
      // {
      //   source: "/",
      //   has: [
      //     {
      //       type: "cookie",
      //       key: "authenticated",
      //       value: "true",
      //     },
      //   ],
      //   destination: "/Timeline",
      //   permanent: false,
      // },
      // FIXME: for some fucking reason this doesn't work. it redirects to /Timeline :|||||
      {
        source: "/",
        destination: "/Login",
        permanent: false,
      },

      // {
      //   source: "/AdminPanel",
      //   has: [
      //     {
      //       type: "cookie",
      //       key: "admin",
      //       value: "false",
      //     },
      //     {
      //       type: "cookie",
      //       key: "authenticated",
      //       value: "true",
      //     },
      //   ],
      //   permanent: false,
      //   destination: "/Err/notAdmin",
      // },
    ];
  },
};

module.exports = nextConfig;
