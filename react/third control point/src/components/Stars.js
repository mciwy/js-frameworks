import React from 'react';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

const Stars = ({ rating }) => {
    const renderStars = () => {
        const stars = [];
        const activeStars = Math.round(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 1; i <= 5; i++) {
            let starClass = 'fa fa-star';

            if (i <= activeStars) {
                starClass += ' active';
            } else if (i === activeStars + 1 && hasHalfStar) {
                starClass += ' active-half';
            }

            stars.push(<span key={i} className={starClass}></span>);
        }

        return stars;
    };

    return <div className="stars">{renderStars()}</div>;
};

export default Stars;