'use client'

import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { tokenState } from "../store/atoms/token";
import { Button } from "@nextui-org/react"
import  {useRouter} from "next/navigation"

export const Login = () => {
    const CLIENT_ID = "258d37b96a634d10bfd0d5411119e0d1";
    const REDIRECT_URI = "https://spotify-analyzer-one.vercel.app"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"

    const [token, setToken] = useRecoilState(tokenState);
    const  router = useRouter();

    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")

        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

            window.location.hash = ""
            setToken(token);
        }

        localStorage.setItem("access-token", token) ;

        if(token){
        router.push('/dashboard');
        }
        router.push('/login')

    }, [])

    return (
        <div className="App">
            <header className="">
                <h1>Spotify React</h1>
                <Button color="success">
                    <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
                </Button>
            </header>
        </div>
    );
}

export default Login;