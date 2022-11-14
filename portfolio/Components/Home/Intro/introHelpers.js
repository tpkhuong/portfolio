export function swipeLeftBtn(event) {
  console.log(event.detail);
  event.target.closest("BUTTON").getAttribute("data-introbtnclicked") == "false"
    ? event.target
        .closest("BUTTON")
        .setAttribute("data-introbtnclicked", "true")
    : event.target
        .closest("BUTTON")
        .setAttribute("data-introbtnclicked", "false");
  // select intro-snap-item then select parent element
  const introSnapElement = document.getElementById("intro-snap-item");
  const carouselBtnElement = document.getElementById("show-intro");
  event.target.closest("BUTTON").getAttribute("data-introbtnclicked") == "true"
    ? setTimeout(() => {
        introSnapElement.parentElement.scrollBy(20, 0);
      }, 350)
    : null;
  carouselBtnElement.getAttribute("data-carouselbtnclicked") == "true"
    ? carouselBtnElement.setAttribute("data-carouselbtnclicked", "false")
    : null;
}

function Tooltip({ text, children, hovering }) {
  return (
    // don't need onMouseOver or onMouseOut because we are passing in hovering.
    <Hover>
      {/* we will have what we want to render as a children prop to <Hover> component */}
      {(hovering) => (
        <div style={styles.container}>
          {hovering === true && <div style={styles.tooltip}>{text}</div>}
          {children}
        </div>
      )}
      {/* <div style={styles.container}>
        {hovering === true && <div style={styles.tooltip}>{text}</div>}
        {children}
      </div> */}
    </Hover>
  );
}

class Hover extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hovering: false,
    };

    this.mouseOver = this.mouseOver.bind(this);
    this.mouseOut = this.mouseOut.bind(this);
  }
  mouseOver() {
    this.setState({
      hovering: true,
    });
  }

  mouseOut() {
    this.setState({
      hovering: false,
    });
  }
  render() {
    return (
      <div onMouseOut={this.mouseOut} onMouseOver={this.mouseOver}>
        {this.props.children(this.state.hovering)}
      </div>
    );
  }
}
