import "./position"
import "./radix"

export const get16Color = (color: string) => {
  // RGB颜色值的正则
  const reg = /^(rgb|RGB)/;
  if (reg.test(color)) {
    let strHex = "#";
    // 把RGB的3个数值变成数组
    const colorArr = color.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
    // 转成16进制
    for (let i = 0; i < colorArr.length; i++) {
      let hex = Number(colorArr[i]).toString(16);
      if (hex.length < 2) {
        hex = `0${hex}`
      }
      strHex += hex;
    }
    return strHex;
  } else {
    return String(color);
  }
}