import LoadingComponent from "./LoadingComponent";
import ConditionalWrapper from "./ConditionalWrapper";
import './Card2.css'


export default function Card2({ isLoaded, image, text, name, surname }) {




    return (
        <div className="wrapper">
            <ConditionalWrapper falsewrapper="div" isLoaded={isLoaded}>
                <img src={image} className="product-img" />
                <ConditionalWrapper className="product-info" falsewrapper="div" isLoaded={isLoaded}>
                    <ConditionalWrapper className="product-text" falsewrapper="div" isLoaded={isLoaded}>
                        <h1>{`${name} ${surname}`}</h1>
                        <p className="paragraph-style" >{`${text} Below is ${name}'s latest capture:`}</p>
                        <img className="profile2-img" src="https://picsum.photos/200" />
                    </ConditionalWrapper >
                </ConditionalWrapper >
            </ConditionalWrapper >
            <footer className="card2-footer">Made by Pujan Parikh with 💖</footer>
        </div >
    )
}