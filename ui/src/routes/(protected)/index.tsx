import { A } from "@solidjs/router";
import type { Component } from "solid-js";
import { Card, CardContent, CardHeader } from "~/components/Card";
import Button from "~/components/form/Button";

const Index: Component = () => {
  return (
    <div class="gap-4 flex flex-col">
      <h1>Welcome to Peepr</h1>
      <p>Peepr is a tool to help you track your pull requests across your organization.</p>
      <p>Get insights into PR statistics, CI/CD metrics, and development velocity.</p>
      <div class="flex flex-col items-center gap-4">
        <A href="/repositories" class="no-decoration" tabIndex={-1}>
          <Button size="lg" variant="cta" tabIndex={0}>
            Peep a Repo
          </Button>
        </A>

        <p class="text-sm text-secondary">
          Select a repository to start tracking pull request metrics and CI/CD performance.
        </p>
      </div>
    </div>
  )
}

export default Index;
