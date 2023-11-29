import { jsx, renderRoot } from "@seongbin9786/my-renderer";
import { DocumentAPI } from "./api/DocumentAPI.js";
import { App } from "./components/App.js";

// enableDebugModule("Parser");
// enableDebugModule("NodeParser");
// enableDebugModule("Renderer");
// enableDebugModule("VDOM");
// enableDebugModule("Popup");
// enableDebugModule("Dropdown");
// enableDebugModule("Editor/ShowPlaceholderOnEmptyBlock");

const api = new DocumentAPI("seongbin");

// TODO: 의존성 주입 방식 개선하기
window.api = api;

const $body = document.getElementsByTagName("body").item(0);

if (!$body) {
    throw new Error("<body>가 없습니다.");
}

renderRoot(jsx`<${App} />`, $body);
