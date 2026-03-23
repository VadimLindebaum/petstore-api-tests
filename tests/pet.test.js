const client = require("../helpers/client");

const PET_ID = 7000042;

const pet = {
  id: PET_ID,
  name: "Doggo",
  status: "available",
  photoUrls: ["https://example.com/dog.jpg"],
};

describe("Pet lifecycle", () => {
  it("POST /pet — creates a pet", async () => {
    const res = await client.post("/pet", pet);

    expect(res.status).toBe(200);
    expect(res.data.id).toBe(PET_ID);
    expect(res.data.name).toBe("Doggo");
  });

  it("GET /pet/:id — returns the created pet", async () => {
    const res = await client.get(`/pet/${PET_ID}`);

    expect(res.status).toBe(200);
    expect(res.data.id).toBe(PET_ID);
    expect(res.data.name).toBe("Doggo");
  });

  it("PUT /pet — updates the pet name and status", async () => {
    const res = await client.put("/pet", { ...pet, name: "Doggo Updated", status: "sold" });

    expect(res.status).toBe(200);
    expect(res.data.name).toBe("Doggo Updated");
    expect(res.data.status).toBe("sold");
  });

  it("GET /pet/:id — returns the updated pet", async () => {
    const res = await client.get(`/pet/${PET_ID}`);

    expect(res.status).toBe(200);
    expect(res.data.name).toBe("Doggo Updated");
    expect(res.data.status).toBe("sold");
  });

  it("DELETE /pet/:id — deletes the pet", async () => {
    const res = await client.delete(`/pet/${PET_ID}`);

    expect(res.status).toBe(200);
  });

  it("GET /pet/:id — returns 404 after deletion", async () => {
    const res = await client.get(`/pet/${PET_ID}`);

    expect(res.status).toBe(404);
  });
});
