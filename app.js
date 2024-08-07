// =============
// || Lesson 1
// =============
// ReactDOM.render(
//   <ul>
//     <li>Thing 1</li>
//     <li>Thing 2 </li>
//   </ul>,
//   document.getElementById("root")
// );

// =============
// || Lesson 2
// =============
// function mainContent() {
//   return <h1>I'm learning React!</h1>;
// }

// ReactDOM.render(
//   <div>
//     <Navbar />
//     <mainContent />
//   </div>,
//   document.getElementById("root")
// );

// =============
// || Lesson 3
// =============
// ReactDOM.render(<h1 class = "header">Hello, React!</h1>, document.getElementById("root"));

// const h1 = document.createElement("h1");
// h1.textContent = "Uhuyyyy";
// h1.className = "header";
// document.getElementById("root").append(h1);

// =============
// || Lesson 4
// =============
// const page = (
//   <div>
//     <h1 className="header">This is JSX</h1>
//     <p>This is a paragraph</p>
//   </div>
// );

// ReactDOM.render(page, document.getElementById("root"));
// const navbar = (
//   <nav>
//     <h1>Tambal Ban Siva</h1>
//     <ul>
//       <li>Pricing</li>
//       <li>About</li>
//       <li>Contact</li>
//     </ul>
//   </nav>
// );

// =============
// ReactDOM.render(navbar, document.getElementById("root"));

function Header() {
  return (
    <header>
      <nav>
        <img src="image.png" className="nav-logo" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function Main() {
  return (
    <div className="main-content">
      <h1>The Reason why i want to be frontend developer</h1>
      <ol>
        <li>
          because it's easy to show our portofolio to the company we want to go
        </li>
        <li>it's relative easy compare to backend developer to find a job</li>
        <li>
          i can pivot to fullstact developer or backend enginer to get higher
          pay raise
        </li>
      </ol>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <small> &copy; 2024 frontend engineer. All rights reserved.</small>
    </footer>
  );
}

function Page() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
