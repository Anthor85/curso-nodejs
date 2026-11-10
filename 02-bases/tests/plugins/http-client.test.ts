import { httpClient } from "../../src/plugins/http-client.plugin";
import { describe, test, expect } from "@jest/globals";

describe("plugins/httpClient.plugin", () => {
  test("should call return data", async () => {
    const data = await httpClient.getUrl('https://jsonplaceholder.typicode.com/todos/1');
    expect(data).toEqual({
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": expect.any(Boolean)
    });
  });
});
