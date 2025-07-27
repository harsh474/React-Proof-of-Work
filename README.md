my_button.jsx
https://react.dev/learn/preserving-and-resetting-state
https://react.dev/learn 

1.let say currently you were rendering MyButton compontent , there was an state assigned to it , let say click you about in navigation bar then now this MyButton will be deleted from dom state which was holding value of this component will  also erase, when again click on mybutton the from start then component will render it self again a node will be created in dom of this component new state will assign to this  

-> to store remember value you can use localstorage 

2. let say you are calling component multiple times or resusing in multiple time then seprate state will be assign for each component 
as in Counter page 

3.  setCount(localStorage.getItem("count"+id)) - > if we simple right this in componet without using useffect then we will get error of calling component multiple time 
reason - > as this will set state(count), as we know if state change then componenet will rerender after rerender again state will change again will render so this process will continue infinite 
solution -> Use useeffect to prevent rerendering as this will stop rerendering as 