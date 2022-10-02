import axios from 'axios'

export default async function objectDetect(image){
    const body = {
        "image": image
    }
    const url = "https://main-code-sprint-backend-chayhuixiang.endpoint.ainize.ai/scoreimgs";
    const response = await axios.post(url, body);
    return response
}