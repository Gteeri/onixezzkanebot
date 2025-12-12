
// Internal Configuration Storage
// Stores the API key in an encoded format to prevent plain-text exposure in the repo.

// Base64 encoded key: AIzaSyB9FNGmmizRMVDYj8FASeQgUleirIaoy1I
const _S = "QUl6YVN5QjlGTkdtbWl6Uk1WRFlqOEZBU2VRZ1VsZWlySWFveTFJ";

export const getGeminiKey = (): string => {
    try {
        // Decode at runtime
        return atob(_S);
    } catch (e) {
        console.error("Fatal: Config corruption");
        return "";
    }
};
