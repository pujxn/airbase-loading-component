import React from "react";
import ConditionalWrapper from "./ConditionalWrapper";
export default function LoadingComponent({ children, className, isLoaded }) {

    let skeletonChildren = [], index = 0;

    if (isLoaded == false) {
        if (children.length == undefined) { //For when there are 0 or 1 children of the component
            if (children.type == undefined) { //For when there are 0 children, nothing is to be rendered
                skeletonChildren = [];
            }
            else { //For when there is 1 child
                let classesToAdd = "skeleton"

                if (typeof children.type == "function") {
                    skeletonChildren.push(<ConditionalWrapper className={children.props.className} key={index} isLoaded={isLoaded} falsewrapper={children.props.falsewrapper}>{children.props.children}</ConditionalWrapper>)
                }

                else if (children.type != "img") {
                    classesToAdd += " skeleton-text"

                    skeletonChildren.push(
                        <div key={index++} className={children.props && children.props.className ? children.props.className + " " + classesToAdd : classesToAdd}></div>
                    )
                    skeletonChildren.push(
                        <div key={index++} className={children.props && children.props.className ? children.props.className + " " + classesToAdd : classesToAdd}></div>
                    )
                    skeletonChildren.push(
                        <div key={index++} className={children.props && children.props.className ? children.props.className + " " + classesToAdd : classesToAdd}></div>
                    )
                    index = 0;
                }
                else {
                    skeletonChildren.push(<img key={index} className={children.props && children.props.className ? children.props.className + " " + classesToAdd : classesToAdd} />)

                }
            }
        }
        else {

            if (children.length == 0) {
                skeletonChildren.push(<div key={index++} className={children.props && children.props.className ? children.props.className + " skeleton skeleton-text" : "skeleton skeleton-text"}></div>)
                skeletonChildren.push(<div key={index++} className={children.props && children.props.className ? children.props.className + " skeleton skeleton-text" : "skeleton skeleton-text"}></div>)
                skeletonChildren.push(<div key={index++} className={children.props && children.props.className ? children.props.className + " skeleton skeleton-text" : "skeleton skeleton-text"}></div>)
            }
            else {
                skeletonChildren = children.map((child, idx) => {
                    if (typeof child.type == "function") {
                        return <ConditionalWrapper key={idx} className={child.props.className} falsewrapper={child.props.falsewrapper} isLoaded={isLoaded}>{child.props.children}</ConditionalWrapper>
                    }
                    else if (child.type != "img") {
                        return (
                            <div key={idx}>
                                <div className={child.props && child.props.className ? child.props.className + " skeleton skeleton-text" : "skeleton skeleton-text"}></div>
                                <div className={child.props && child.props.className ? child.props.className + " skeleton skeleton-text" : "skeleton skeleton-text"}></div>
                                <div className={child.props && child.props.className ? child.props.className + " skeleton skeleton-text" : "skeleton skeleton-text"}></div>
                            </div>
                        )
                    }
                    else {
                        return (
                            <img key={idx} className={child.props.className ? child.props.className + " skeleton" : "skeleton"} />
                        )
                    }
                })
            }
        }
    }

    return (
        <div className={className}>
            {!isLoaded ? skeletonChildren : children}
        </div>
    )
}