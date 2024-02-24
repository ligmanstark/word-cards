/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        REACT_APP_API_KEY:process.env.REACT_APP_API_KEY,
        REACT_APP_API_TEST_KEY:process.env.REACT_APP_API_TEST_KEY
    }
}

module.exports = nextConfig
