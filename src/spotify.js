import React, { useEffect, useState } from "react";
import axios from "axios";

const CLIENT_ID = "d3c93f054ee0476f84757dc4d6c1962a";
const REDIRECT_URI = "http://localhost:5175/audio";
const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${REDIRECT_URI}&scope=streaming%20user-read-email%20user-read-private%20user-modify-playback-state`;


const SpotifyPlayer = () => {
    const [token, setToken] = useState(null);
    const [deviceId, setDeviceId] = useState(null);
    const [trackUri, setTrackUri] = useState(null);
    
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const token = hash.split('&')[0].split('=')[1];
            setToken(token);
            window.location.hash = '';
        }
    }, []);

    useEffect(() => {
        if (token) {
            getDevices();
        }
    }, [token]);

    const getDevices = async () => {
        const response = await axios.get('https://api.spotify.com/v1/me/player/devices', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        if (response.data.devices.length > 0) {
            setDeviceId(response.data.devices[0].id);
        }
    };

    const playTrack = async (uri) => {
        if (!deviceId || !token) return;

        await axios.put('https://api.spotify.com/v1/me/player/play?device_id=${deviceId}', {
            uris: [uri]
        }, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    };

    const fetchTrack = async () => {
        if (!token) return;

        const response = await axios.get('https://api.spotify.com/v1/tracks/{track_id}', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        setTrackUri(response.data.uri);
    };

    return (
        <div>
            {!token ? (
                <a href={AUTH_URL}>Login to Spotify</a>
            ) : (
                <div>
                    <h1>Spotify Player</h1>
                    <button onClick={fetchTrack}>Fetch Track</button>
                    <button onClick={() => trackUri && playTrack(trackUri)} disabled={!trackUri}>
                        Play Track
                    </button>
                </div>
            )}
        </div>
    );
};

export default SpotifyPlayer;
