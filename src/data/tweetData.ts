import { Tweet } from "@/types/tweet";
import { user } from "./userData";

export const tweet: Tweet = {
    id: 1,
    user: user,
    body: "Primeiro tweet de teste! 🚀",
    image: "https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW1hZ2VucyUyMGdyYXR1aXRhc3xlbnwwfHwwfHx8MA%3D%3D",
    likeCount: 12,
    commentCount: 4,
    retweetCount: 2,
    liked: false,
    retweeted: false,
    dataPost: new Date(2025,  8, 1, 10, 0, 0)
}