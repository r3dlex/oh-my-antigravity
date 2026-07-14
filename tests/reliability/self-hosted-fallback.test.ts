import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const workflowFiles = [
  ".github/workflows/ci.yml",
  ".github/workflows/ci-prek.yml",
];

describe("self-hosted CI fallback", () => {
  it.each(workflowFiles)(
    "%s makes every self-hosted job opt-in",
    (workflowFile) => {
      const workflow = readFileSync(resolve(workflowFile), "utf8");
      const jobs = [
        ...workflow.matchAll(
          /^  (_[^:\n]+-self-hosted):\n([\s\S]*?)(?=^  [A-Za-z0-9_-]+:\n|(?![\s\S]))/gm,
        ),
      ];

      expect(jobs.length).toBeGreaterThan(0);
      for (const [, name, body] of jobs) {
        expect(body, name).toMatch(
          /^[ ]{4}if: .*vars\.SELF_HOSTED_CI_ENABLED/m,
        );
      }
    },
  );

  it.each(workflowFiles)(
    "%s only accepts an explicit self-hosted success marker",
    (workflowFile) => {
      const workflow = readFileSync(resolve(workflowFile), "utf8");

      expect(workflow).not.toMatch(
        /needs\._[^.\s]+-self-hosted\.result == 'success'/,
      );

      const gateChecks = [
        ...workflow.matchAll(
          /^  (_[^:\n]+-gate):\n([\s\S]*?)(?=^  [A-Za-z0-9_-]+:\n|(?![\s\S]))/gm,
        ),
      ];

      expect(gateChecks.length).toBeGreaterThan(0);
      for (const [, name, body] of gateChecks) {
        expect(body, name).toMatch(
          /if: needs\._[^.\s]+-self-hosted\.outputs\.passed == 'true'/,
        );
      }
    },
  );

  it("does not run dependent self-hosted jobs after lint lacks a success marker", () => {
    const workflow = readFileSync(
      resolve(".github/workflows/ci.yml"),
      "utf8",
    );
    const dependentJobs = [
      ...workflow.matchAll(
        /^  (_[^:\n]+-self-hosted):\n([\s\S]*?)(?=^  [A-Za-z0-9_-]+:\n|(?![\s\S]))/gm,
      ),
    ].filter(
      ([, name, body]) =>
        name !== "_lint-self-hosted" &&
        body?.includes("needs: _lint-self-hosted") === true,
    );

    expect(dependentJobs.length).toBeGreaterThan(0);
    for (const [, name, body] of dependentJobs) {
      expect(body, name).toMatch(
        /if: always\(\).*needs\._lint-self-hosted\.outputs\.passed == 'true'/,
      );
    }
  });
});
