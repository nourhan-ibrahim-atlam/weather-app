import React from 'react'

export default function WeatherReducer(currentState , action) {
    switch (action.type) {
        case "get": {
            return action.payload;
        }

        default : {
            return currentState;
        }
    }
}
