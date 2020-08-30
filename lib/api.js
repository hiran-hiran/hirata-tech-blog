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
    const data = fetchAPI("blog")
    return data
}
export const getPost = async (id) => {
    const data = fetchAPI(`blog/${id}`)
    return data
}

export const getCategories = async () => {
    const data = fetchAPI("category")
    return data
}
