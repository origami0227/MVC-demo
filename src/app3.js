import $ from "jquery";
import "./app3.css";
const $square = $("#app3 .square");

$square.on("click", () => {
  $square.toggleClass("active"); //如果没有类就加上，如果有就删掉 可以实现反复
});
