export const getPagesCount = (posts) => {
	const pageLength = Math.ceil(posts.totalCount / 10);
	const pagesCount = Array.from(Array(pageLength).keys());

	return pagesCount;
};
