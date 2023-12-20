export class APIResponse {
  ok: boolean;
  kind: "success" | "failure";
  #response: Response;

  constructor(response: Response) {
    this.ok = response.ok;
    this.kind = response.ok ? "success" : "failure";
    this.#response = response;
  }

  debug() {
    // console.error("[error]", "URL:", url);
    console.log(
      "HTTP Status:",
      this.#response.status,
      this.#response.statusText,
    );
    console.log("Headers:");
    for (let [key, value] of this.#response.headers) {
      console.log(" ", key, "=", value);
    }
    console.log("");
    // console.error("Body:", JSON.stringify(this.#response.body));
  }
}
