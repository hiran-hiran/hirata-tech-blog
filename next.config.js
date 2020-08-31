module.exports = {
    basePath: process.env.GITHUB_PAGES ? "/next-microcms-blog" : "",
    assetPrefix: process.env.GITHUB_PAGES ? "/next-microcms-blog" : "",
    env: {
        SLACK_WEBHOOK_URL: process.env.SLACK_WEBHOOK_URL,
    }
}