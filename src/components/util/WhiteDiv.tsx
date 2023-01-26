// interface WhiteDivProps {
//   width?: string;
//   height?: string;
// }

export default function WhiteDiv() {
  return (
      <div className="flex justify-center items-center mx-16">
        <div
          className="bg-slate-50 rounded-2xl"
          style={{ width: "80rem", height: "40rem" }}
        ></div>
      </div>
  );
}
