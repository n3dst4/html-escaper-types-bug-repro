import { escape as escapeText } from "html-escaper";

console.log(escapeText("Hello <script>alert('XSS')</script>"));
