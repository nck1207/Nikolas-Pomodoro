import React from 'react'
import classNames from "../utils/class-names";
import { minutesToDuration, secondsToDuration } from '../utils/duration'

export default function PomodoroDisplay({
    isDisplayed,
    session,
    focusDuration,
    breakDuration,
    remainingTime
}) {
    return (
        <div>
            {/* TODO: This area should show only when there is an active focus or break - i.e. the session is running or is paused */}
            <div className="row mb-2">
                <div className="col">
                    {/* TODO: Update message below to include current session (Focusing or On Break) total duration */}
                    {isDisplayed && <div><h2
                        data-testid="session-title">
                        {session?.label} for {(session?.label === 'Focusing') || (session === null) ? minutesToDuration(focusDuration) : minutesToDuration(breakDuration)} minutes
                    </h2>
                        {/* TODO: Update message below correctly format the time remaining in the current session */}
                        <p
                            className={classNames({
                                "lead": true,

                            })}
                            data-testid="session-sub-title">
                            {secondsToDuration(session?.timeRemaining)} remaining
                        </p> </div>}
                </div>
            </div>
            <div className="row mb-2">
                <div className="col">
                    <div className="progress" style={{ height: "20px" }}>
                        <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            aria-valuenow={remainingTime} // TODO: Increase aria-valuenow as elapsed time increases
                            style={{ width: `${remainingTime}%` }} // TODO: Increase width % as elapsed time increases
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}