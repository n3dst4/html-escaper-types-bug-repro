import { escape } from "html-escaper";

console.log(escape("Hello <script>alert('XSS')</script>"));
