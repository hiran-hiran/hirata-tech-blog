import cheerio from 'cheerio';
import hljs from 'highlight.js'



const fetchAPI = async (query) => {
    const key = { headers: { "X-API-KEY": process.env.API_KEY } }
    const res = await fetch(process.env.END_POINT + query, key)
    const data = await res.json()
    if (data.errors) {
        console.error(json.errors)
        throw new Error('Failed to fetch API')
    }
    return data
}



export const getAllPosts = async () => {
    const data = await fetchAPI("blog")
    return data
}

export const getCategoryPosts = async (id) => {
    const data = await fetchAPI(`blog?filters=category[contains]${id}`)
    return data
}

export const getPost = async (id) => {
    const data = await fetchAPI(`blog/${id}`)

    //syntax highlight
    if (data.body) {
        const $ = cheerio.load(data.body)
        $('pre code').each((_, elm) => {
            const result = hljs.highlightAuto($(elm).text());
            $(elm).html(result.value);
            $(elm).addClass('hljs');
        });
        data.body = $.html()
    }

    return data
}

export const getCategories = async () => {
    const data = await fetchAPI("category")
    return data
}
