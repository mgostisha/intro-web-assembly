class WasmLoader {
  constructor() {}

  async wasm(path) {
    console.log('Fetching WASM at path:', path);

    if (!WebAssembly.instantiateStreaming) {
      return this.wasmFallback(path);
    }

    const { instance } = await WebAssembly.instantiateStreaming(fetch(path));

    return instance && instance.exports;
  }

  async wasmFallback(path) {
    console.log('Fetching WASM from fallback at path:', path);

    const response = await fetch(path);
    if (!response) return;

    const bytes = await response.arrayBuffer();
    const { instance } = await WebAssembly.instantiate(bytes);

    return instance && instance.exports;
  }
}
