export default defineEventHandler((event) => {
  if (event.req.method === 'GET') {
    return {data: 'data'}// return blogs list;
  }
  if (event.req.method === 'POST') {
    // create a blog
    // return the blog;
  }
});