import { CSSProperties } from "react";
import SyncLoader from "react-spinners/SyncLoader";
const LoadingPage = () => {

    const override: CSSProperties = {
        display: "block",
        margin: "0 auto",
        borderColor: "rgba(54, 155, 214, 1)",

    };

    const isLoading = true;


    return (
        <div style={{ paddingTop: '15rem', display: 'flex' }}>
            <SyncLoader
                color='rgba(54, 155, 214, 1)'
                loading={isLoading}
                cssOverride={override}
                size={10}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    )
}

export default LoadingPage