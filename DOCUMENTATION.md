# Lilly Technical Challenge Documentation Template

## Approach

The key objective here is to display the data in a "user friendly" way, which means that my focus of developing the whole application will be to make it as user friendly as possible.

1. FIrst things first, test the data recieved from the backend, I used Postman for this, this way I had an idea of what data I needed to render/use; i cannot design a frontend without knowing whar data needs to be shown.
2. Step two, from the data listed, now design the frontend on Figma, however I would look at existing solutions and inspiration first on pinterest and dribbble to get an idea from people who are better than me.
3. Translate the figma design into React TSX code.
4. Create forms and funcitonality to send data to the backend.
5. Handle missing data in a user friendly way.

Going to be working in a professional manner using pull requests, and git industry standard protocols for commits.

Commit protocols used:

- feat: New feature
- fix: Bug fix
- docs: Documentation
- style: Formatting

## Objectives - Innovative Solutions

I have use Next.js, React.js, TailwindCSS which are all frameworks used to help me develop the applicatiom much faster, giving me more type to solve the problem and time saved on development, re usable components in react allow me to not use diplicated code and keep things as efficient as possible by creating components which could be re-used for various different use cases.

I am very proud of my search function, it uses the .filter() javascript method to filter out the data and keep only data which matches the search query, i used the useeffect hook to make it a real-time search too.

Using Shadcn (Component library) enabled me to save lots of time on designing UI, why re invent the wheel?

I am most proud of my filter/sort functions as this will majorly help with visualising the data to the user's liking, they can also sort based on filtered data!

I loved working on the backend, although I had not worked on a python backend before, after having gone through the backend, I was conifdent enough to develop the GetAverage API, and I had done it on the first go!

## Problems Faced

./start.sh did not work on my device as mentioned in the README, therefore I had a look at the file and see what commands were being ran, so I just ran them individually on my terminal fixing the issue.

Error updating medicine data -> When I sent items to the backend to update an item It always gave me an error from the backend 'OPTIONS /medicines/update HTTP/1.1" 200 OK
INFO: 127.0.0.1:59916 - "POST /medicines/update HTTP/1.1" 405 Method Not Allowed", so I had a look at the backend and realised that I am sending JSON data and they expect form data as mentioned under the function as a comment, so i converted my data to formdata before sending it to the backend rather than JSON and it worked.

Medicine name not updating -> Although I am able to update the price and the changes do take place, I cannot do the same for the name. I realised that this is because the name is used to index what to update, only the price is updatable.

useEffect(() => {
sortAsc
? setFilteredMedicines(medicines.sort((a, b) => a.price - b.price))
: setFilteredMedicines(medicines.sort((a, b) => b.price - a.price));
}, [sortAsc]);

^^^ I had an bug where the filter and sort did not work at the same time, but I realised that I was always sorting based on the original data 'medicines' rather than the filtered data 'FilteredMedicines'

During my development process I was using the 'frontend/design' branch as my main branch and always pushing code to it which is bad practice as code may cause erros on the main branch, I only realised much later that I did not have a main as my pushes directly pushed onto the branch without any pull requests. To fix this i created a main branch set it as the default branch (I googled how to do this), then I began working on different branches and creating pull requests to the main branch, although this is a small project I like to get into the industry standards habit.

When adding a medicine and submitting, the page does not refresh and dialog does not close and no messages are shown to the user that a medicine has been created. To fix this I just have to use more states.

I did not know how to sort an array based on a property using the .sort() javascript function so I looked it up on google and found W3Schools page which taught me, I ended up developing the sort feature fairly easily!

setFilteredMedicines(
filteredMedicines.sort((a, b) => b.price - a.price)
);

## Evaluation

I feel like I did great, I tried my best to list out as many use cases as possible and handle any potential errors that could occur like entering a wrong data type for form data, entering null or empty values, requests failing, error handling is essential to keep any app running and keep a smooth experience for the user, however I would say that the sort/filter functions definitely took much longer than rendering the UI.

If I had more time I would focus more on the styling, especially the responsiveness of the application so it can be used in any device and still having the ui looking great. A lot of the time I had to fetch the same data multiple times which is quite inefficient, to fix this I would use a state mangement library to have a state that any component would have access to, this would reduce "prop drilling" which can make my components confusing and harder to track.In addition, the prupose of React is to create re-usable components that have one specific function, however some of my components have multi-purpose I'd say, so I would definitely refactor some code.

There are a lot of opporutnities to make this application as efficient as possible one use case would not rendering the dialog component for each medicine, but only render it once if a medicine has been clicked and pass the medicine data on the dialog, I would definitely spend more time making my code efficient, readable and maintainable and adding comments.

I would focus a lot more on adding loading states, however I ran out of time and I had more deadlines therefore I left that for last and was unable to conplete it.
