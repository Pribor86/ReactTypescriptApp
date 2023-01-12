import React from "react";
import EventI from "./interfaces/EventI";

interface EventInfoCardProps {
    selectedEvent: EventI | null;
}

export const EventInfoCard: React.FC<EventInfoCardProps> = (props) => {
    // console.log("EventInfoCard: ", props.event);

    // let filteredImages = props.event.images.filter((image) => {
    //     return image.url.includes('RETINA_LANDSCAPE_16_9') && !image.fallback;
    //
    // })
    // if (filteredImages.length === 0) {
    //     filteredImages = props.event.images.filter((image) => {
    //         return image.url.includes('RETINA_PORTRAIT_16_9') && !image.fallback;
    //     })
    // }
    // if (filteredImages.length === 0) {
    //     filteredImages = props.event.images.filter((image) => {
    //         return !image.fallback && image.width > 300;
    //     })
    // }

    return (
        <div className="event-info-card">
            {props.selectedEvent ? (
            <div className="event-info-card-wrapper">

                <h2>{props.selectedEvent.name}</h2>
                <p>{props.selectedEvent.dates.start.localDate} @ {props.selectedEvent.dates.start.localTime}</p>
                {props.selectedEvent._embedded.venues.length > 0 ? (
                    <p>{props.selectedEvent._embedded.venues[0].name}, {props.selectedEvent._embedded.venues[0].city.name}, {props.selectedEvent._embedded.venues[0].country.name}</p>
                ) : (
                    <p>Location not available</p>
                )}

                {/*<img src={filteredImages[0].url} alt={props.event.name} />*/}
            </div>
            ) : null}
        </div>
    );
}