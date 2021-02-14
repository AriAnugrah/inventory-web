import React, {useEffect, useState} from "react";


export default function Container(props) {
    const [errorState, setError] = useState(null);


    useEffect(() => {
        if (props) {
            setError(props.error);
        }
    }, [props.error]);


    const onErrorClick = () => {
        setError(null)
    }

    return (
        <div>
            {errorState && <div onClick={onErrorClick}>{errorState.message}</div>}
            { props.children }
        </div>
    );
};
