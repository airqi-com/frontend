'use client';

import React, { useState, useEffect } from 'react';
import { Map as MapGL } from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import { mapStyle, colorRange, initialData } from './config';
import { HeatmapLayer } from '@deck.gl/aggregation-layers';
import { TextLayer } from '@deck.gl/layers';

import { LinearInterpolator, TRANSITION_EVENTS } from '@deck.gl/core';
import axios from 'axios';

import DeckGL from '@deck.gl/react';

const Map = () => {

    // Amsterdam
    const lon = 4.9;
    const lat = 52.367;

    const viewState = {
        longitude: lon,
        latitude: lat,
        zoom: 7,
        pitch: 0,
        bearing: 0,
        transitionDuration: 1000,
        transitionInterpolator: new LinearInterpolator(),
        transitionInterruption: TRANSITION_EVENTS.BREAK
    };

    const [data, setData] = useState(initialData);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const params = new URLSearchParams({ lat, lon });
        axios.get(`/api/aqi/?${params}`)
            .then((response) => { setData(response.data.data); console.log(response.data.data) })
            .catch((error) => console.error('An error occurred while fetching data.', error));
    }, []);

    const handleViewStateChange = ({ viewState }) => {
        if (viewState.zoom < 6) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
    };

    return (
        <>
            <DeckGL initialViewState={viewState} controller={{ doubleClickZoom: false, keyboard: false }} onViewStateChange={handleViewStateChange}>
                <HeatmapLayer
                    id="heatmap-layer"
                    data={data}
                    getPosition={d => [d.lon, d.lat]}
                    getWeight={d => +d.aqi}
                    colorDomain={[50, 100, 150, 200, 300]}
                    colorRange={[colorRange.good, colorRange.fair, colorRange.moderate, colorRange.poor, colorRange.veryPoor]} />
                {isVisible && <TextLayer
                    id="text-layer"
                    data={data}
                    getSize={12}
                    getPosition={d => [d.lon, d.lat]}
                    getText={d => d.aqi}
                />}
                <MapGL reuseMaps mapLib={maplibregl} mapStyle={mapStyle} doubleClickZoom={false} />
            </DeckGL>
        </>
    );
};

export default Map;
