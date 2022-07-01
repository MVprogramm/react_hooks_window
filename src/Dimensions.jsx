import React, { useEffect, useState } from 'react';

const Dimensions = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const onResize = (event) => {
      const { innerWidth, innerHeight } = event.target;
      setWidth(innerWidth);
      setHeight(innerHeight);
    };
    window.addEventListener('resize', onResize);
  }, [width, height]);

  return (
    <div className="dimensions">
      {`${width}px - ${height}px`}
    </div>
  );
}

// class Dimensions extends React.Component {
//   state = {
//     width: window.innerWidth,
//     height: window.innerHeight
//   }

//   componentDidMount() {
//     window.addEventListener('resize', this.onPesize);

//     this.setDimensions(
//       this.state.width,
//       this.state.height
//     );
//   }

//   componentWillUnmount() {
//     window.removeEventListener('resize', this.onPesize);
//   }

//   onPesize = (event) => {
//     this.setDimensions(
//       event.target.innerWidth,
//       event.target.innerHeight
//     )
//   }

//   setDimensions = (width, height) => {
//     this.setState({
//       width,
//       height
//     });

//     document.title = `${width} x ${height}`;
//   }

//   render() {
//     return (
//       <div className="dimensions">
//         {`${this.state.width}px - ${this.state.height}px`}
//       </div>
//     );
//   }
// };

export default Dimensions;

