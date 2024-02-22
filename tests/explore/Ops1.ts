// export const toOps = (maybeProxiedRef: Ref): Op => {
//   const ref = unproxied(maybeProxiedRef);
//   const initial = getNodeOutput(ref.original.id);
//
//   return ref.props.reduce((prevOp, prop) => {
//     if (prop.t === "Ref") {
//       return toOps(prop.value);
//     } else {
//       if (!isNaN(parseInt(prop.value))) {
//         return getItem(prop.value, prevOp);
//       } else {
//         return getAttr(prop.value, prevOp);
//       }
//     }
//   }, initial);
// };
//
// type Op = {
//   $op: string;
//   args: any[];
// };
//
// const getNodeOutput = (nodeId: string): Op => ({
//   $op: "getNodeOutput",
//   args: [nodeId],
// });
//
// const getItem = (index: string, op: Op): Op => ({
//   $op: "getItem",
//   args: [index, op],
// });
//
// const getAttr = (attr: string, op: Op): Op => ({
//   $op: "getAttr",
//   args: [attr, op],
// });
//
