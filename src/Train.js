import React from 'react';

function Train(props) {
    return (
        <div className="train">
            <div className="train-info">
                <div className="time-group">
                    <div className="time-label">Scheduled</div>
                    <div className="time" data-testid="scheduled-time">{props.scheduledTime}</div>
                </div>
                <div className="time-group">
                    <div className="time-label">Expected</div>
                    <div className="time" data-testid="expected-time">{props.expectedTime}</div>
                </div>
            </div>
            <div className="status" data-testid="status">
                <div>STATUS</div>
            </div>
        </div>
    )
}

export default Train;