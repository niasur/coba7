import "@testing-library/jest-dom";
import { TextEncoder, TextDecoder } from "util";

// Memperluas tipe global agar TypeScript tidak salah membaca
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder as unknown as typeof global.TextDecoder;