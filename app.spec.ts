import request from "supertest";
import { calc } from "./src/utils";
import app from "./src/app";

describe("App", () => {
    it("should cal discount", () => {
        const res = calc(100, 10);
        expect(res).toBe(10);
    });

    it("should return 200 status", async () => {
        const response = await request(app).get("/").send();
        expect(response.statusCode).toBe(200);
    });
});
