import { describe, it, expect, beforeEach } from "vitest";
import { usePointsStore } from "@/stores/points-store";

describe("usePointsStore", () => {
  beforeEach(() => {
    usePointsStore.setState({ balance: 0 });
  });

  it("initialises with zero balance", () => {
    expect(usePointsStore.getState().balance).toBe(0);
  });

  it("sets balance to an exact value", () => {
    usePointsStore.getState().setBalance(500);
    expect(usePointsStore.getState().balance).toBe(500);
  });

  it("adds points to the current balance", () => {
    usePointsStore.getState().setBalance(100);
    usePointsStore.getState().addPoints(50);
    expect(usePointsStore.getState().balance).toBe(150);
  });

  it("deducts points when balance is sufficient", () => {
    usePointsStore.getState().setBalance(200);
    const success = usePointsStore.getState().deductPoints(80);
    expect(success).toBe(true);
    expect(usePointsStore.getState().balance).toBe(120);
  });

  it("rejects deduction when balance is insufficient", () => {
    usePointsStore.getState().setBalance(30);
    const success = usePointsStore.getState().deductPoints(50);
    expect(success).toBe(false);
    expect(usePointsStore.getState().balance).toBe(30);
  });
});
