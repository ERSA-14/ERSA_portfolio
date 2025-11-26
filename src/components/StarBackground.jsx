import { useEffect, useState } from "react";


export const StarBackground = () => {
    const [stars,setStars] = useState([]);
    const [meteors,setMeteors] = useState([]);
    const [moon,setMoon] = useState(null);
    const [temperature, setTemperature] = useState(null);

    useEffect(() => {
        generateStars();
        generateMeteors();
        generateMoon();
        fetchWeather();

        const handleResize = () => {
            generateStars();
            generateMeteors();
            generateMoon();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    },[]);

    const generateStars = () => {
        const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 13500);
        const newStars = [];
        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id:i,
                size : Math.random() * 1.0 + 0.5 ,
                x : Math.random() * 100,
                y : Math.random() * 100,
                opacity : Math.random() * 0.5 + 0.5,
                animationDelay : Math.random() * 4,
            });
        }
        setStars(newStars);
    };

    const generateMeteors = () => {
        const numberOfMeteors = 4;
        const newMeteors = [];
        for (let i = 0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id:i,
                size : Math.random() * 1.5 + 0.5,
                x : Math.random() * 95,
                y : Math.random() * 15,
                delay : Math.random() * 17,
                animationDuration : Math.random() * 3.5 + 2.5,
            });
        }
        setMeteors(newMeteors);
    };

    const generateMoon = () => {
        const newMoon = {
            id:0,
            size : Math.random() * 2 + 0.8,
            x : 2,
            y : 8,
            delay : 15,
            animationDuration : 6,
        };
        setMoon(newMoon);
    };

    const fetchWeather = async () => {
        try {
            console.log('fetchWeather called');
            console.log('navigator.geolocation available:', !!navigator.geolocation);
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    async (position) => {
                        const { latitude, longitude } = position.coords;
                        console.log('Got location! this is respective to network (disable VPN or wifi for better results)',latitude,longitude);
                        const response = await fetch(
                            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
                        );
                        console.log('API response:', response);
                        if (response.ok) {
                            const data = await response.json();
                            console.log('Weather data:', data);
                            setTemperature(data.current_weather.temperature);
                        } else {
                            setTemperature(27); 
                            console.log("Rate limited with meteo api");
                        }
                    },
                    (error) => {
                        console.log('Geolocation error:', error.code, error.message);
                        setTemperature(27); 
                        console.log("Location denied, so default temp");
                    }
                );
            } else {
                setTemperature(27); 
                console.log("Location not supported, so default temp");
            }
        } catch (error) {
            console.log("Error fetching weather data", error);
            setTemperature(27);
        }
    };

  return (
    <div className='fixed inset-0 overflow-hidden pointer-events-none z-0'>

        {stars.map((star)=>(
            <div key={star.id} className='star animate-pulse-subtle' style={{
                left: star.x + "%",
                top: star.y + "%",
                width: star.size + "px",
                height: star.size + "px",
                opacity: star.opacity,
                animationDuration: star.animationDelay + "s",
            }}>
            </div>
        ))}

        {meteors.map((meteor)=>(
            <div key={meteor.id} className='meteor animate-meteor' style={{
                left: meteor.x + "%",
                top: meteor.y + "%",
                width: meteor.size * 48 + "px",
                height: meteor.size * 1.15 + "px",
                animationDelay: meteor.delay + "s",
                animationDuration: meteor.animationDuration + "s",
            }}>
            </div>
        ))}
        
        {moon && (
            <div 
                className='moon'
                onClick={() => window.open('https://www.google.com/search?q=weather+today', 'Weather_Window', 'width=750,height=550,left=200,top=100')}
                style={{
                    left: moon.x + "%",
                    top: moon.y + "%",
                    width: "50px",
                    height: "50px",
                    pointerEvents: 'auto',
                }}
            >
                <span className='text-sm font-bold text-black' style={{ textShadow: '0 1px 2px rgba(255, 255, 255, 0.87)' }}>
                    {temperature !== null ? (typeof temperature === 'number' ? `${temperature}°C` : temperature) : '27°C'}
                </span>

            </div>
        )}
    </div>
  )
};