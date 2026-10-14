import React, { useState}from "react";
import "./StopWatch.css";

const StopWatch = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    React.useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isRunning]);

    const start = () => setIsRunning(true);
    const stop = () => setIsRunning(false);
    const reset = () => {
        setTime(0);
        setIsRunning(false);
    };

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return (

        <div className="StopWatch">
            <div className="time-display">
                <h1>STOPWATCH</h1>

                <div className="timer">
                    {String(minutes).padStart(2, "0")}:
                    {String(seconds).padStart(2, "0")}
                </div>

                <div className="buttons">
                    <button className="start" onClick={start}>
                        Start
                    </button>
                    <button className="stop" onClick={stop}>
                        Stop
                    </button>
                    <button className="reset" onClick={reset}>
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StopWatch;