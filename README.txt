Hi team,


With this assignment, my objective was to go the extra mile and build a generalised solution that could easily wrap itself around any UI components that are styled, and generate
a loading screen animation for the same.


I was excited by this line in the problem statement: 

"The ideal case would be to be able to wrap any component with your Loader
component and it just magically works. This however might not be achievable within the scope of this assignment, and
hence you can define the right props that would need to be provided to achieve the required result." 

And I wanted to build as close to the ideal case as I could given the time constraints. 


------ I had a lot of fun building this component, and got to learn as well. In order to view the UIs, just navigate to the "App.jsx" file, and go to lines 51 and 52. 

1. Comment line 52 and make sure 51 is uncommented. This will render the 1st UI.

2. Comment line 51 and make sure 52 is uncommented. This will render the 2nd UI.

3. Make sure you have network throttling on in Chrome developer tools, and set it to "Fast 3G" or "Slow 3G"

4. I have also included screen recordings for both the UIs and their loading animation in Slow and Fast 3G modes. 


------ Outlining the thought process while building this:

1. The first step was to fetch data from an API endpoint- I have used "https://randomuser.me/api" that returns a JSON object containing information about a fictional person. 

2. I then collected relevant fields like photo, name, surname, age and stored them as state variables. 

3. There is an additional state variable called 'isLoaded' which is responsible for determining wheteher the async call is completed or not. 

4. The 2 UIs are defined in the files "Card.jsx" and "Card2.jsx"

5. My loader component can be thought of as a 2 part-approach:
    a. The first part is a wrapper component called ConditionalWrapper that determines whether to load the actual LoadingComponent or the post-loaded JSX component (based on the value
        of isLoaded)
    b. If isLoaded == false, we then go into the LoadingComponent, where we add the styling classes to render the loading animation
    c. The 2 most commonly fetched elements from APIs are images and text, and so those are the 2 I have accounted for in this challenge
    d. Every element (regardless of image or not) gets a "skeleton" CSS class to display the loading effect. Non-image components additionaly get a "skeleton-text" class to render as
        2 and a half lines of text skeletons
    e. My solution also accounts for nested elements, and recursively resolves them into the loading components to be rendered
    
6.  In order to apply the loading effect to any element, all one has to do is wrap it around the ConditionalWrapper element like so:

    <ConditionalWrapper className="product-info" falsewrapper="div" isLoaded={isLoaded}>
        {children}
    </ConditionalWrapper>

    Here, we are passing the CSS classes that are to be applied to the loading animation components as well as the post-loading JSX.
    We are also passing what we want the wrapping JSX element to be once the async call completes, that is passed as "falseWrapper".


7. Inside ConditionalWrapper, we are checking for the condition {!isLoaded}. If it returns true, meaning isLoaded = false, we wrap the children around our Loading component, 
    else the actual JSX.

8. The LoadingComponent, makes a decision on what to render based on if the child element is an image -> then it shows loading animation based on the image's style, 
    another React component (to account for nested JSX) -> resolve recursively,
    or text elements -> return 2.5 lines of text 

9. You can see the Component is adaptable to any additonal UI elements to provided they have a styled class associated to them. This can be verified by cloning any of the children 
    components refreshing the browser


------ There are some ways of making this more customisable in the future:

1. I would incorporate the ability to just add customisable lines of the loading skeleton instead of the default 2.5
2. Currently, there has to be a styling class applied to the elements to be rendered, and the styling cannot be done inline. I would improve this by allowing for inline styles
    and default styles in case none are mentioned 