import LoadingComponent from "./LoadingComponent"

export default function ConditionalWrapper({ className, isLoaded, falsewrapper: Falsewrapper, children }) {
    return (!isLoaded ? <LoadingComponent isLoaded={isLoaded} className={className}>{children}</LoadingComponent> : <Falsewrapper className={className}>{children}</Falsewrapper>)
}