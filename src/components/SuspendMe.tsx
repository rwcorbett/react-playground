import React, { Suspense } from "react";

function fetchData() {
    // some other APIs that return dummy data
    // const getData = fetch('https://dummyjson.com/recipes')
    // const getData = fetch('https://jsonplaceholder.typicode.com/photos');
    // const getData = fetch('https://dummyapi.online/api/movies');
    // const getData = fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects');
    const getData = fetch('https://quote-garden.onrender.com/api/v3/quotes?limit=2000');
    return wrapPromise(getData);
}

/**
 * this is not my function TODO: add source
 * delay the passed promise until handler status
 * @param promise 
 * @returns void
 */
function wrapPromise(promise: Promise<{}>) {
    let status: string = 'pending';
    let response: {};

    const suspender = promise.then(
        (response) => { status = 'success'; response = response; },
        (error) => { status = 'error'; response = error; },
    );

    const handler: any = {
        pending: () => { throw suspender; },
        error: () => { throw response; },
        default: () => response,
    };

    const read = () => {
        const result = handler[status] ? handler[status]() : handler.default();
        return result;
    };

    return { read };
}

const resource = fetchData();

function Loading() {
    return <p className="p-3">🌀 Loading...</p>;
}

function DataFetching() {
    const data = resource.read();
    console.info("response object:", data);
    return (
        <>
            <p className="p-3">🏁 I was delayed, now I am loaded!</p>
        </>
    );
}

function SuspendMe() {
    return (
        <>
            <p>Suspense Example:</p>
            <Suspense fallback={<Loading />}>
                <DataFetching />
            </Suspense>
        </>
    );
}
export default SuspendMe;