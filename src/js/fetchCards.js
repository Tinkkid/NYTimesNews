import axios from "axios";
export async function fetchNews(){
    const response = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=cat&api-key=OFKQy1otnJr8NActEXofA9Xa8yEIPWh7`)
    console.log(response.data.response.docs)
    return response.data.response.docs
}
