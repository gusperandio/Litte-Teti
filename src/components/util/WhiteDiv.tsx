// interface WhiteDivProps {
//   width?: string;
//   height?: string;
// }
import * as React from "react";

// export default function WhiteDiv(props: any) {
//   return (
//     <div className="flex justify-center items-center mx-16">
//       <div
//         className="bg-slate-50 rounded-2xl"
//         style={{ width: "80rem", height: "40rem" }}
//       >
//         {this.props.children}
//       </div>
//     </div>
//   );
// }

interface IProps {
  children: React.ReactChild;
  width: string
  height: string
 }

 export default class WhiteDiv extends React.Component<IProps> {
  render() {
    return (
      <div className="flex justify-center items-center mx-16">
        <div
          className="bg-slate-50 rounded-2xl"
          style={{ width: this.props.width, height: this.props.height }}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}
