enum Constants {
    INCREMENT_COUNT = 'INCREMENT_COUNT',
    DECREMENT_COUNT = 'DECREMENT_COUNT',
    FETCH_IMAGE = 'FETCH_IMAGE'
}

export interface HelloState {
    compiler: string;
    count: number;
    imageURL: string;
}

export interface IncrementCount {
    type: Constants.INCREMENT_COUNT;
}

export interface DecrementCount {
    type: Constants.DECREMENT_COUNT;
}

export interface FetchImage {
    type: Constants.FETCH_IMAGE;
}

export type CountAction = IncrementCount | DecrementCount | FetchImage;

export function incrementCount(): IncrementCount {
    return {
        type: Constants.INCREMENT_COUNT
    }
}

export function decrementCount(): DecrementCount {
    return {
        type: Constants.DECREMENT_COUNT
    }
}

export function fetchImage(): FetchImage {
    return {
        type: Constants.FETCH_IMAGE
    }
}

export default function reducer(state: HelloState, action: CountAction): HelloState {
    switch (action.type) {
        case Constants.INCREMENT_COUNT:
            return { ...state, count: state.count + 1 };
        case Constants.DECREMENT_COUNT:
            return { ...state, count: Math.max(1, state.count - 1) };
        case Constants.FETCH_IMAGE:
            return { ...state, imageURL: "https://pbs.twimg.com/profile_images/740489005435785217/h3fPxSs1_200x200.jpg" };
    }
    return state;
}
