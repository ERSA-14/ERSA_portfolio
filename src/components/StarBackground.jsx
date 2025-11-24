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
    },[]);

    const generateStars = () => {
        const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 14083);
        const newStars = [];
        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id:i,
                size : Math.random() * 2  ,
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
                size : Math.random() * 2 + 0.5,
                x : Math.random() * 90,
                y : Math.random() * 40,
                delay : Math.random() * 17,
                animationDuration : Math.random() * 3 + 3,
            });
        }
        setMeteors(newMeteors);
    };

    const generateMoon = () => {
        const newMoon = {
            id:0,
            size : Math.random() * 2 + 0.8,
            x : Math.random() * 29,
            y : Math.random() * 29,
            delay : Math.random() * 15,
            animationDuration : Math.random() * 3 + 3,
        };
        setMoon(newMoon);
    };

    const fetchWeather = async () => {
        try {
            console.log('fetchWeather called');
            console.log('navigator.geolocation available:', !!navigator.geolocation);
            
            if (navigator.geolocation) {
                console.log('Requesting geolocation...');
                navigator.geolocation.getCurrentPosition(
                    async (position) => {
                        const { latitude, longitude } = position.coords;
                        console.log('Got location:', latitude, longitude);
                        const response = await fetch(
                            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
                        );
                        console.log('API response:', response);
                        if (response.ok) {
                            const data = await response.json();
                            console.log('Weather data:', data);
                            setTemperature(Math.round(data.current_weather.temperature));
                        } else {
                            setTemperature('27°C'); 
                            console.log("Rate limited with meteo api");
                        }
                    },
                    (error) => {
                        console.log('Geolocation error:', error.code, error.message);
                        setTemperature('27°C'); 
                        console.log("Location denied, so default temp");
                    }
                );
            } else {
                setTemperature('27°C'); 
                console.log("Location not supported, so default temp");
            }
        } catch (error) {
            console.log("Error fetching weather data", error);
            setTemperature('27°C');
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
                width: meteor.size * 30 + "px",
                height: meteor.size * 1.2 + "px",
                animationDelay: meteor.delay + "s",
                animationDuration: meteor.animationDuration + "s",
            }}>
            </div>
        ))}
        
        {moon && (
            <div 
                className='moon'
                onClick={() => window.open('https://www.google.com/search?q=weather+today', 'weatherWindow', 'width=800,height=600,left=200,top=100')}
                style={{
                    left: moon.x + "%",
                    top: moon.y + "%",
                    width: "45px",
                    height: "45px",
                    background: 'radial-gradient(circle at 30% 30%, #ffffff 0%, #fefefe 20%, #fef9e7 40%, #fae17dff 70%, #fae17dff 100%)',
                    boxShadow: `
                        0 0 60px 20px rgba(252, 211, 77, 0.3),
                        0 0 100px 40px rgba(254, 243, 199, 0.2),
                        0 0 140px 60px rgba(254, 249, 231, 0.1),
                        inset -15px -15px 30px rgba(180, 130, 70, 0.15),
                        inset 10px 10px 25px rgba(255, 255, 255, 0.4),
                        inset -5px -5px 15px rgba(0, 0, 0, 0.05)
                    `,
                    border: '1px solid rgba(254, 243, 199, 0.05)',
                    pointerEvents: 'auto',
                }}
            >
                <span className='text-xs font-bold text-black' style={{ textShadow: '0 1px 2px rgba(255,255,255,0.8)' }}>
                    {temperature !== null ? (typeof temperature === 'number' ? `${temperature}°C` : temperature) : '27°C'}
                </span>

            </div>
        )}
    </div>
  )
};
