{
  /* <div id="parent">
    <div id="child1">
        <h1>Iam in h1 heading</h1>
        <h2>Iam in h2 heading</h2>
    </div>
     <div id="child2">
        <h1>Iam in h1 heading</h1>
        <h2>Iam in h2 heading</h2>
    </div>
</div> */
}

const parent = React.createElement(
  "div",
  { id: "parent" },
 [
     React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Iam in h1 heading"),
    React.createElement("h2", {}, "Iam in h2 heading"),
     ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Iam in h1 heading"),
    React.createElement("h2", {}, "Iam in h2 heading"),
     ])
]
  
  )

console.log(parent);

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello World from React!"
);
console.log("uuuuuuuuuu", heading); //this is basically an object created by react element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); //thi srender method converts this heding object into the h1 tag and putting up into the root.
