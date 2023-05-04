import { baseUrl } from ".";

declare var process: {
  env: {
    NODE_ENV: string;
  };
};

describe("GIVEN a particular environment", () => {
  it("should return https://www.test.api when the environment is development", () => {
    process.env.NODE_ENV = "development";

    expect(baseUrl()).toBe("https://www.test.api");
  });
  it("should return https://www.live.api when the environment is production", () => {
    process.env.NODE_ENV = "production";

    expect(baseUrl()).toBe("https://www.live.api");
  });
});
