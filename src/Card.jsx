import LoadingComponent from "./LoadingComponent";
import ConditionalWrapper from "./ConditionalWrapper";

export default function Card({ isLoaded, image, text, name, surname }) {

    return (
        <div className="login-container">
            <ConditionalWrapper className="header-style" falsewrapper="header" isLoaded={isLoaded}>
                <img className="profile-img" src={image} />
                <h1 className="name-style">{name}</h1>
                <h1 className="name-style">{surname}</h1>
            </ConditionalWrapper>
            <ConditionalWrapper className="description" falsewrapper="div" isLoaded={isLoaded}>
                {text}
            </ConditionalWrapper >
            <footer className="card1-footer">Made by Pujan Parikh with 💖</footer>
        </div>
    )
}