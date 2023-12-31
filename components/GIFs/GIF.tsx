
const tenorAPI = "AIzaSyCoA4nh6PldUmVw7XA68-9Qal3O2BPexuo";

export async function featured() {
  try {
    return await fetch(`https://tenor.googleapis.com/v2/featured?key=${tenorAPI}&limit=8`)
    .then(res => res.json())
    .then(data => data.results);
  } catch (err) {
    return [];
  }
}

export async function searchGIF(keyword) {
  try {
    return await fetch(`https://tenor.googleapis.com/v2/search?key=${tenorAPI}&q=${keyword}&limit=8`)
    .then(res => res.json())
    .then(data => data.results);
  } catch (err) {
    return [];
  }
}

export async function getGIFByID(id) {
  try {
    return await fetch(`https://tenor.googleapis.com/v2/posts?ids=${id}&key=${tenorAPI}`)
    .then(res => res.json())
    .then(data => data.results);
  } catch (err) {
    return [];
  }
}